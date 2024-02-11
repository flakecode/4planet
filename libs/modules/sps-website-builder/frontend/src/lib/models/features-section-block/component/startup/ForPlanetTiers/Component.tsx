import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Component as Feature } from "../../../../feature/component";
import { IComponentPropsExtended } from "../../interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div className="bg-black pt-40 pb-24">
      <div className="mx-auto max-w-7xl bg-white rounded-[20px] p-16">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-5xl font-medium font-primary leading-[130%] text-black uppercase">
            {props?.title ? (
              <ReactMarkdown>{props?.title}</ReactMarkdown>
            ) : null}
          </h2>
          {props.description ? (
            <ReactMarkdown className="mt-5 max-w-2xl text-xl font-regular text-black text-center">
              {props.description}
            </ReactMarkdown>
          ) : null}
        </div>
        <div className="space-y-10 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          {props.features?.map((feature, index) => (
            <Feature
              isServer={props.isServer}
              key={index}
              {...feature}
              variant="tier"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
