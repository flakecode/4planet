import { IModel } from "@sps/sps-website-builder-models-feature-contracts";
import { IModel as IModelExtended } from "@sps/sps-website-builder-models-feature-contracts-extended";

export const variant = "how-it-works" as const;

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
