import { Component as Button } from "../../../../button/component";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { IComponentPropsExtended } from "../../interface";

export default function Component(props: IComponentPropsExtended) {
  return (
    <div className="bg-black py-32">
      <main className="max-w-7xl mx-auto px-4">
        <div className="text-left">
          {props?.title ? (
            <h1 className="text-5xl font-medium font-primary tracking-tight leading-[130%] text-white uppercase">
              <ReactMarkdown>{props?.title}</ReactMarkdown>
            </h1>
          ) : null}
          {props?.description ? (
            <ReactMarkdown className="text-left mt-5 font-regular text-white text-lg">
              {props?.description}
            </ReactMarkdown>
          ) : null}
          <div className="mt-20">
            <div className="overflow-hidden relative bg-white bg-opacity-20 h-[76px] rounded-full">
              <div
                className="absolute bg-white inset-y-0 left-0"
                style={{
                  width: "34%",
                }}
              ></div>
              <div className="absolute right-0 inset-y-0 flex items-center pr-10">
                <p className="text-white text-lg">34450/100000</p>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-5">
            {props?.buttons?.map((button, index) => {
              return <Button isServer={false} key={index} {...button} />;
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
