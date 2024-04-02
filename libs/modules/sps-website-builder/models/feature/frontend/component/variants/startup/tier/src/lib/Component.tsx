import React from "react";
import { IComponentPropsExtended } from "./interface";
import ReactMarkdown from "react-markdown";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="feature"
      data-variant={props.variant}
      onClick={props.onClick}
      className="flex flex-col gap-3 cursor-pointer"
    >
      <div className="bg-[#F5F5F5] rounded-[20px] p-8 hover:bg-primary-green transition duration-200 h-full">
        {props.data.title ? (
          <ReactMarkdown className="text-xl font-semibold leading-6 text-black mb-5">
            {props.data.title}
          </ReactMarkdown>
        ) : null}
        {props.data.description ? (
          <ReactMarkdown className="text-md text-black opacity-50">
            {props.data.description}
          </ReactMarkdown>
        ) : null}
      </div>
    </div>
  );
}
