import { variants as spsLiteVariants } from "./sps-lite/variants";
import { variants as spsVariants } from "./sps/variants";
import { variants as startupVariants } from "./startup/variants";

export const variants = {
  ...spsLiteVariants,
  ...spsVariants,
  ...startupVariants,
};
