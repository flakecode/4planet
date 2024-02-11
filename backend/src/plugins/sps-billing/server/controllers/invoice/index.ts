/**
 * invoice controller
 */

import crypto from "crypto";
import { factories } from "@strapi/strapi";
import { errors } from "@strapi/utils";

const { ValidationError } = errors;
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
    body;
    return { code: 0 };
  },
};
