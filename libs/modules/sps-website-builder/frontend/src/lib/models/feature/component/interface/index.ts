import { HTMLAttributes } from "react";
import {
  IComponentProps as IParentComponentProps,
  IComponentPropsExtended as IParentComponentPropsExtended,
} from "./startup";

type onClick = HTMLAttributes<HTMLDivElement>["onClick"];
export interface IComponentProps extends IParentComponentProps {
  onClick?: onClick;
}

export interface IComponentPropsExtended extends IParentComponentPropsExtended {
  onClick?: onClick;
}
