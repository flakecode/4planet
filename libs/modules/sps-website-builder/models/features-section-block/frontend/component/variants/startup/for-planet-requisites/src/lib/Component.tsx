import React from "react";
import { IComponentPropsExtended } from "./interface";
import ReactMarkdown from "react-markdown";
import { Component as Feature } from "@sps/sps-website-builder-models-feature-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="page-blocks.features-section-block"
      data-variant={props.variant}
      className="w-full bg-[#F5F5F5] py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto text-center mb-20">
          <h2 className="text-5xl font-medium font-primary leading-[130%] text-black mb-5 uppercase">
            {props.data?.title ? (
              <ReactMarkdown>{props.data?.title}</ReactMarkdown>
            ) : null}
          </h2>
          {props.data.description ? (
            <ReactMarkdown className="text-xl text-black text-center max-w-5xl mx-auto">
              {props.data.description}
            </ReactMarkdown>
          ) : null}
        </div>
      </div>
      <div className="mx-auto max-w-5xl grid grid-cols-2 gap-10">
        {props.data.features?.map((feature, index) => (
          <Feature
            key={index}
            isServer={props.isServer}
            variant="requisite"
            data={feature}
          />
        ))}
      </div>
    </div>
  );
}
