import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as PageBlocks } from "@sps/sps-website-builder-page-blocks-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="navbar"
      data-variant={props.variant}
      className=""
    >
      <div className="navbar-container">
        <PageBlocks
          variant="default"
          isServer={props.isServer}
          data={props.data}
        />
      </div>
    </div>
  );
}
