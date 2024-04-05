import React from "react";
import { IComponentPropsExtended } from "./interface";
import ReactMarkdown from "react-markdown";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="page-blocks.hero-section-block"
      data-variant={props.variant}
      className="w-full bg-[#F5F5F5] py-16"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-0">
        <div className="text-center">
          {props.data?.title ? (
            <h1 className="md:text-5xl text-[32px] font-medium font-primary text-black mb-5 uppercase">
              <ReactMarkdown>{props.data?.title}</ReactMarkdown>
            </h1>
          ) : null}
          {props.data?.description ? (
            <ReactMarkdown className="mx-auto text-base md:text-lg max-w-4xl">
              {props.data?.description}
            </ReactMarkdown>
          ) : null}
        </div>
      </div>
    </div>
  );
}
