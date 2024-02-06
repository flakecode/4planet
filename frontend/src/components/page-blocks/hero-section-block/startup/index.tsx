import { FC } from "react";
import { IPageBlock } from "..";
import FullScreen from "./FullScreen";

export const variants = {
  "full-screen": FullScreen,
};

export default function Startup(props: IPageBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<IPageBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
