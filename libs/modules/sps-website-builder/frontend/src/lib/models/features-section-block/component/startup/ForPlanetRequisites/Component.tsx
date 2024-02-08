import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Component as Feature } from "../../../../feature/component";
import { IComponentPropsExtended } from "../../interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div className="bg-[#F5F5F5] py-[192px]">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col items-center max-w-[800px] mx-auto pb-20">
          {props?.subtitle ? (
            <ReactMarkdown className="text-lg font-semibold text-indigo-600 w-fit">
              {props?.subtitle}
            </ReactMarkdown>
          ) : null}
          <h2 className="text-5xl font-medium font-primary leading-8 text-black  w-fit">
            {props?.title ? (
              <ReactMarkdown>{props?.title}</ReactMarkdown>
            ) : null}
          </h2>
          {props.description ? (
            <ReactMarkdown className="mt-5 font-primary font-regular text-xl text-black text-center">
              {props.description}
            </ReactMarkdown>
          ) : null}
        </div>
        <dl className="flex justify-between max-w-[1200px]">
          {props.features?.map((feature, index) => (
            <Feature
              isServer={props.isServer}
              key={index}
              {...feature}
              variant="requisites"
            />
          ))}
        </dl>
      </div>
    </div>
  );
}
