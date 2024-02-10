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

      <div className="relative pt-[93px] pb-16">
        <main className="">
          <div className="text-center">
            {props?.title ? (
              <h1 className="text-5xl font-bold xl:inline text-black">
                <ReactMarkdown>{props?.title}</ReactMarkdown>
              </h1>
            ) : null}
            {props?.description ? (
              <ReactMarkdown className="mx-auto mt-5 max-w-[930px] text-black text-lg font-regular">
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
      <script src="https://api-maps.yandex.ru/2.1/?apikey=23ab4c8d-8802-4dce-afcd-70eee7eab5df&lang=ru_RU"></script>
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
