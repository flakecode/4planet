"use client";

import React from "react";
import { IComponentPropsExtended } from "./interface";
import ReactMarkdown from "react-markdown";
import { getFileUrl } from "@sps/shared-frontend-utils-client";
import Image from "next/image";
import { Component as Button } from "@sps/sps-website-builder-models-button-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="page-blocks.hero-section-block"
      data-variant={props.variant}
      className="w-full relative flex flex-col items-center justify-between mx-auto  min-h-screen"
    >
      {props.data.media?.length ? (
        <Image
          src={getFileUrl(props.data.media[0])}
          alt=""
          fill={true}
          className="object-cover object-center"
        />
      ) : null}

      <div className="relative pt-6 pb-16 m-auto">
        <main className="mx-auto max-w-2xl lg:max-w-7xl px-4 ">
          <div className="text-center">
            {props.data?.title ? (
              <h1 className="text-6xl font-primary text-white font-medium uppercase leading-[130%]">
                <ReactMarkdown>{props.data?.title}</ReactMarkdown>
              </h1>
            ) : null}
            {props.data?.description ? (
              <ReactMarkdown className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
                {props.data?.description}
              </ReactMarkdown>
            ) : null}
            <div className="mx-auto mt-12 max-w-md flex flex-col sm:flex-row justify-center md:mt-8 gap-4">
              {props.data?.buttons?.map((button, index) => {
                return (
                  <Button
                    isServer={false}
                    key={index}
                    data={button}
                    variant={button.variant}
                  />
                );
              })}
            </div>
          </div>
        </main>
      </div>
      {/* {props.media?.length ? (
        <div className="w-full relative aspect-w-4 aspect-h-2">
          <Image
            src={getFileUrl(props.media[0])}
            alt=""
            fill={true}
            className="object-contain"
          />
        </div>
      ) : null} */}
    </div>
  );
}
