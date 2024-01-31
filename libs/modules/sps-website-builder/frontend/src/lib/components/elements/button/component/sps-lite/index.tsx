import { Default } from "./Default";
import { Locale } from "./Locale";
import { IComponentProps, IComponentPropsExtended } from "..";

export const variants = {
  text: Default,
  primary: Default,
  secondary: Default,
  locale: Locale,
  destructive: Default,
  outline: Default,
  ghost: Default,
  link: Default,
};

export default function SpsLite(
  props: IComponentProps | IComponentPropsExtended,
) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
