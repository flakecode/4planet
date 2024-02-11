import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Component as Feature } from "../../../../feature/component";
import { IComponentPropsExtended } from "../../interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div className="bg-[#F5F5F5] py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto text-center mb-20">
          <h2 className="text-5xl font-medium font-primary leading-[130%] text-black mb-5 uppercase">
            {props?.title ? (
              <ReactMarkdown>{props?.title}</ReactMarkdown>
            ) : null}
          </h2>
          {props.description ? (
            <ReactMarkdown className="text-xl text-black text-center max-w-5xl mx-auto">
              {props.description}
            </ReactMarkdown>
          ) : null}
        </div>
      </div>
      <div className="mx-auto max-w-5xl grid grid-cols-2 gap-10">
        {props.features?.map((feature, index) => (
          <Feature
            isServer={props.isServer}
            key={index}
            {...feature}
            variant="requisite"
          />
        ))}
      </div>
    </div>
  );
}
