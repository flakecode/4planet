"use client";

import Image from "next/image";
import { Component as Button } from "@sps/sps-elements-frontend/lib/models/button/component";
import { getFileUrl } from "@sps/utils";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { IComponentPropsExtended } from "../../interface";

export default function Component(props: IComponentPropsExtended) {
  return (
    <div className="relative flex flex-col items-center justify-between overflow-hidden bg-white mx-auto max-w-7xl">
      {props.additionalMedia?.length ? (
        <Image
          src={getFileUrl(props.additionalMedia[0])}
          alt=""
          fill={true}
          className="object-cover object-center"
        />
      ) : null}

      <div className="relative pt-[134px] pb-32">
        <main className="mx-auto max-w-2xl lg:max-w-7xl px-4">
          <div className="text-center">
            {props?.title ? (
              <h1 className="text-5xl font-bold tracking-tight text-black">
                <ReactMarkdown>{props?.title}</ReactMarkdown>
              </h1>
            ) : null}
            {props?.description ? (
              <ReactMarkdown className="mx-auto mt-7 max-w-md font-regular text-black text-lg md:max-w-3xl">
                {props?.description}
              </ReactMarkdown>
            ) : null}
            <div className="mx-auto mt-20 max-w-md flex flex-col sm:flex-row justify-center gap-4">
              {props?.buttons?.map((button, index) => {
                return <Button isServer={false} key={index} {...button} />;
              })}
            </div>
          </div>
        </main>
      </div>
      {props.media?.length ? (
        <div className="w-full relative aspect-w-4 aspect-h-2">
          <Image
            src={getFileUrl(props.media[0])}
            alt=""
            fill={true}
            className="object-contain"
          />
        </div>
      ) : null}
    </div>
  );
}
