"use client";

import Image from "next/image";
import { Component as Button } from "../../../../button/component";
import { getFileUrl } from "@sps/utils";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { IComponentPropsExtended } from "../../interface";

export default function Component(props: IComponentPropsExtended) {
  return (
    <div className="relative flex flex-col items-center justify-between mx-auto  min-h-screen">
      {props.media?.length ? (
        <Image
          src={getFileUrl(props.media[0])}
          alt=""
          fill={true}
          className="object-cover object-center"
        />
      ) : null}

      <div className="relative pt-6 pb-16 m-auto">
        <main className="mx-auto max-w-2xl lg:max-w-7xl px-4 ">
          <div className="text-center">
            {props?.title ? (
              <h1 className="text-6xl font-primary text-white font-medium uppercase leading-[130%]">
                <ReactMarkdown>{props?.title}</ReactMarkdown>
              </h1>
            ) : null}
            {props?.description ? (
              <ReactMarkdown className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
                {props?.description}
              </ReactMarkdown>
            ) : null}
            <div className="mx-auto mt-12 max-w-md flex flex-col sm:flex-row justify-center md:mt-8 gap-4">
              {props?.buttons?.map((button, index) => {
                return (
                  <Button
                    isServer={false}
                    key={index}
                    {...button}
                    className={"bg-transparent"}
                  />
                );
              })}
            </div>
          </div>
        </main>
      </div>
      {/* {props.media?.length ? (
        <div className="w-full relative aspect-w-4 aspect-h-2">
          <Image
            src={getFileUrl(props.media[0])}
            alt=""
            fill={true}
            className="object-contain"
          />
        </div>
      ) : null} */}
    </div>
  );
}
