import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as Logotype } from "@sps/sps-website-builder-models-logotype-frontend-component";
import { Component as ButtonsArray } from "@sps/sps-website-builder-models-buttons-array-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="page-blocks.footer-block"
      data-variant={props.variant}
      className="w-full mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8"
    >
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="flex flex-col gap-4 w-full lg:w-3/12">
          {props.data.logotype ? (
            <Logotype
              isServer={props.isServer}
              data={props.data.logotype}
              variant="default"
            />
          ) : null}
        </div>
        <div className="flex lg:justify-end w-full lg:w-9/12 gap-4">
          {props.data.buttonsArrays?.map((buttonsArray, index) => {
            return (
              <div key={index} className="w-6/12 lg:w-3/12">
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
    </div>
  );
}
