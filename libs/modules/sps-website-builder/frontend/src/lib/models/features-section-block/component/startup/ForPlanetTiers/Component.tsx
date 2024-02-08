import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Component as Feature } from "../../../../feature/component";
import { IComponentPropsExtended } from "../../interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div className="bg-black pt-[165px] pb-[100px]">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:max-w-[1200px] lg:px-8 bg-white rounded-[20px] pb-[56px]">
        <div className="flex flex-col items-center pt-[60px] pb-20">
          {props?.subtitle ? (
            <ReactMarkdown className="text-lg font-semibold text-indigo-600 w-fit">
              {props?.subtitle}
            </ReactMarkdown>
          ) : null}
          <h2 className="text-5xl font-medium font-primary leading-8 text-black w-fit">
            {props?.title ? (
              <ReactMarkdown>{props?.title}</ReactMarkdown>
            ) : null}
          </h2>
          {props.description ? (
            <ReactMarkdown className="mt-5 max-w-2xl text-xl font-primary font-regular text-black text-center">
              {props.description}
            </ReactMarkdown>
          ) : null}
        </div>
        <dl className="space-y-10 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          {props.features?.map((feature, index) => (
            <Feature
              isServer={props.isServer}
              key={index}
              {...feature}
              variant="tiers"
            />
          ))}
        </dl>
      </div>
    </div>
  );
}
