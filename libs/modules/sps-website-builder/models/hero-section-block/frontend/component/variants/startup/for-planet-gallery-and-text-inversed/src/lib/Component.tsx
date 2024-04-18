import React from "react";
import { IComponentPropsExtended } from "./interface";
import ReactMarkdown from "react-markdown";
import { getFileUrl } from "@sps/shared-utils";
import Image from "next/image";
import { Component as Button } from "@sps/sps-website-builder-models-button-frontend-component";
import { Component as File } from "@sps/sps-file-storage-models-file-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="page-blocks.hero-section-block"
      data-variant={props.variant}
      id={props.data.anchor || ""}
      className="w-full relative flex flex-col items-center justify-between overflow-hidden bg-[#F4F4F4] mx-auto"
    >
      {props.data.additionalMedia?.length ? (
        <Image
          src={getFileUrl(props.data.additionalMedia[0])}
          alt=""
          fill={true}
          className="object-cover object-center"
        />
      ) : null}

      <div className="relative px-5 md:px-0 py-[60px] md:pt-6 md:pb-16 max-w-7xl md:flex-row flex-col flex justify-between">
        <main className=" md:mt-16 md:w-1/2">
          <div className="">
            {props.data?.title ? (
              <h1 className="md:text-[48px] text-[32px] uppercase leading-[130%]  font-primary font-medium text-black">
                <ReactMarkdown>{props.data?.title}</ReactMarkdown>
              </h1>
            ) : null}
            {props.data?.description ? (
              <ReactMarkdown className="mx-auto flex flex-col gap-10 mt-5 text-base md:text-lg text-[#1D1D1D]">
                {props.data?.description}
              </ReactMarkdown>
            ) : null}
            <div className="lg:mt-20 hidden md:flex flex-col sm:flex-row md:mt-8 gap-4">
              {props.data?.buttons?.map((button, index) => {
                return (
                  <Button
                    isServer={props.isServer}
                    key={index}
                    variant={button.variant}
                    data={button}
                  />
                );
              })}
            </div>
          </div>
        </main>
        <div className="w-5/12 max-w-[350px] min-h-[700px] hidden md:flex">
          {props.data.media?.length
            ? props.data.media.map((media, index) => {
                const style = getStyles({ index });
                return (
                  <div
                    key={index}
                    className="absolute w-[335px] h-[440px]"
                    style={style}
                  >
                    <File
                      isServer={props.isServer}
                      variant="image"
                      className="object-cover object-center"
                      containerClassName="w-full aspect-w-7 aspect-h-10"
                      data={media}
                    />
                  </div>
                );
              })
            : null}
        </div>
        <div className="w-5/12 max-w-[350px] min-h-[700px] md:hidden">
          {props.data.media?.length
            ? props.data.media.map((media, index) => {
                const style = getStylesSmal({ index });
                return (
                  <div
                    key={index}
                    className="absolute w-[321px] h-[421px] left-[10%]"
                    style={style}
                  >
                    <File
                      isServer={props.isServer}
                      variant="image"
                      className="object-cover object-center"
                      containerClassName="w-full aspect-w-7 aspect-h-10"
                      data={media}
                    />
                  </div>
                );
              })
            : null}
        </div>
        <div className="lg:mt-20 flex md:hidden flex-col sm:flex-row md:mt-8 gap-4">
          {props.data?.buttons?.map((button, index) => {
            return (
              <Button
                isServer={props.isServer}
                key={index}
                variant={button.variant}
                data={button}
              />
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
      top: "13%",
      rotate: "-4deg",
    };
  } else if (index === 1) {
    return {
      top: "21%",
      rotate: "3deg",
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
function getStylesSmal({ index }: { index: number }) {
  if (index === 0) {
    return {
      top: "45%",
      rotate: "-4deg",
    };
  } else if (index === 1) {
    return {
      top: "50%",
      rotate: "3deg",
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
