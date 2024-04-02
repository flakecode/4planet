import React from "react";
import { IComponentPropsExtended } from "./interface";
import ReactMarkdown from "react-markdown";
import { Component as Feature } from "@sps/sps-website-builder-models-feature-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="page-blocks.features-section-block"
      data-variant={props.variant}
      className="w-full bg-black pt-60 pb-40"
    >
      <div className="mx-auto max-w-7xl flex justify-center">
        <div className="relative max-w-5xl">
          <h2 className="text-5xl font-medium font-primary leading-[130%] uppercase text-white text-center">
            {props.data?.title ? (
              <ReactMarkdown>{props.data?.title}</ReactMarkdown>
            ) : null}
          </h2>
          {props.data.features?.map((feature, index) => {
            const style = getStyles({ index });
            return (
              <div
                key={index}
                className="absolute -translate-y-1/2 -translate-x-1/2"
                style={style}
              >
                <Feature
                  isServer={props.isServer}
                  variant="headlines"
                  data={feature}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function getStyles({ index }: { index: number }) {
  if (index === 0) {
    return {
      left: "1%",
      top: "-50%",
      rotate: "-15deg",
    };
  } else if (index === 1) {
    return {
      left: "20%",
      top: "-50%",
      rotate: "10deg",
    };
  } else if (index === 2) {
    return {
      right: "-15%",
      top: "-80%",
      rotate: "-8deg",
    };
  } else if (index === 3) {
    return {
      right: "-25%",
      top: "30%",
      rotate: "14deg",
    };
  } else if (index === 4) {
    return {
      right: "-24%",
      bottom: "-70%",
      rotate: "-14deg",
    };
  } else if (index === 5) {
    return {
      left: "34%",
      bottom: "-100%",
      rotate: "-8deg",
    };
  } else if (index === 6) {
    return {
      left: "-1%",
      bottom: "-110%",
      rotate: "12deg",
    };
  }
}
