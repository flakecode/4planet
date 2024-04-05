import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as Logotype } from "@sps/sps-website-builder-models-logotype-frontend-component";
import { Component as ButtonsArray } from "@sps/sps-website-builder-models-buttons-array-frontend-component";
import ReactMarkdown from "react-markdown";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="page-blocks.footer-block"
      data-variant={props.variant}
      className="w-full mx-auto max-w-7xl pt-10 px-5 md:px-0 md:pt-[60px]"
    >
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="flex flex-col w-full lg:w-3/12 mb-10 md:mb-0">
          {props.data.logotype ? (
            <Logotype
              isServer={props.isServer}
              data={props.data.logotype}
              variant="default"
            />
          ) : null}
          <div className="md:text-xl text-lg text-left mt-4 md:mt-5">
            {props.data.logotype?.title}
          </div>
          <div className="w-full flex gap-4">
            {props.data.extraButtonsArrays?.map((buttonsArray, index) => {
              return (
                <ButtonsArray
                  isServer={props.isServer}
                  key={index}
                  variant={buttonsArray.variant}
                  data={buttonsArray}
                />
              );
            })}
          </div>
        </div>
        <div className="flex flex-col md:flex-row lg:justify-end w-full lg:w-9/12 md:gap-4 gap-10">
          {props.data.buttonsArrays?.map((buttonsArray, index) => {
            return (
              <div key={index} className="md:w-6/12 lg:w-3/12">
                <ButtonsArray
                  isServer={props.isServer}
                  variant={buttonsArray.variant}
                  data={buttonsArray}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between mt-[60px] md:mt-[100px] gap-5 md:gap-0">
        <div className="">
          {props.data.description ? (
            <ReactMarkdown className="text-lg text-[#7D7D7D]">
              {props.data.description}
            </ReactMarkdown>
          ) : null}
        </div>
        <div>
          {props.data.copyrights ? (
            <ReactMarkdown className="text-lg text-[#7D7D7D]">
              {props.data.copyrights}
            </ReactMarkdown>
          ) : null}
        </div>
      </div>
    </div>
  );
}
