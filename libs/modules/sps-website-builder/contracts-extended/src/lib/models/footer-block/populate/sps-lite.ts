import { populate as parentPopulate } from "@sps/sps-website-builder-contracts/lib/models/footer-block/populate";
import { populate as logotypePopulate } from "@sps/sps-website-builder-contracts/lib/models/logotype/populate";
import { populate as buttonsArrayPopulate } from "@sps/sps-website-builder-buttons-array-contracts";

export const populate = {
  ...parentPopulate,
  logotype: {
    populate: logotypePopulate,
  },
  buttons_arrays: {
    populate: buttonsArrayPopulate,
  },
  additional_buttons_arrays: {
    populate: buttonsArrayPopulate,
  },
  extra_buttons_arrays: {
    populate: buttonsArrayPopulate,
  },
};
