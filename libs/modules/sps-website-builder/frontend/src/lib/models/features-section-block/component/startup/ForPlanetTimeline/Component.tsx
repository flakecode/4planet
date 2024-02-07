import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Component as Feature } from "../../../../feature/component";
import { IComponentPropsExtended } from "../../interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div className="pb-[150px]">
      <div className="flex flex-col items-center pt-[120px] lg:max-w-[1440px] mx-auto">
        {props?.subtitle ? (
          <ReactMarkdown className="text-lg font-semibold text-indigo-600 w-fit">
            {props?.subtitle}
          </ReactMarkdown>
        ) : null}
        <h2 className="mt-2 text-5xl font-bold leading-8 tracking-tight text-gray-900 w-fit ">
          {props?.title ? <ReactMarkdown>{props?.title}</ReactMarkdown> : null}
        </h2>
        {props.description ? (
          <ReactMarkdown className="mt-4 max-w-2xl text-xl text-gray-500 text-center">
            {props.description}
          </ReactMarkdown>
        ) : null}
      </div>
      <div className="w-[1440px] pt-[105px] flex pb-[42px]">
        <div className="h-0.5 bg-black w-1/4"></div>
        <div className="h-3 bg-black w-3 rounded-full"></div>
        <div className="h-0.5 bg-gray-300 w-2/5"></div>
        <div className="h-3 bg-gray-300 w-3 rounded-full"></div>
        <div className="h-0.5 bg-gray-300 w-1/3"></div>
        <div className="h-3 bg-gray-300 w-3 rounded-full"></div>
      </div>
      <dl className="space-y-10 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0 lg:max-w-[1440px] mx-auto">
        {props.features?.map((feature, index) => (
          <Feature isServer={props.isServer} key={index} {...feature} />
        ))}
      </dl>
    </div>
  );
}
