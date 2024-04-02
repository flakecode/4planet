import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as PageBlocks } from "@sps/sps-website-builder-page-blocks-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="footer"
      data-variant={props.variant}
      className="w-full py-10 text-center flex flex-col gap-1"
    >
      <div className="footer-container">
        <PageBlocks
          variant="default"
          isServer={props.isServer}
          data={props.data}
        />
      </div>
    </div>
  );
}
