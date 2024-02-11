import {
  IComponentProps as IParentComponentProps,
  IComponentPropsExtended as IParentComponentPropsExtended,
} from "./sps-lite";

export interface IComponentProps
  extends Omit<IParentComponentProps, "variant"> {
  variant:
    | IParentComponentProps["variant"]
    | "timeline"
    | "requisite"
    | "how-it-works"
    | "tier"
    | "headlines";
}

export interface IComponentPropsExtended
  extends IParentComponentPropsExtended {}
