import { FC } from "react";
import { IMedia } from "types";
import { IFeature } from "types/components";
import SimpleThreeColumn from "./SimpleThreeColumn";
import ThreeColumnWithSlider from "./ThreeColumnWithSlider";
import WithProductScreenshotOnLeft from "./WithProductScreenshotOnLeft";

export interface IFeatureSections {
  features: IFeature[];
  variant: keyof typeof variants;
  title?: string;
  subtitle?: string;
  description?: string;
  anchor?: string;
  media?: IMedia[];
}

const variants = {
  "simple-three-column": SimpleThreeColumn,
  "with-product-screenshot-on-left": WithProductScreenshotOnLeft,
  "three-column-with-slider": ThreeColumnWithSlider,
};

export default function FeatureSections(props: IFeatureSections) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<IFeatureSections>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
