/**
 * invoice controller
 */

import crypto from "crypto";
import { factories } from "@strapi/strapi";
import { errors } from "@strapi/utils";

const { ValidationError } = errors;

const isPdf = true;
export default factories.createCoreController(
  "plugin::sps-billing.invoice",
  ({ strapi }) => ({
    async confirm(ctx: any) {
      ctx;
      const { id } = ctx.params;
      const { sign, redirect_to } = ctx.query;
      const invoice = await strapi
        .service("plugin::sps-billing.invoice")
        .findOne(id);
      if (sign === invoice.sign) {
        // @ts-ignore
        ctx.request.body = { data: { status: "success" } };
        await super.update(ctx);
        return ctx.redirect(`${process.env.FRONTEND_URL}${redirect_to}`);
      }
      return ctx.redirect(`${process.env.FRONTEND_URL}${redirect_to}`);
    },
    async webhook(ctx: any) {
      const { provider } = ctx.params;
      const providerHandler = billingProviders[provider];
      if (typeof providerHandler !== "function") {
        throw new ValidationError(`Provider ${provider} not found`);
      }
      return providerHandler(ctx);
    },
    async getCertificate(ctx: any) {
      const { count, type = "pdf" } = ctx.query;

      const returnType = type === "pdf" ? "pdf" : "html";
      const cert = await strapi
        .service("plugin::sps-billing.invoice")
        .createCertificate({ count, returnType });

      ctx;
      ctx.response.type =
        returnType === "html" ? "text/html" : "application/pdf";
      ctx.body = cert;
    },
  }),
);

const billingProviders = {
  "zero-x": async (ctx: any) => {
    const { Signature, BillingID, PaymentId, Email, Currency } =
      // @ts-ignore
      ctx.request.body;
    const string = `${PaymentId}:${process.env.ZERO_X_PROCESSING_SHOP_ID}:${Email}:${Currency}:${process.env.ZERO_X_PROCESSING_WEBHOOK_PASSWORD}`;
    const hash = crypto.createHash("md5").update(string).digest("hex");
    if (hash === Signature) {
      await strapi.service("plugin::sps-billing.invoice").update(BillingID, {
        data: {
          status: "success",
        },
      });
    }
    return { success: true };
  },
  "cloud-payments": async (ctx: any) => {
    const { body } = ctx.request;

    const user = await strapi
      .service("plugin::users-permissions.user")
      .findOrCreate({
        email: body.Email,
        username: body.Email,
      });

    const order = await strapi.entityService.create(
      "plugin::sps-ecommerce.order",
      {
        data: {
          amount: parseFloat(body.Amount),
          user: user.id,
          status: "paid",
          email: body.Email,
        },
      },
    );
    const invoice = await strapi.entityService.create(
      "plugin::sps-billing.invoice",
      {
        data: {
          status: "success",
          provider: "cloud-payments",
          provider_data: body,
          amount: parseFloat(body.Amount),
          currency: body.Currency,
          orders: [order.id],
          publishedAt: new Date(),
        },
      },
    );

    invoice;

    try {
      const treeCount = JSON.parse(body.Data)?.["treeAmount"];

      if (treeCount && treeCount > 0) {
        const res = await strapi.plugins["email"].services.email.send({
          to: body.Email,
          from: "no-reply@mail.singlepagestartup.com",
          replyTo: "alex4planet@mail.ru",
          subject: "Сертификат",
          html: `<h1>Сертификат о посадке деревьев</h1>
          Спасибо, что сажаете деревья вместе с нами! Ваш сертификат доступен <a target="_blank" href="https://forplanet.singlepagestartup.com/api/certificate/?count=${treeCount}&type=pdf">по ссылке</a>`,
        });

        res;
      }
    } catch (error) {
      console.log("webhook error", error);
    }

    return { code: 0 };
  },
};
/*
const paidBody = {
  TransactionId: "2236146119",
  Amount: "9500.00",
  Currency: "RUB",
  PaymentAmount: "9500.00",
  PaymentCurrency: "RUB",
  OperationType: "Payment",
  InvoiceId: "",
  AccountId: "",
  SubscriptionId: "",
  Name: "",
  Email: "degoev2@gmail.com",
  DateTime: "2024-02-15 03:11:42",
  IpAddress: "64.226.113.147",
  IpCountry: "US",
  IpCity: "Атланта",
  IpRegion: "Джорджия",
  IpDistrict: "Атланта",
  IpLatitude: "33.749",
  IpLongitude: "-84.38798",
  CardId: "65698efb366fa86fc1e46937",
  CardFirstSix: "424242",
  CardLastFour: "4242",
  CardType: "Visa",
  CardExpDate: "01/29",
  Issuer: "TINKOFF",
  IssuerBankCountry: "RU",
  Description: "Оплата деревьев в 4planet.ru",
  TestMode: "1",
  Status: "Authorized",
  Data: '{"myProp":"myProp value"}',
  CardProduct: "",
  PaymentMethod: "",
};*/
