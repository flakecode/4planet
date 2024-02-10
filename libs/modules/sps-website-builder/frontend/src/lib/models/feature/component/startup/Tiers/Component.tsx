import { getFileUrl } from "@sps/utils";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { IComponentPropsExtended } from "../../interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div className="flex flex-col gap-3">
      <div>
        {props?.media?.length ? (
          <Image
            src={getFileUrl(props.media[0])}
            height={100}
            width={100}
            alt=""
            className="object-contain"
          />
        ) : null}
      </div>
      <div className="bg-[#F5F5F5] rounded-[20px] p-8 hover:bg-[#A8DA1A] h-full">
        {props.title ? (
          <ReactMarkdown className="text-xl font-medium font-primary leading-6 text-black">
            {props.title}
          </ReactMarkdown>
        ) : null}
        {props?.description ? (
          <ReactMarkdown className="text-lg text-black font-regular mt-5">
            {props?.description}
          </ReactMarkdown>
        ) : null}
      </div>
    </div>
  );
}
