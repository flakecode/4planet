"use client";

import React from "react";
import { IComponentPropsExtended } from "./interface";
import { ChevronDown, ChevronUp, MinusIcon, PlusIcon } from "lucide-react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Disclosure } from "@headlessui/react";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="page-blocks.faq-block"
      data-variant={props.variant}
      className="w-full bg-black"
    >
      <div className="bg-black">
        <div className=" mx-auto max-w-[1440px] py-16 px-4 sm:py-24 sm:px-6 lg:px-8 flex gap-[183px]">
          <div>
            <h2 className="text-center text-5xl font-bold text-white">
              {props.data.title}
            </h2>
            <p className="text-center mt-5 text-xl text-white">
              {props.data.description}
            </p>
          </div>
          <div className="w-full">
            <dl className="flex flex-col gap-5">
              {props.data.faqs?.map((faq, index) => (
                <Disclosure
                  as="div"
                  key={index}
                  className="bg-[#FFFFFF] p-8 rounded-xl "
                >
                  {({ open }) => (
                    <>
                      <div className="text-lg">
                        <Disclosure.Button className="flex w-full items-start justify-between text-left">
                          {faq.title ? (
                            <ReactMarkdown className="text-xl font-medium leading-6 text-black">
                              {faq.title}
                            </ReactMarkdown>
                          ) : null}
                          <span className="ml-2 flex-shrink-0 flex h-7 w-7 text-black items-center">
                            {open ? (
                              <ChevronUp
                                area-hidden="true"
                                className="text-[#8F8F8F]"
                              />
                            ) : (
                              <ChevronDown aria-hidden="true" />
                            )}
                          </span>
                        </Disclosure.Button>
                      </div>
                      <Disclosure.Panel as="div" className="mt-4 lg:mt-6 pr-12">
                        {faq.description ? (
                          <ReactMarkdown className="mt-5 text-base font-regular text-gray-500">
                            {faq.description}
                          </ReactMarkdown>
                        ) : null}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
