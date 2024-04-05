import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as File } from "@sps/sps-file-storage-models-file-frontend-component";
import ReactMarkdown from "react-markdown";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="feature"
      data-variant={props.variant}
      className="w-full flex flex-col gap-1"
    >
      <div className="relative flex justify-between max-w-7xl mx-auto">
        {props.data.media?.length && props.data?.description
          ? props.data.media.map((media, index) => {
              return (
                <div key={index} className="relative">
                  {props.data.description ? (
                    <ReactMarkdown className="mt-10 text-white text-xl font-medium mb-5 flex flex-col gap-10">
                      {props.data?.description}
                    </ReactMarkdown>
                  ) : null}

                  <File
                    isServer={false}
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
    </div>
  );
}
