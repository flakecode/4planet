"use client";

import React from "react";
import { IComponentPropsExtended } from "./interface";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="feature"
      data-variant={props.variant}
      className="md:p-10 p-5 bg-white rounded-[20px]"
    >
      {props.data.title ? (
        <ReactMarkdown className="md:text-2xl text-xl font-medium font-primary leading-[130%] text-black uppercase mb-10">
          {props.data.title}
        </ReactMarkdown>
      ) : null}
      {props.data.description ? (
        <ReactMarkdown
          className="md:text-lg text-black flex flex-col gap-4"
          components={{
            a: ({ node, ...props }) => {
              if (props?.href?.includes("copy_")) {
                return (
                  <span
                    onClick={() => {
                      const copyText = props?.href?.replace("copy_", "");

                      navigator.clipboard.writeText(copyText || "");
                    }}
                    className="inline"
                  >
                    {props.children}{" "}
                    <svg
                      className="inline cursor-pointer w-6 h-6 hover:stroke-[#A8DA1A] transition duration-200 mb-1 stroke-[#C3C3C3]"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Icon">
                        <path
                          id="Vector"
                          d="M18.6002 9.89941H10.5014C9.50743 9.89941 8.70166 10.7052 8.70166 11.6991V19.7979C8.70166 20.7919 9.50743 21.5976 10.5014 21.5976H18.6002C19.5941 21.5976 20.3999 20.7919 20.3999 19.7979V11.6991C20.3999 10.7052 19.5941 9.89941 18.6002 9.89941Z"
                          stroke="stroke-current"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          id="Vector_2"
                          d="M5.09949 15.2983H4.19963C3.72231 15.2983 3.26454 15.1087 2.92703 14.7712C2.58952 14.4337 2.3999 13.9759 2.3999 13.4986V5.39982C2.3999 4.92251 2.58952 4.46474 2.92703 4.12723C3.26454 3.78971 3.72231 3.6001 4.19963 3.6001H12.2984C12.7757 3.6001 13.2335 3.78971 13.571 4.12723C13.9085 4.46474 14.0981 4.92251 14.0981 5.39982V6.29969"
                          stroke="stroke-current"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </span>
                );
              }

              if (!props.href) {
                return <p>{props.children}</p>;
              }

              return (
                <Link
                  {...props}
                  href={props.href}
                  className="underline underline-offset-2 hover:opacity-70 transition duration-200"
                >
                  {props.children}
                </Link>
              );
            },
          }}
        >
          {props.data.description}
        </ReactMarkdown>
      ) : null}
    </div>
  );
}
