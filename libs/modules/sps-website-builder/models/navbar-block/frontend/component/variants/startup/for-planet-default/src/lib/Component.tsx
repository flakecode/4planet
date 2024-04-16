"use client";

import React, { useEffect } from "react";
import { Component as Button } from "@sps/sps-website-builder-models-button-frontend-component";
import { Disclosure } from "@headlessui/react";
import { Bars2Icon, Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { usePathname, useSearchParams } from "next/navigation";
import { Component as Logotype } from "@sps/sps-website-builder-models-logotype-frontend-component";
import { IComponentPropsExtended } from "./interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <Disclosure
      data-module="sps-website-builder"
      data-model="page-blocks.navbar-block"
      data-variant={props.variant}
      as="div"
      className="w-full"
    >
      {(disclosure) => {
        return <DisclosureInner disclosure={disclosure} props={props} />;
      }}
    </Disclosure>
  );
}

function DisclosureInner({
  disclosure,
  props,
}: {
  disclosure: any;
  props: IComponentPropsExtended;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (disclosure?.close) {
      disclosure.close();
    }
  }, [pathname, searchParams, disclosure.close]);

  return (
    <div className="relative">
      <div className="relative mx-auto flex flex-row w-full pt-[50px] lg:pt-8">
        <div className="flex w-full justify-between">
          <div className="flex w-full items-center px-5 md:px-2 lg:px-0 justify-between">
            {props.data.logotype ? (
              <Logotype
                variant="default"
                isServer={false}
                data={props.data.logotype}
              />
            ) : null}
            <div className="hidden lg:flex gap-8 mx-auto">
              {props.data.buttons?.map((button, index) => {
                return (
                  <Button
                    isServer={false}
                    key={index}
                    variant={button.variant}
                    data={button}
                  />
                );
              })}
            </div>
            <div className="hidden lg:flex lg:space-x-2 items-center gap-5">
              {props.data.additionalButtons?.map((button, index) => {
                return (
                  <Button
                    isServer={false}
                    key={index}
                    variant={button.variant}
                    data={button}
                  />
                );
              })}
              {props.data.extraButtons?.map((button, index) => {
                return (
                  <Button
                    isServer={false}
                    key={index}
                    variant={button.variant}
                    data={button}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-shrink-0 items-center lg:hidden pr-5 ">
          <Disclosure.Button className="inline-flex items-center justify-center rounded-md text-white hover:text-gray-500">
            <span className="sr-only">Open main menu</span>
            {disclosure.open ? (
              <XMarkIcon
                className="block h-8 w-8 text-black fixed z-20 mr-5"
                aria-hidden="true"
              />
            ) : (
              <Bars2Icon className="block h-8 w-8 " aria-hidden="true" />
            )}
          </Disclosure.Button>
        </div>
      </div>

      <Disclosure.Panel className="lg:hidden h-screen bg-white fixed w-screen top-0">
        <div className="flex flex-col gap-4 w-10/12 lg:w-4/12 max-w-[450px] pt-[50px] px-5">
          {props.data.logotype ? (
            <Logotype
              isServer={false}
              data={props.data.logotype}
              variant="for-plenet-navbar-logotype"
            />
          ) : null}
        </div>
        <div className="flex flex-col gap-3  h-full pt-[200px]">
          <div className="flex-col flex gap-[18px]">
            {props.data.buttons?.map((button, index) => {
              return (
                <div
                  className="flex flex-col gap-[18px] font-primary font-medium p-5 pb-0 uppercase"
                  key={index}
                >
                  <Button
                    isServer={false}
                    key={index}
                    variant={button.variant}
                    data={button}
                  />
                  <div className="col-span-1 flex flex-col justify-center w-full h-1">
                    <div className="h-px bg-[#E7E7E7]"></div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="absolute bottom-[5%] px-5 flex gap-10  w-full">
            {props.data.additionalButtons?.map((button, index) => {
              return (
                <Button
                  isServer={false}
                  key={index}
                  variant={button.variant}
                  data={button}
                />
              );
            })}
          </div>
        </div>
      </Disclosure.Panel>
    </div>
  );
}
