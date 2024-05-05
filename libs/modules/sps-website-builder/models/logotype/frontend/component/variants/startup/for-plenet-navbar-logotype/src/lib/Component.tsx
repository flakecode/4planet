import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as File } from "@sps/sps-file-storage-models-file-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="elements.logotype"
      data-variant={props.variant}
      className="flex items-center"
    >
      {props.data?.media && props.data.media.length > 1 ? (
        <File
          isServer={props.isServer}
          variant="image"
          data={props.data.media[1]}
          containerClassName="relative w-[200px] h-[50px]"
          className="h-full object-contain object-left"
        />
      ) : null}
    </div>
  );
}
