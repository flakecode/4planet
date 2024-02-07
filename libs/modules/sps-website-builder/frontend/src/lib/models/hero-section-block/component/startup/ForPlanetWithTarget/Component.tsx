"use client";

import Image from "next/image";
import { Component as Button } from "@sps/sps-elements-frontend/lib/models/button/component";
import { getFileUrl } from "@sps/utils";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { IComponentPropsExtended } from "../../interface";

export default function Component(props: IComponentPropsExtended) {
  return (
    <div className="relative flex flex-col items-center justify-between bg-black">
      {props.additionalMedia?.length ? (
        <Image
          src={getFileUrl(props.additionalMedia[0])}
          alt=""
          fill={true}
          className="object-cover object-center"
        />
      ) : null}

      <div className="relative py-[120px]">
        <main className="mx-auto px-4">
          <div className="text-left">
            {props?.title ? (
              <h1 className="text-5xl font-bold tracking-tight xl:inline text-white">
                <ReactMarkdown>{props?.title}</ReactMarkdown>
              </h1>
            ) : null}
            {props?.description ? (
              <ReactMarkdown className=" text-left mt-5 text-gray-500  text-lg">
                {props?.description}
              </ReactMarkdown>
            ) : null}
            <div className="bg-zinc-700 h-[76px] max-w-[1200px] rounded-full mt-20"></div>
            <div className="mx-auto mt-5 max-w-md flex flex-col sm:flex-row justify-center md:mt-8 gap-4">
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
