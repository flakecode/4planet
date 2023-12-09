import { populate as fileUploadPopulate } from "~redux/services/backend/models/upload/populate";
import { populate as buttonPopulate } from "~redux/services/backend/components/elements/button/populate";
import { populate as formPopulate } from "~redux/services/backend/models/form/populate";

export const populate = {
  buttons: {
    populate: buttonPopulate,
  },
  media: {
    populate: fileUploadPopulate,
  },
  additionalMedia: {
    populate: fileUploadPopulate,
  },
  form: {
    populate: formPopulate,
  },
};
