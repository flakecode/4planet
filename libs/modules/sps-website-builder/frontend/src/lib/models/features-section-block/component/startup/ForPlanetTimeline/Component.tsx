import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Component as Feature } from "../../../../feature/component";
import { IComponentPropsExtended } from "../../interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div className="bg-[#F5F5F5] overflow-hidden pt-32 pb-40">
      <h2 className="max-w-2xl mx-auto text-5xl font-medium font-primary text-center text-black uppercase">
        {props?.title ? <ReactMarkdown>{props?.title}</ReactMarkdown> : null}
      </h2>
      <div className="mt-24 mb-10 w-full flex justify-between">
        <div className="w-[calc((100vw-80rem)/2)] h-0.5 bg-black"></div>
        <div className="w-[calc((100vw-80rem)/2)] h-0.5 bg-[#CACACA]"></div>
      </div>
      <div className="max-w-7xl mx-auto space-y-10 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
        {props.features?.map((feature, index) => {
          return (
            <div className="relative " key={index}>
              <div
                className="w-3 h-3 absolute data-[first=true]:bg-black bg-[#CACACA] rounded-full -top-10 -translate-y-1/2 -translate-x-1/2 z-20"
                data-first={index === 0}
              />
              <div className="z-10 w-[calc(100%+2rem)] bg-[#CACACA] h-0.5 absolute -top-10 -translate-y-full" />
              <Feature
                isServer={props.isServer}
                {...feature}
                variant="timeline"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
