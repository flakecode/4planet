import { populate as parentPopulate } from "@sps/sps-website-builder-contracts/lib/models/incentives-block/populate";
import { populate as featurePopulate } from "@sps/sps-website-builder-contracts/lib/models/feature/populate";
import { populate as filePopulate } from "@sps/sps-file-storage-contracts/lib/entities/file/populate";

export const populate = {
  ...parentPopulate,
  features: {
    populate: featurePopulate,
  },
  media: {
    populate: filePopulate,
  },
  additional_media: {
    populate: filePopulate,
  },
};
