/**
 * invoice service
 */

import { factories } from "@strapi/strapi";
import Provider from "../providers/Provider";

import * as htmlToPdf from "html-pdf-node";
// import * as decode from "decode-html";

const decode = require("decode-html");

type CreateDocParams = {
  count: number;
  returnType?: "html" | "pdf";
};

export default factories.createCoreService(
  "plugin::sps-billing.invoice",
  ({ strapi }) => ({
    async create(params) {
      const result = await super.create(params);
      const provider = new Provider({
        invoice: result,
      });
      await provider.proceed();

      return result;
    },
    async createCertificate(params: CreateDocParams) {
      const cert = createDocumentFromTemplate(params);
      cert;

      return cert;
    },
  }),
);

const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:1337"
    : "https://forplanet-api.singlepagestartup.com";

async function createDocumentFromTemplate(params: CreateDocParams) {
  const template = await fetch(`${baseUrl}/certificate/template.html`).then(
    (res) => res.text(),
  );
  const html = decode(template)
    .replace("{{COUNT}}", String(params.count))
    .replace("{{TREES}}", String("дерево"));

  if (params.returnType === "html") {
    return html;
  }

  const options = { width: "990px", height: "700px" }; // { width: "907.5px", height: "701.4px" }
  const file = {
    url: `${baseUrl}/api/sps-billing/invoices/certificate/?count=${params.count}&type=html`,
  }; // { content: html };

  const pdfBuffer = await htmlToPdf.generatePdf(file, options).catch((err) => {
    console.log("generatePdf err", err);
    throw err;
  });

  return pdfBuffer; // html; //
}
