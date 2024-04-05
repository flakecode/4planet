import React from "react";
import { IComponentPropsExtended } from "./interface";
import ReactMarkdown from "react-markdown";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="feature"
      data-variant={props.variant}
      className="md:p-10 p-5 bg-white rounded-[20px]"
    >
      {props.data.title ? (
        <ReactMarkdown className="md:text-2xl text-xl font-medium font-primary leading-[130%] text-black uppercase mb-10">
          {props.data.title}
        </ReactMarkdown>
      ) : null}
      {props.data.description ? (
        <ReactMarkdown className="md:text-lg text-black flex flex-col gap-4">
          {props.data.description}
        </ReactMarkdown>
      ) : null}
    </div>
  );
}
