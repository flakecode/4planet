// import dynamic from "next/dynamic";
import { IComponentProps } from "./interface";
import { ReduxProvider } from "../../../redux";
import { default as Comp } from "./client";

export function Component(props: IComponentProps) {
  // const Comp = props.isServer
  //   ? dynamic(() => import("./server"), {})
  //   : dynamic(() => import("./client"), {});

  return (
    <ReduxProvider>
      <Comp {...props} />
    </ReduxProvider>
  );
}
