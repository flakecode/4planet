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
      <div className="p-10 bg-white rounded-[20px]">
        {props.title ? (
          <ReactMarkdown className="text-[28px] font-medium font-primary leading-6 text-black">
            {props.title}
          </ReactMarkdown>
        ) : null}
        {props?.description ? (
          <ReactMarkdown className="text-lg mt-10 text-black font-primary font-regular flex flex-col gap-4">
            {props?.description}
          </ReactMarkdown>
        ) : null}
      </div>
    </div>
  );
}
