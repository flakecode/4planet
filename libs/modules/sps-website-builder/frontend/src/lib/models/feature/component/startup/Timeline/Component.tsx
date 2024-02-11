import ReactMarkdown from "react-markdown";
import { IComponentPropsExtended } from "../../interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div>
      {props.title ? (
        <ReactMarkdown className="text-3xl font-medium font-primary leading-6 text-black uppercase mb-6">
          {props.title}
        </ReactMarkdown>
      ) : null}
      {props?.description ? (
        <ReactMarkdown className="text-lg text-black">
          {props?.description}
        </ReactMarkdown>
      ) : null}
    </div>
  );
}
