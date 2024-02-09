"use client";

import Image from "next/image";
import { Component as Button } from "../../../../button/component";
import { getFileUrl } from "@sps/utils";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { IComponentPropsExtended } from "../../interface";

export default function Component(props: IComponentPropsExtended) {
  return (
    <div className="relative flex flex-col items-center justify-between overflow-hidden bg-white mx-auto max-w-[1440px]">
      {props.additionalMedia?.length ? (
        <Image
          src={getFileUrl(props.additionalMedia[0])}
          alt=""
          fill={true}
          className="object-cover object-center"
        />
      ) : null}

      <div className="relative py-[160px] w-full">
        <main className="px-4 sm:mt-24">
          <div className="text-left">
            {props?.title ? (
              <h1 className="text-5xl font-medium text-black font-primary">
                <ReactMarkdown>{props?.title}</ReactMarkdown>
              </h1>
            ) : null}
            {props?.description ? (
              <ReactMarkdown className=" text-base text-black font-primary font-regular sm:text-lg md:mt-5 md:text-xl">
                {props?.description}
              </ReactMarkdown>
            ) : null}
            <div className="mx-auto mt-5 max-w-md flex flex-col sm:flex-row justify-center md:mt-8 gap-4">
              {props?.buttons?.map((button, index) => {
                return <Button isServer={false} key={index} {...button} />;
              })}
            </div>
          </div>
          <div className="mt-20 flex max-w-[1200px] justify-between">
            <iframe
              width="580"
              height="325"
              src="https://www.youtube.com/watch?v=1AEsJ--OzCo"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
            ></iframe>
            <iframe
              width="580"
              height="325"
              src="https://www.youtube.com/watch?v=1AEsJ--OzCo"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
            ></iframe>
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
