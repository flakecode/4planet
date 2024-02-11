import ReactMarkdown from "react-markdown";
import { IComponentPropsExtended } from "../../interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div className="p-10 bg-white rounded-[20px]">
      {props.title ? (
        <ReactMarkdown className="text-2xl font-medium font-primary leading-[130%] text-black uppercase mb-10">
          {props.title}
        </ReactMarkdown>
      ) : null}
      {props?.description ? (
        <ReactMarkdown className="text-lg text-black flex flex-col gap-4">
          {props?.description}
        </ReactMarkdown>
      ) : null}
    </div>
  );
}
