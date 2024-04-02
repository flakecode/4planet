import React from "react";
import { IComponentPropsExtended } from "./interface";
import ReactMarkdown from "react-markdown";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="feature"
      data-variant={props.variant}
      className="p-10 bg-white rounded-[20px]"
    >
      {props.data.title ? (
        <ReactMarkdown className="text-2xl font-medium font-primary leading-[130%] text-black uppercase mb-10">
          {props.data.title}
        </ReactMarkdown>
      ) : null}
      {props.data.description ? (
        <ReactMarkdown className="text-lg text-black flex flex-col gap-4">
          {props.data.description}
        </ReactMarkdown>
      ) : null}
    </div>
  );
}
