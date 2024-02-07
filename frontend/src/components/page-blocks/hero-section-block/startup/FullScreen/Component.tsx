import Image from "next/image";
import Button from "~components/elements/button";
import getFileUrl from "~utils/api/get-file-url";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { IPageBlock } from "../..";

export default function Component(props: IPageBlock) {
  return (
    <div className="relative flex flex-col items-center justify-start overflow-hidden bg-white mx-auto w-screen h-screen">
      {props.media?.length ? (
        <div className="w-screen h-screen absolute inset-0">
          <Image
            src={getFileUrl(props.media[0])}
            alt=""
            fill={true}
            className="object-cover"
          />
        </div>
      ) : null}
      <div className="relative pt-6 pb-16">
        <main
          style={{
            marginTop: "40%",
          }}
          className="mx-auto max-w-2xl lg:max-w-7xl px-4 text-center"
        >
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:max-w-3xl">
            <ReactMarkdown>{props.title}</ReactMarkdown>
          </h1>

          {props?.description ? (
            <ReactMarkdown className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
              {props?.description}
            </ReactMarkdown>
          ) : null}
          <div className="mx-auto mt-5 max-w-md flex flex-col sm:flex-row justify-center md:mt-8 gap-4">
            {props?.buttons?.map((button, index) => {
              return <Button key={index} {...button} />;
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
