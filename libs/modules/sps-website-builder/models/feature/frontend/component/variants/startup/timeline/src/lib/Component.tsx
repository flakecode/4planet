import React from "react";
import { IComponentPropsExtended } from "./interface";
import ReactMarkdown from "react-markdown";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="feature"
      data-variant={props.variant}
      className="w-full min-w-[260px]"
    >
      {props.data.title ? (
        <ReactMarkdown className="md:text-3xl text-xl font-medium font-primary leading-6 text-black uppercase mb-6">
          {props.data.title}
        </ReactMarkdown>
      ) : null}
      {props.data.description ? (
        <ReactMarkdown className="text-lg text-black">
          {props.data.description}
        </ReactMarkdown>
      ) : null}
    </div>
  );
}
