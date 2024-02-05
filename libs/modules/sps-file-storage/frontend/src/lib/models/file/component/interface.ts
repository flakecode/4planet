import { IModel, IModelExtended } from "../_model";

export interface IComponentProps extends IModel {
  showSkeletons?: boolean;
  isServer: boolean;
  variant: "default" | "image";
  containerClassName?: string | null;
  className?: string | null;
}

export interface IComponentPropsExtended
  extends IComponentProps,
    IModelExtended {
  showSkeletons?: boolean;
}
