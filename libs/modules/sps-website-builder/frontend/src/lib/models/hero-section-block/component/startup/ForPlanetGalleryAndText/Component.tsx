"use client";

import Image from "next/image";
import { Component as Button } from "@sps/sps-elements-frontend/lib/models/button/component";
import { getFileUrl } from "@sps/utils";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { IComponentPropsExtended } from "../../interface";

export default function Component(props: IComponentPropsExtended) {
  return (
    <div className=" bg-black">
      <div className="relative flex divide-x-2 divide-slate-300 items-center justify-between max-w-[1200px] mx-auto">
        {props.additionalMedia?.length ? (
          <Image
            src={getFileUrl(props.additionalMedia[0])}
            alt=""
            fill={true}
            className="object-cover object-center"
          />
        ) : null}

        {props.media?.length ? (
          <div className="relative rotate-3">
            <Image
              src={getFileUrl(props.media[0])}
              alt=""
              height={247}
              width={438}
              className="object-contain"
            />
          </div>
        ) : null}

        <div className="relative pb-16 max-w-[500px]">
          <main className="mx-auto max-w-2xl lg:max-w-7xl">
            <div className="text-left">
              {props?.title ? (
                <h1 className="text-xl tracking-tight xl:inline text-white">
                  <ReactMarkdown>{props?.title}</ReactMarkdown>
                </h1>
              ) : null}
              {props?.description ? (
                <ReactMarkdown className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
                  {props?.description}
                </ReactMarkdown>
              ) : null}
              <div className="mx-auto mt-5 max-w-md flex flex-col sm:flex-row justify-center md:mt-8 gap-4">
                {props?.buttons?.map((button, index) => {
                  return <Button isServer={false} key={index} {...button} />;
                })}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
