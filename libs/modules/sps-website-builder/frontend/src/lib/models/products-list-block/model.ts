import {
  IModel as IParentModel,
  variants as parentVariants,
} from "@sps/sps-website-builder-contracts/lib/models/products-list-block/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-website-builder-contracts-extended/lib/models/products-list-block/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts/lib/models/products-list-block/populate";

export const variants = [...parentVariants] as const;

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "ProductsListBlock";
export const route = "components/page-blocks.products-list-block";
export const populate = modelPopulate;
