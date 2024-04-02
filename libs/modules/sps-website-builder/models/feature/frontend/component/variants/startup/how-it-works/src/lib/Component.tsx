import React from "react";
import { IComponentPropsExtended } from "./interface";
import ReactMarkdown from "react-markdown";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="feature"
      data-variant={props.variant}
      className="w-full flex flex-col gap-3"
    >
      <div className="bg-white rounded-[20px] p-8 h-full">
        {props.data.title ? (
          <ReactMarkdown className="text-[28px] font-medium font-primary leading-6 text-black">
            {props.data.title}
          </ReactMarkdown>
        ) : null}
        {props.data.description ? (
          <ReactMarkdown className="text-lg text-black font-regular mt-5">
            {props.data.description}
          </ReactMarkdown>
        ) : null}
      </div>
    </div>
  );
}
