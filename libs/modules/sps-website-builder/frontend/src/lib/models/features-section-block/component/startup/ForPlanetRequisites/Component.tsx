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
          <h2 className="mt-2 text-5xl font-bold leading-8 text-black  w-fit">
            {props?.title ? (
              <ReactMarkdown>{props?.title}</ReactMarkdown>
            ) : null}
          </h2>
          {props.description ? (
            <ReactMarkdown className="mt-5  text-xl text-black text-center">
              {props.description}
            </ReactMarkdown>
          ) : null}
        </div>
        <dl className="flex justify-between">
          {props.features?.map((feature, index) => (
            <Feature isServer={props.isServer} key={index} {...feature} />
          ))}
        </dl>
      </div>
    </div>
  );
}
