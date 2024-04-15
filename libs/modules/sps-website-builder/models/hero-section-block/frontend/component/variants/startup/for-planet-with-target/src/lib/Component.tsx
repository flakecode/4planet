import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as Button } from "@sps/sps-website-builder-models-button-frontend-component";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { getFileUrl } from "@sps/shared-utils";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="page-blocks.hero-section-block"
      data-variant={props.variant}
      id={props.data.anchor || ""}
      className="w-full relative py-32"
    >
      {props.data.media?.length ? (
        <Image
          src={getFileUrl(props.data.media[0])}
          alt=""
          fill={true}
          className="object-cover object-center"
        />
      ) : null}
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-left">
          {props.data?.title ? (
            <h1 className="md:text-[48px] text-[28px] font-medium font-primary tracking-tight leading-[130%] text-white uppercase">
              <ReactMarkdown>{props.data?.title}</ReactMarkdown>
            </h1>
          ) : null}
          {props.data?.description ? (
            <ReactMarkdown className="text-left mt-5 font-regular text-white text-lg">
              {props.data?.description}
            </ReactMarkdown>
          ) : null}
          <div className="mt-20">
            <div className="overflow-hidden relative bg-white bg-opacity-20 h-[76px] rounded-full">
              <div
                className="absolute bg-white inset-y-0 left-0"
                style={{
                  width: "34%",
                }}
              ></div>
              <div className="absolute right-0 inset-y-0 flex items-center pr-10">
                <p className="text-white text-lg">34450/100000</p>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-5">
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
