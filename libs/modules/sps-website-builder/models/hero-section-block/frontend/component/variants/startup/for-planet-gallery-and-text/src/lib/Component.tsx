import React from "react";
import { IComponentPropsExtended } from "./interface";
import ReactMarkdown from "react-markdown";
import { Component as File } from "@sps/sps-file-storage-models-file-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="page-blocks.hero-section-block"
      data-variant={props.variant}
      className="w-full bg-black"
    >
      <div className="relative hidden md:flex items-center justify-between max-w-7xl mx-auto">
        <div className="w-5/12 ">
          {props.data.media?.length
            ? props.data.media.map((media, index) => {
                const rotate =
                  index % 2 !== 0
                    ? `-${(index + 1) * 5}deg`
                    : `${(index + 1) * 5}deg`;
                return (
                  <div
                    key={index}
                    className="relative"
                    style={{
                      transform: `rotate(${rotate})`,
                    }}
                  >
                    <File
                      isServer={props.isServer}
                      variant="image"
                      className="object-cover object-center"
                      containerClassName="w-full aspect-w-5 aspect-h-3"
                      data={media}
                    />
                  </div>
                );
              })
            : null}
        </div>

        <div className="col-span-1 flex flex-col justify-center h-[700px]">
          <div className="mx-auto h-full w-px bg-gradient-to-t from-white to-transparent"></div>
        </div>

        <div className="w-5/12">
          <main className="mx-auto max-w-2xl lg:max-w-7xl">
            <div className="text-left flex flex-col gap-10">
              {props.data?.title ? (
                <h1 className="text-xl font-medium text-white">
                  <ReactMarkdown>{props.data?.title}</ReactMarkdown>
                </h1>
              ) : null}
              {props.data?.description ? (
                <ReactMarkdown className="text-white text-xl font-medium opacity-30 flex flex-col gap-10">
                  {props.data?.description}
                </ReactMarkdown>
              ) : null}
            </div>
          </main>
        </div>
      </div>
      <div className="flex flex-col md:hidden px-5">
        {props.data?.title ? (
          <h1 className="text-xl font-medium text-white mb-4">
            <ReactMarkdown>{props.data?.title}</ReactMarkdown>
          </h1>
        ) : null}
        <div className="flex flex-col">
          {props.data.media?.length && props.data?.description
            ? props.data.media.map((media, index) => {
                return (
                  <div key={index} className="relative">
                    <File
                      isServer={props.isServer}
                      variant="image"
                      className="object-cover object-center"
                      containerClassName="w-full aspect-w-5 aspect-h-3"
                      data={media}
                    />
                    {props.data.description ? (
                      <ReactMarkdown className="mt-10 text-white text-xl font-medium mb-5 flex flex-col gap-10">
                        {props.data?.description}
                      </ReactMarkdown>
                    ) : null}
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}
