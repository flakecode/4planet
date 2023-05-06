"use client";

import Image from "next/image";
import { useMemo } from "react";
import { ISpsLiteCtaSectionsBlock } from ".";
import Buttons from "~components/elements/buttons";
import getFileUrl from "~utils/api/get-file-url";

export default function DarkWithImage(props: ISpsLiteCtaSectionsBlock) {
  const additionalAttributes = useMemo(() => {
    if (props?.anchor) {
      return {
        id: props.anchor,
      };
    }

    return {};
  }, [props]);

  return (
    <div className="bg-white" {...additionalAttributes}>
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate grid grid-rows-2 lg:grid-rows-1 grid-cols-4 gap-4 overflow-hidden px-6 pt-16 bg-gray-900 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:px-24 lg:pt-0">
          <div className="absolute top-1/2 left-1/2 -z-10 h-[80vw] w-[80vw] -translate-y-1/2 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2 rounded-full bg-gradient-radial from-primary-600 to-transparent [mask-image:radial-gradient(closest-side,white,transparent)]"></div>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
            aria-hidden="true"
          >
            <circle
              cx="512"
              cy="512"
              r="512"
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset="1" stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg> */}
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left col-span-4 lg:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {props.title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              {props?.description}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              {props?.buttons?.map((button, index) => {
                return <Buttons key={index} {...button} />;
              })}
            </div>
          </div>
          <div className="col-span-4 lg:col-span-2 flex items-center justify-center">
            <div className="w-full relative aspect-w-6 aspect-h-4">
              {props.media?.length ? (
                <Image
                  src={getFileUrl(props.media[0])}
                  alt=""
                  className="object-contain object-center"
                  fill={true}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
