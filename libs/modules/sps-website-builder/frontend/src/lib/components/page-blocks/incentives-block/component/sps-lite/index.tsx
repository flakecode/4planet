import FourColumnWithIllustrations from "./FourColumnWithIllustrations";
import { IPageBlock, IPageBlockExtended } from "..";

export const variants = {
  "four-column-with-illustrations": FourColumnWithIllustrations,
};

export default function SpsLite(props: IPageBlock | IPageBlockExtended) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
