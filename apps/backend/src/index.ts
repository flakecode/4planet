"use strict";

import setPermissions from "./utils/bootstrap/set-permissions";
import clearMediaLibrary from "./utils/bootstrap/clear-media-library";
import Telegram from "./services/Telegram";

export default {
  async bootstrap({ strapi }) {
    // await strapi
    //   .service("plugin::sps-billing.invoice")
    //   .createCertificate({ count: 123 });

    if (
      process.env.NODE_ENV === "production" ||
      process.env.SET_PERMISSIONS === "true"
    ) {
      await setPermissions();
    }

    strapi;

    strapi.errorCatcher = (error, ctx) => {
      if (process.env.SENTRY_DSN) {
        strapi.plugin("sentry").service("sentry").sendError(error);
      }
    };

    console.error = strapi.errorCatcher;

    if (process.env.CLEAR_MEDIA_LIBRARY && !process.env.SEED_ENTITIES) {
      clearMediaLibrary();
    }

    if (process.env.SEED_ENTITIES) {
      await strapi.service("plugin::sps-migrate.seeder").run();
    }

    if (process.env.RUN_TELEGRAM_BOT) {
      const telegramBot = new Telegram();
      strapi.telegram = telegramBot;
    }

    if (process.env.MAKE_NEW_SEED) {
      await strapi.service("plugin::sps-migrate.dumper").run();
    }
  },
};
