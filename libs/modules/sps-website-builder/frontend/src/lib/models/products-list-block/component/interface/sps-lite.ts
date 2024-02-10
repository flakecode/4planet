import { IModel, IModelExtended } from "../../model";

export interface IComponentProps extends IModel {
  showSkeletons?: boolean;
  variant:
    | "default"
    | "timeline"
    | "requisites"
    | "howItWorks"
    | "tiers"
    | "headlines";
  isServer: boolean;
}

export interface IComponentPropsExtended
  extends IComponentProps,
    IModelExtended {}
