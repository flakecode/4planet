"use client";

import React, { useState } from "react";
import { IComponentPropsExtended } from "./interface";
import ReactMarkdown from "react-markdown";
import { Component as Feature } from "@sps/sps-website-builder-models-feature-frontend-component";
import Image from "next/image";
import { getFileUrl } from "@sps/shared-utils";
import { FormProvider, useForm } from "react-hook-form";
import { Button, FormField } from "@sps/ui-adapter";

const cloudPaymentsPublicId =
  process.env.NODE_ENV === "development"
    ? "pk_4eddbc1335cd8507962a357186a21"
    : "pk_b2124921a65199e4082fd293a1136";
const treePriceByCurrency = { rub: 190, usd: 3, kzt: 1000 };

export function Component(props: IComponentPropsExtended) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  function close() {
    setIsOpen(false);
  }
  const methods = useForm<any>({
    mode: "all",
  });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = methods;

  const watchData = watch();
  const numbers = [1, 3, 5, 10, 20, 50, 100, 1000];
  const listItems = numbers.map((number) => (
    <Button
      ui="sps"
      data-ui-variant="secondary"
      onClick={() => {
        setValue("amount", number);
      }}
    >
      {number}
    </Button>
  ));

  async function onSubmit(data: any) {
    const passData = { ...data };
    console.log(passData);
  }
  return (
    <div
      data-module="sps-website-builder"
      data-model="page-blocks.features-section-block"
      data-variant={props.variant}
      id={props.data.anchor || ""}
      className="w-full bg-black pt-40 pb-24 relative"
    >
      {props.data.media?.length ? (
        <div className="">
          <Image
            src={getFileUrl(props.data.media[0])}
            alt=""
            fill={true}
            className="object-cover object-center"
          />
        </div>
      ) : null}
      <FormProvider {...methods}>
        <div className="w-full max-w-[980px] mx-auto relative px-5 md:px-0">
          <div className="bg-white rounded-[20px] py-[60px]">
            <div className="flex flex-col gap-12 px-5 lg:px-0">
              <div className="flex flex-col items-center">
                <h2 className="md:text-5xl text-[32px] font-medium font-primary leading-[130%] text-center text-black uppercase">
                  {props.data?.title ? (
                    <ReactMarkdown>{props.data?.title}</ReactMarkdown>
                  ) : null}
                </h2>
                {props.data.description ? (
                  <ReactMarkdown className="mt-5 max-w-2xl text-lg md:text-xl font-regular text-black text-center">
                    {props.data.description}
                  </ReactMarkdown>
                ) : null}
              </div>
              <div className="max-w-[740px] mx-auto flex flex-col gap-4">
                <div className="lg:flex hidden gap-4">{listItems}</div>
                <div className=" flex items-center border-[#E8E8E8] border-[1px] py-[10px] px-3 rounded-[20px]">
                  <Button
                    ui="sps"
                    data-ui-variant="outline"
                    onClick={() => {
                      if (parseInt(watchData.amount) <= 1) {
                        return;
                      }
                      setValue("amount", parseInt(watchData.amount) - 1);
                    }}
                  >
                    -
                  </Button>
                  <FormField
                    ui="sps"
                    type="text"
                    name="amount"
                    initialValue={100}
                  />
                  <Button
                    ui="sps"
                    data-ui-variant="outline"
                    onClick={() => {
                      setValue("amount", parseInt(watchData.amount) + 1);
                    }}
                  >
                    +
                  </Button>
                </div>
                <div className="flex justify-center text-[#B2B2B2] text-xl">
                  = {190 * parseInt(watchData.amount)}₽
                </div>
              </div>

              <div className="flex justify-center max-w-[740px] mx-auto w-full">
                <Button
                  ui="sps"
                  data-ui-variant="primary"
                  onClick={handleSubmit(onSubmit)}
                >
                  Оплатить
                </Button>
              </div>
            </div>
          </div>
        </div>
      </FormProvider>
    </div>
  );
}
