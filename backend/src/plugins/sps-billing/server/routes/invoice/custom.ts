export default {
  type: "content-api",
  routes: [
    {
      method: "GET",
      path: "/invoices/:id/confirm",
      handler: "invoice.confirm",
    },
    {
      method: "GET",
      path: "/invoices/certificate/:count",
      handler: "invoice.getCertificate",
    },
    {
      method: "POST",
      path: "/invoices/webhook/:provider",
      handler: "invoice.webhook",
    },
  ],
};
