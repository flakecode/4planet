import { IPageBlock, IPageBlockExtended } from "..";
import SimpleWithHeading from "./SimpleWithHeading";

export const variants = {
  "simple-with-heading": SimpleWithHeading,
};

export default function SpsLite(props: IPageBlock | IPageBlockExtended) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
