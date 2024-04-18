"use client";

import React, { useMemo, useState } from "react";
import { IComponentPropsExtended } from "./interface";
import ReactMarkdown from "react-markdown";
import { FormProvider, useForm } from "react-hook-form";
import { Button, FormField } from "@sps/ui-adapter";
import { Component as File } from "@sps/sps-file-storage-models-file-frontend-component";

export function Component(props: IComponentPropsExtended) {
  const cloudPaymentsPublicId =
    process.env.NODE_ENV === "development"
      ? "pk_4eddbc1335cd8507962a357186a21"
      : "pk_b2124921a65199e4082fd293a1136";
  const treePriceByCurrency = { rub: 190, usd: 3, kzt: 1000 };

  const methods = useForm<any>({
    mode: "all",
  });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = methods;

  const watchData = watch();

  const numbers = useMemo(() => {
    return [1, 3, 5, 10, 20, 50, 100, 1000];
  }, []);

  async function onSubmit(data: any) {
    if (typeof window === "undefined") {
      return;
    }
    const passData = { ...data };
    console.log(passData);

    const amount = passData.amount;
    const price = treePriceByCurrency.rub;

    // @ts-ignore
    const widget = new cp.CloudPayments();
    widget.pay(
      "auth", // или 'charge'
      {
        //options
        publicId: cloudPaymentsPublicId, //id из личного кабинета
        description: "Оплата деревьев в 4planet.ru", //назначение
        amount: amount * price, //сумма
        currency: "RUB", //валюта
        requireEmail: true,
        skin: "mini", //дизайн виджета (необязательно)
        data: {
          myProp: "myProp value",
        },
      },
      {
        onSuccess: function (options: any) {
          // success
          //действие при успешной оплате
          console.log(`onSuccess `, options);
        },
        onFail: function (reason: any, options: any) {
          // fail
          //действие при неуспешной оплате
          console.log(`onFail `, reason, options);
        },
        onComplete: function (paymentResult: any, options: any) {
          //Вызывается как только виджет получает от api.cloudpayments ответ с результатом транзакции.
          //например вызов вашей аналитики Facebook Pixel
          console.log(`onComplete `, paymentResult, options);
        },
      },
    );
  }

  return (
    <div
      data-module="sps-website-builder"
      data-model="page-blocks.features-section-block"
      data-variant={props.variant}
      id={props.data.anchor || ""}
      className="w-full bg-black pt-40 pb-24 relative"
    >
      {props.data.media && props.data.media?.length ? (
        <File
          isServer={false}
          variant="image"
          data={props.data.media[0]}
          containerClassName=""
          className="object-cover object-center"
        />
      ) : null}
      {/* <FormProvider {...methods}>
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
                <div className="lg:flex hidden gap-4">
                  {numbers.map((number, index) => (
                    <Button
                      key={index}
                      ui="sps"
                      data-ui-variant="secondary"
                      onClick={() => {
                        setValue("amount", number);
                      }}
                    >
                      {number}
                    </Button>
                  ))}
                </div>
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
                  = {190 * parseInt(watchData.amount || 0)}₽
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
      </FormProvider> */}
    </div>
  );
}
