"use client";

import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { IComponentPropsExtended } from "../../interface";

export default function Component(props: IComponentPropsExtended) {
  return (
    <div className="bg-[#F5F5F5] py-16">
      <main className="max-w-7xl mx-auto">
        <div className="text-center">
          {props?.title ? (
            <h1 className="text-5xl font-medium font-primary text-black mb-5 uppercase">
              <ReactMarkdown>{props?.title}</ReactMarkdown>
            </h1>
          ) : null}
          {props?.description ? (
            <ReactMarkdown className="mx-auto text-lg max-w-4xl">
              {props?.description}
            </ReactMarkdown>
          ) : null}
        </div>
      </main>
    </div>
  );
}
