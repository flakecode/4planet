import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Component as Feature } from "../../../../feature/component";
import { IComponentPropsExtended } from "../../interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center py-[100px]">
          {props?.subtitle ? (
            <ReactMarkdown className="text-lg font-semibold text-indigo-600 w-fit">
              {props?.subtitle}
            </ReactMarkdown>
          ) : null}
          <h2 className="text-5xl font-medium font-normal font-primary leading-8 text-white w-fit">
            {props?.title ? (
              <ReactMarkdown>{props?.title}</ReactMarkdown>
            ) : null}
          </h2>
          {props.description ? (
            <ReactMarkdown className="mt-4 max-w-2xl text-xl text-gray-500 text-center">
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
              variant="headlines"
            />
          ))}
        </dl>
      </div>
    </div>
  );
}
