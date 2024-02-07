import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { IComponentPropsExtended } from "../../interface";
import { Disclosure } from "@headlessui/react";

export function Component(props: IComponentPropsExtended) {
  return (
    <div className="bg-black">
      <div className=" mx-auto max-w-[1440px] py-16 px-4 sm:py-24 sm:px-6 lg:px-8 flex gap-[183px]">
        <div>
          <h2 className="text-center text-5xl font-bold text-white">
            {props.title}
          </h2>
          <p className="text-center mt-5 text-xl text-white">
            {props.description}
          </p>
        </div>
        <div className="">
          <dl className="flex flex-col gap-5">
            {props.faqs?.map((faq, index) => (
              <div key={index}>
                {faq.title ? (
                  <ReactMarkdown className="text-xl font-medium leading-6 text-black">
                    {faq.title}
                  </ReactMarkdown>
                ) : null}
                {faq.description ? (
                  <ReactMarkdown className="mt-2 text-base text-gray-500">
                    {faq.description}
                  </ReactMarkdown>
                ) : null}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
