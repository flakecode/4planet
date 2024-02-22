import {
  IModel as IParentModel,
  variants as parentVariants,
} from "@sps/sps-website-builder-models-products-list-block-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder-models-products-list-block-contracts-extended";

export const variants = [...parentVariants] as const;

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "ProductsListBlock";
export const route = "components/page-blocks.products-list-block";
export const populate = modelPopulate;
