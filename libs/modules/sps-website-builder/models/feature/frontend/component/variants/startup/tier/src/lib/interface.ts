import { IModel } from "@sps/sps-website-builder-models-feature-contracts";
import { IModel as IModelExtended } from "@sps/sps-website-builder-models-feature-contracts-extended";

export const variant = "tier" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  data: IModel;
  onClick: () => void;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended;
}
