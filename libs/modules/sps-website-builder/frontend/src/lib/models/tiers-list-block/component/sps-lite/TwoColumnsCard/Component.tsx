"use client";

import { Card, ICardProps } from "@sps/ui-adapter";
import Image from "next/image";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Component as Tier } from "@sps/sps-subscription-frontend/lib/models/tier/component";
// import type { IModel as ITier } from "../../../../tier/model";
// import { Component as Tier } from "../../../../tier/component";
import { IComponentPropsExtended } from "../../interface";

// const cardsConfig = {
//   emptyLength: 3,
//   Comp: TierCard,
//   className:
//     "mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2 lg:gap-8 items-start",
// };

export function Component(props: IComponentPropsExtended) {
  // const {
  //   data: tiers,
  //   isFetching,
  //   isLoading,
  //   isUninitialized,
  // } = tierApi.useFindQuery({});

  return (
    <div className="bg-gray-900">
      <div className="relative overflow-hidden pt-32 pb-96 lg:pt-40">
        <div>
          <Image
            className=""
            src="https://tailwindui.com/img/component-images/grid-blur-purple-on-black.jpg"
            alt=""
            fill={true}
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            {props.data.subtitle ? (
              <h2 className="text-lg font-semibold leading-8 text-indigo-400">
                <ReactMarkdown>{props.data.subtitle}</ReactMarkdown>
              </h2>
            ) : null}
            {props.data.title ? (
              <ReactMarkdown className="mt-2 text-4xl font-bold tracking-tight text-white">
                {props.data.title}
              </ReactMarkdown>
            ) : null}
            {props.data.description ? (
              <ReactMarkdown className="mt-6 text-lg leading-8 text-white/60">
                {props.data.description}
              </ReactMarkdown>
            ) : null}
          </div>
        </div>
      </div>
      <div className="flow-root bg-white pb-32 lg:pb-40">
        <div className="relative -mt-80">
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <Tier isServer={false} variant="list" />
          </div>
        </div>
        {/* <div className="relative mx-auto mt-8 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-md lg:max-w-4xl">
            <div className="flex flex-col gap-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10 lg:flex-row lg:items-center lg:gap-8">
              <div className="lg:min-w-0 lg:flex-1">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
                  Discounted
                </h3>
                <div className="mt-2 text-base leading-7 text-gray-600">
                  Get full access to all of standard license features for solo
                  projects that make less than $20k gross revenue for{` `}
                  <span className="font-semibold text-gray-900">$29</span>.
                </div>
              </div>
              <div>
                <a
                  href="#"
                  className="inline-block rounded-lg bg-indigo-50 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-indigo-700 hover:bg-indigo-100"
                >
                  Buy discounted license <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

// function TierCard(props: ICardProps) {
//   const { item }: { item: ITier } = props;

//   return <Tier isServer={false} variant="default" {...item} />;
// }
