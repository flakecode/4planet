import { IModel } from "@sps/sps-ecommerce-models-attribute-contracts";
import { IModel as IModelExtended } from "@sps/sps-ecommerce-models-attribute-contracts-extended";

export const variant = "default" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  data: IModel;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended;
}
