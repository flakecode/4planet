import React from "react";
import { IComponentPropsExtended } from "./interface";
import ReactMarkdown from "react-markdown";
import { Component as Button } from "@sps/sps-website-builder-models-button-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="page-blocks.hero-section-block"
      data-variant={props.variant}
      className="w-full bg-[#F5F5F5] py-[60px] md:py-32"
    >
      <div className="mx-auto max-w-2xl lg:max-w-7xl px-4">
        <div className="text-center">
          {props.data?.title ? (
            <h1 className="md:text-5xl text-[32px] font-medium font-primary uppercase text-black">
              <ReactMarkdown>{props.data?.title}</ReactMarkdown>
            </h1>
          ) : null}
          {props.data?.description ? (
            <ReactMarkdown className="mx-auto mt-7 max-w-md font-regular text-black md:text-lg text-base md:max-w-3xl">
              {props.data?.description}
            </ReactMarkdown>
          ) : null}
          <div className="mx-auto mt-10 md:mt-20 flex-col md:flex-row flex md:gap-4 gap-5 justify-center items-center">
            {props.data?.buttons?.map((button, index) => {
              return (
                <Button
                  isServer={false}
                  key={index}
                  variant={button.variant}
                  data={button}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
