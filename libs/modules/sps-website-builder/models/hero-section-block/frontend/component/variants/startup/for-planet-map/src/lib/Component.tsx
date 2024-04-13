"use client";

import React, { useRef } from "react";
import { IComponentPropsExtended } from "./interface";
import ReactMarkdown from "react-markdown";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const error = console.error;
console.error = (...args: any) => {
  if (/defaultProps/.test(args[0])) return;
  error(...args);
};

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="page-blocks.hero-section-block"
      data-variant={props.variant}
      className="w-full bg-[#F5F5F5] py-16"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-0">
        <div className="text-center">
          {props.data?.title ? (
            <h1 className="md:text-5xl text-[32px] font-medium font-primary text-black mb-5 uppercase">
              <ReactMarkdown>{props.data?.title}</ReactMarkdown>
            </h1>
          ) : null}
          {props.data?.description ? (
            <ReactMarkdown className="mx-auto text-base md:text-lg max-w-4xl flex flex-col gap-7">
              {props.data?.description}
            </ReactMarkdown>
          ) : null}
        </div>
        <div className="w-full mt-10 lg:mt-[66px]">
          <YMaps>
            <div className="flex justify-center">
              <Map
                defaultState={{
                  center: [52.696873, 88.824296],
                  zoom: 4,
                  controls: ["zoomControl", "fullscreenControl"],
                }}
                modules={[
                  "control.ZoomControl",
                  "control.FullscreenControl",
                  "control.TrafficControl",
                ]}
                width={1200}
                height={709}
              >
                <Placemark defaultGeometry={[51.204022, 51.370033]} />
                <Placemark defaultGeometry={[56.009849, 92.850352]} />
                <Placemark defaultGeometry={[51.834604, 107.584326]} />
                <Placemark defaultGeometry={[47.918191, 106.917745]} />
              </Map>
            </div>
          </YMaps>
        </div>
      </div>
    </div>
  );
}
