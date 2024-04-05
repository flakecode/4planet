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
      className="w-full bg-[#F5F5F5] overflow-hidden md:pt-32 py-20 md:pb-40 "
    >
      <h2 className="px-5 md:px-0 max-w-2xl mx-auto text-[28px] md:text-5xl font-medium font-primary text-center text-black uppercase">
        {props.data?.title ? (
          <ReactMarkdown>{props.data?.title}</ReactMarkdown>
        ) : null}
      </h2>
      <div className="overflow-y-scroll w-full hide-scrollbar">
        <div className="mt-24 mb-10 w-full flex justify-between">
          <div className="w-[calc((100vw-80rem)/2)] h-0.5 bg-black"></div>
          <div className="w-[calc((100vw-80rem)/2)] h-0.5 bg-[#CACACA]"></div>
        </div>
        <div className="max-w-7xl min-w-[1000px] px-5 md:px-0 mx-auto grid grid-cols-3 gap-8 space-y-0">
          {props.data.features?.map((feature, index) => {
            return (
              <div className="relative " key={index}>
                <div
                  className="w-3 h-3 absolute data-[first=true]:bg-black bg-[#CACACA] rounded-full -top-10 -translate-y-1/2 -translate-x-1/2 z-20"
                  data-first={index === 0}
                />
                <div className="z-10 w-[calc(100%+2rem)] bg-[#CACACA] h-0.5 absolute -top-10 -translate-y-full" />
                <Feature
                  isServer={props.isServer}
                  data={feature}
                  variant="timeline"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
