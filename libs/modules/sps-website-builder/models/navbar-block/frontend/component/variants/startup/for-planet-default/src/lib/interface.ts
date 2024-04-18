import { IModel } from "@sps/sps-website-builder-models-navbar-block-contracts";
import { IModel as IModelExtended } from "@sps/sps-website-builder-models-navbar-block-contracts-extended";

export const variant = "for-planet-default" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  data: IModel;
  children?: any;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended;
}
