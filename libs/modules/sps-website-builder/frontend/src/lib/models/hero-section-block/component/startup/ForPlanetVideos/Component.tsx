"use client";

import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { IComponentPropsExtended } from "../../interface";

export default function Component(props: IComponentPropsExtended) {
  return (
    <div className="bg-[#F5F5F5] py-32">
      <main className="mx-auto max-w-7xl">
        <div className="text-left">
          {props?.title ? (
            <h1 className="text-5xl font-medium text-black font-primary uppercase mb-5">
              <ReactMarkdown>{props?.title}</ReactMarkdown>
            </h1>
          ) : null}
          {props?.description ? (
            <ReactMarkdown className="text-lg text-black">
              {props?.description}
            </ReactMarkdown>
          ) : null}
        </div>
        <div className="mt-20 grid grid-cols-2 gap-6">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/Fk5oUBJW_R4?si=38_CeEtPV4H5Dady"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/1AEsJ--OzCo?si=oLTswbcWGx-Sg8Yu"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </div>
  );
}
