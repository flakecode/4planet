import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Component as Feature } from "../../../../feature/component";
import { IComponentPropsExtended } from "../../interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div className="bg-primary-green py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-medium font-primary leading-[130%] text-black uppercase mb-5">
            {props?.title ? (
              <ReactMarkdown>{props?.title}</ReactMarkdown>
            ) : null}
          </h2>
          {props.description ? (
            <ReactMarkdown className="mx-auto max-w-2xl text-lg text-black">
              {props.description}
            </ReactMarkdown>
          ) : null}
        </div>
        <dl className="grid lg:grid-cols-12 gap-8">
          {props.features?.map((feature, index) => {
            return (
              <div
                key={index}
                className="col-span-3 [&:nth-child(2)]:col-span-6 flex"
              >
                <Feature
                  isServer={props.isServer}
                  {...feature}
                  variant="how-it-works"
                />
              </div>
            );
          })}
        </dl>
      </div>
    </div>
  );
}
