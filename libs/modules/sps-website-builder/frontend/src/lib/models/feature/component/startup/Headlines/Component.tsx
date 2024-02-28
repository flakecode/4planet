import ReactMarkdown from "react-markdown";
import { IComponentPropsExtended } from "../../interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div className="max-w-[350px] bg-white rounded-[20px] p-4 border border-[#E1E1E1]">
      {props.title ? (
        <ReactMarkdown className="text-base font-regular leading-6 text-black">
          {props.title}
        </ReactMarkdown>
      ) : null}
      {props?.description ? (
        <ReactMarkdown className="text-lg text-black font-regular mt-5">
          {props?.description}
        </ReactMarkdown>
      ) : null}
    </div>
  );
}
