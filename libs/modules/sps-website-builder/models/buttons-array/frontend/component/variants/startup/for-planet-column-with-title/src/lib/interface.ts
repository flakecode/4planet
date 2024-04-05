import { IModel } from "@sps/sps-website-builder-models-buttons-array-contracts";
import { IModel as IModelExtended } from "@sps/sps-website-builder-models-buttons-array-contracts-extended";

export const variant = "for-planet-column-with-title" as const;

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
