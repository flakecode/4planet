import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import { variants as spsVariants } from "./sps";
import { IComponent } from "@sps/sps-website-builder-contracts/lib/components/page-blocks/hero-section-block/interfaces";
import { IComponent as IComponentExtended } from "@sps/sps-website-builder-contracts-extended/lib/components/page-blocks/hero-section-block/interfaces";
import { IPage } from "@sps/sps-website-builder-contracts-extended/lib/props";
import { FETCH_TYPE } from "@sps/utils";
import { Server } from "./server";
import { Client } from "./client";

export interface IComponentProps extends IComponent, IPage {}
export interface IComponentPropsExtended extends IComponentExtended, IPage {}

export const variants = {
  ...spsLiteVariants,
  ...spsVariants,
  ...startupVariants,
};

export async function PageBlock(props: IComponentProps) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  if (FETCH_TYPE === "server") {
    return <Server {...props} />;
  }

  return <Client {...props} />;
}
