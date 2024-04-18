import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as File } from "@sps/sps-file-storage-models-file-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="feature"
      data-variant={props.variant}
      className="w-full"
    >
      <div className="relative flex items-center justify-between max-w-7xl mx-auto">
        <div className="w-full">
          {props.data.media?.length ? (
            <File
              isServer={props.isServer}
              variant="image"
              className="object-cover object-center"
              containerClassName="w-full aspect-w-5 aspect-h-3 relative"
              data={props.data.media[0]}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
