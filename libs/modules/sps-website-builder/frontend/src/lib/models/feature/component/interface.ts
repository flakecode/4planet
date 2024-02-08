import { IModel, IModelExtended } from "../_model";

export interface IComponentProps extends IModel {
  isServer: boolean;
  showSkeletons?: boolean;
  variant: "default" | "timeline" | "requisites" | "howItWorks" | "tiers";
}

export interface IComponentPropsExtended
  extends IComponentProps,
    IModelExtended {}
