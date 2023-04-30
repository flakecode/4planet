"use strict";
const strapiUtils = require("@rogwild/strapi-utils");
const path = require("path");
const customizeCoreStrapi = require("./utils/bootstrap/customize-core-strapi");
const setPermissions = require("./utils/bootstrap/set-permissions");

module.exports = {
  async bootstrap({ strapi }) {
    customizeCoreStrapi({ strapi });
    await setPermissions();

    if (process.env.SEED_ENTITES) {
      try {
        const apiPath = path.join(__dirname, "./api");
        strapiUtils.seeder(apiPath);
      } catch (error) {
        console.log("🚀 ~ bootstrap ~ seeder ~ error: ", error.message);
      }
    }

    if (process.env.MAKE_NEW_SEED) {
      const mainApiPath = path.join(__dirname, "../../src", "./api");
      await strapiUtils.dumper(mainApiPath);
    }
  },
};
