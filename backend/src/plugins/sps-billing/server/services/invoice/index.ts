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
    .replace(
      "{{TREES}}",
      inflectNoun(params.count, "дерево", "дерева", "деревьев"),
    );

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

/**
 * @abstract inflect == склонять, тут применяются правила склонения для русского языка, но для английского они тоже подходят
 * @param number - число, по которому определяется склонение
 * @param one - форма склонения для 1 (или если число заканчивается на 1, кроме 11)
 * @param two  - форма склонения для чисел от 2 до 4 (или если число заканчивается на 2, 3, 4, кроме 12, 13, 14)
 * @param five – форма склонения для чисел от 5 до 20 (или если число заканчивается на 5, 6, 7, 8, 9, 0)
 * @returns одну из 3ех форм склонения
 */
export function inflectNoun<T>(number: number, one: T, two: T, five: T): T {
  let n = Math.abs(number);
  n %= 100;
  if (n >= 5 && n <= 20) {
    return five;
  }
  n %= 10;
  if (n === 1) {
    return one;
  }
  if (n >= 2 && n <= 4) {
    return two;
  }
  return five;
}
