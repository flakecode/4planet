import { Component as Button } from "../../../../button/component";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { IComponentPropsExtended } from "../../interface";
import { Component as File } from "@sps/sps-file-storage-frontend/lib/models/file/component";

export default function Component(props: IComponentPropsExtended) {
  return (
    <div className="bg-black">
      <div className="relative flex items-center justify-between max-w-7xl mx-auto">
        <div className="w-5/12">
          {props.media?.length
            ? props.media.map((media, index) => {
                const rotate =
                  index % 2 !== 0
                    ? `-${(index + 1) * 5}deg`
                    : `${(index + 1) * 5}deg`;
                return (
                  <div
                    key={index}
                    className="relative"
                    style={{
                      transform: `rotate(${rotate})`,
                    }}
                  >
                    <File
                      isServer={false}
                      variant="image"
                      {...media}
                      className="object-cover object-center"
                      containerClassName="w-full aspect-w-5 aspect-h-3"
                    />
                  </div>
                );
              })
            : null}
        </div>

        <div className="col-span-1 flex flex-col justify-center h-[700px]">
          <div className="mx-auto h-full w-px bg-gradient-to-t from-white to-transparent"></div>
        </div>

        <div className="w-5/12">
          <main className="mx-auto max-w-2xl lg:max-w-7xl">
            <div className="text-left flex flex-col gap-10">
              {props?.title ? (
                <h1 className="text-xl font-medium text-white">
                  <ReactMarkdown>{props?.title}</ReactMarkdown>
                </h1>
              ) : null}
              {props?.description ? (
                <ReactMarkdown className="text-white text-xl font-medium opacity-30 flex flex-col gap-10">
                  {props?.description}
                </ReactMarkdown>
              ) : null}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
