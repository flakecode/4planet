import ReactMarkdown from "react-markdown";
import { IComponentPropsExtended } from "../../interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div className="flex flex-col gap-3 cursor-pointer">
      <div className="bg-[#F5F5F5] rounded-[20px] p-8 hover:bg-primary-green transition duration-200 h-full">
        {props.title ? (
          <ReactMarkdown className="text-xl font-semibold leading-6 text-black mb-5">
            {props.title}
          </ReactMarkdown>
        ) : null}
        {props?.description ? (
          <ReactMarkdown className="text-md text-black opacity-50">
            {props?.description}
          </ReactMarkdown>
        ) : null}
      </div>
    </div>
  );
}
