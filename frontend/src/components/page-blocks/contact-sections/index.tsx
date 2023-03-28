import { FC } from "react";
import { IForm, IMedia } from "types";
import { IButtonsArray } from "~components/buttons/buttons-arrays";
import SplitBrandPanel from "./SplitBrandPanel";

export interface IContactSecton {
  variant: keyof typeof variants;
  title?: string;
  description?: string;
  media?: IMedia;
  form?: IForm;
  buttonsArrays?: IButtonsArray[];
  anchor?: string;
}

const variants = {
  "split-brand-panel": SplitBrandPanel,
};

export default function ContactSectons(props: IContactSecton) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<IContactSecton>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
