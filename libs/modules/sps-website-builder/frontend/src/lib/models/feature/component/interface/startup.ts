import {
  IComponentProps as IParentComponentProps,
  IComponentPropsExtended as IParentComponentPropsExtended,
} from "./sps-lite";

export interface IComponentProps
  extends Omit<IParentComponentProps, "variant"> {
  variant:
    | IParentComponentProps["variant"]
    | "timeline"
    | "requisites"
    | "howItWorks"
    | "tier"
    | "headlines";
}

export interface IComponentPropsExtended
  extends IParentComponentPropsExtended {}
