import { populate as featurePopulate } from "~redux/services/backend/components/elements/feature/populate";
import { populate as currencyPopulate } from "~redux/services/backend/models/currency/populate";

export const populate = {
  features: {
    populate: featurePopulate,
  },
  currency: {
    populate: currencyPopulate,
  },
};
