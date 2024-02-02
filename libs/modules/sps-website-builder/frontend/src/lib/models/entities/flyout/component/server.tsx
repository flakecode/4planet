"use server";
import "server-only";

import { IComponentProps } from "./interface";
import { api } from "../api/server";
import { variants } from "./variants";

// default is required for dynamic import
export default async function Server(props: IComponentProps) {
  console.log(`🚀 ~ Server ~ props:`, props);
  const data = await api.findOne({ id: props.id });

  const Comp = variants[props?.variant as keyof typeof variants];

  if (!Comp || !data) {
    return <></>;
  }

  return <Comp {...props} {...data} />;
}
