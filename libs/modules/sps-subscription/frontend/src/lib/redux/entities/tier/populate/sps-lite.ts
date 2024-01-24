import { populate as attributePopulate } from "../../attribute/populate";
import { populate as buttonPopulate } from "~redux/services/backend/components/elements/button/populate";

export const populate = {
  attributes: {
    populate: attributePopulate,
  },
  buttons: {
    populate: buttonPopulate,
  },
};
