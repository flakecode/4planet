import React from "react";
import { IComponentPropsExtended } from "./interface";
import ReactMarkdown from "react-markdown";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="feature"
      data-variant={props.variant}
      className="max-w-[350px] bg-white rounded-[20px] p-4 border border-[#E1E1E1]"
    >
      {props.data.title ? (
        <ReactMarkdown className="text-base font-regular leading-6 text-black">
          {props.data.title}
        </ReactMarkdown>
      ) : null}
      {props.data.description ? (
        <ReactMarkdown className="text-lg text-black font-regular mt-5">
          {props.data.description}
        </ReactMarkdown>
      ) : null}
    </div>
  );
}
