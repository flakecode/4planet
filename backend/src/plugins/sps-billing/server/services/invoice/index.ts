/**
 * invoice service
 */

import { factories } from "@strapi/strapi";
import Provider from "../providers/Provider";

import * as htmlToPdf from "html-pdf-node";
// import * as decode from "decode-html";
const decode = require("decode-html");

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
    async createCertificate(params: { count: number }) {
      const cert = createDocumentFromTemplate(params);
      cert;

      return cert;
    },
  }),
);
async function createDocumentFromTemplate(params: { count: number }) {
  const html = decode(template).replace("{{COUNT}}", String(params.count));

  const options = { width: "907.5px", height: "701.4px" }; // { format: "A4" };
  const file = { content: html };

  const pdfBuffer = await htmlToPdf.generatePdf(file, options).catch((err) => {
    console.log("generatePdf err", err);
    throw err;
  });

  return pdfBuffer; // html
}
const template = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Cetificate</title>
  </head>
  <body style="margin: 0px; height: 100%; background-color: rgb(14, 14, 14)">
    <img
      style="display: block; margin: auto; cursor: zoom-in"
      src="https://forplanet-api.singlepagestartup.com/uploads/IMG_6286_6a075fb021.PNG"
      width="907"
      height="701"
    />

    <div
      style="
        color: white;
        font-weight: 600;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        position: absolute;
        left: 38.9%;
        bottom: 23.7%;
        width: 16%;
        height: 16.5%;
        text-align: center;
        font-size: 40px;
        border: 1px solid white;
        display: flex;
        align-items: center;
        justify-content: center;
      "
    >
    {{COUNT}}
    </div>
    <!-- <div
      style="
        display: block;
        margin: auto;
        cursor: zoom-in;
        width: 100%;
        height: 100%;
        background-image: url('https://forplanet-api.singlepagestartup.com/uploads/IMG_6286_6a075fb021.PNG');
      "
    ></div> -->
  </body>
</html>
`;
