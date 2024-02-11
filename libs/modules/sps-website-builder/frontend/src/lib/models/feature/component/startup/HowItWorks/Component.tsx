import ReactMarkdown from "react-markdown";
import { IComponentPropsExtended } from "../../interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="bg-white rounded-[20px] p-8 h-full">
        {props.title ? (
          <ReactMarkdown className="text-[28px] font-medium font-primary leading-6 text-black">
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
