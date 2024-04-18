import React from "react";
import { IComponentPropsExtended } from "./interface";
import ReactMarkdown from "react-markdown";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="feature"
      data-variant={props.variant}
      className="w-full py-10 flex flex-col gap-1"
    >
      <div className="relative flex justify-between max-w-7xl mx-auto">
        {props.data?.description ? (
          <ReactMarkdown className="text-white text-xl font-medium opacity-30 flex flex-col gap-10">
            {props.data?.description}
          </ReactMarkdown>
        ) : null}
      </div>
    </div>
  );
}
