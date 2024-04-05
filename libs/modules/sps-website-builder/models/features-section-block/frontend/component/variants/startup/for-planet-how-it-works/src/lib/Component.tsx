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
      className="w-full bg-primary-green py-[60px] md:py-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-20">
          <h2 className="md:text-5xl text-[32px] font-medium font-primary leading-[130%] text-black uppercase mb-5">
            {props.data?.title ? (
              <ReactMarkdown>{props.data?.title}</ReactMarkdown>
            ) : null}
          </h2>
          {props.data.description ? (
            <ReactMarkdown className="mx-auto max-w-2xl text-lg text-black">
              {props.data.description}
            </ReactMarkdown>
          ) : null}
        </div>
        <dl className="md:grid flex flex-col px-5 md:px-0 md:grid-cols-12 gap-8">
          {props.data.features?.map((feature, index) => {
            return (
              <div
                key={index}
                className="col-span-3 [&:nth-child(2)]:col-span-6 flex"
              >
                <Feature
                  isServer={props.isServer}
                  variant="how-it-works"
                  data={feature}
                />
              </div>
            );
          })}
        </dl>
      </div>
    </div>
  );
}
