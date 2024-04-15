import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as Feature } from "@sps/sps-website-builder-models-feature-frontend-component";
import Image from "next/image";
import { getFileUrl } from "@sps/shared-utils";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="page-blocks.features-section-block"
      data-variant={props.variant}
      className="w-full bg-black relative"
    >
      {props.data.media?.length ? (
        <div className="">
          <Image
            src={getFileUrl(props.data.media[0])}
            alt=""
            fill={true}
            className="object-cover object-center"
          />
        </div>
      ) : null}
      <div className="relative hidden md:flex items-center justify-between max-w-7xl mx-auto">
        <div className="w-5/12">
          {props.data.features?.map((feature, index) => {
            const rotate =
              index % 2 !== 0
                ? `-${(index + 1) * 1}deg`
                : `${(index + 1) * 1}deg`;
            return (
              <div
                key={index}
                className="relative"
                style={{
                  transform: `rotate(${rotate})`,
                }}
              >
                <Feature
                  isServer={props.isServer}
                  variant="for-planet-gallery"
                  data={feature}
                />
              </div>
            );
          })}
        </div>
        <div className="col-span-1 flex flex-col justify-center h-[700px]">
          <div className="mx-auto h-full w-px bg-gradient-to-t from-white to-transparent"></div>
        </div>
        <div className="w-5/12">
          {props.data.features?.map((feature, index) => {
            return (
              <div key={index} className="">
                <Feature
                  isServer={props.isServer}
                  variant="gallery-and-text"
                  data={feature}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col md:hidden px-5">
        {props.data.features?.map((feature, index) => {
          return (
            <div key={index} className="">
              <Feature
                isServer={props.isServer}
                variant="text-and-image"
                data={feature}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
