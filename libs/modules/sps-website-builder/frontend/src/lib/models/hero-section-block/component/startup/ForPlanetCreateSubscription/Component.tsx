import { Component as Button } from "../../../../button/component";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { IComponentPropsExtended } from "../../interface";

export default function Component(props: IComponentPropsExtended) {
  return (
    <div className="bg-[#F5F5F5] py-32">
      <main className="mx-auto max-w-2xl lg:max-w-7xl px-4">
        <div className="text-center">
          {props?.title ? (
            <h1 className="text-5xl font-medium font-primary uppercase text-black">
              <ReactMarkdown>{props?.title}</ReactMarkdown>
            </h1>
          ) : null}
          {props?.description ? (
            <ReactMarkdown className="mx-auto mt-7 max-w-md font-regular text-black text-lg md:max-w-3xl">
              {props?.description}
            </ReactMarkdown>
          ) : null}
          <div className="mx-auto mt-20 flex gap-4 justify-center">
            {props?.buttons?.map((button, index) => {
              return <Button isServer={false} key={index} {...button} />;
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
