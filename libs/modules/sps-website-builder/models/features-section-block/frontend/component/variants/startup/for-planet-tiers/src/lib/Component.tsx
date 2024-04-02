"use client";

import React from "react";
import { IComponentPropsExtended } from "./interface";
import ReactMarkdown from "react-markdown";
import { Component as Feature } from "@sps/sps-website-builder-models-feature-frontend-component";

const cloudPaymentsPublicId =
  process.env.NODE_ENV === "development"
    ? "pk_4eddbc1335cd8507962a357186a21"
    : "pk_b2124921a65199e4082fd293a1136";
const treePriceByCurrency = { rub: 190, usd: 3, kzt: 1000 };

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="page-blocks.features-section-block"
      data-variant={props.variant}
      className="w-full bg-black pt-40 pb-24"
    >
      <div className="mx-auto max-w-7xl bg-white rounded-[20px] p-16">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-5xl font-medium font-primary leading-[130%] text-black uppercase">
            {props.data?.title ? (
              <ReactMarkdown>{props.data?.title}</ReactMarkdown>
            ) : null}
          </h2>
          {props.data.description ? (
            <ReactMarkdown className="mt-5 max-w-2xl text-xl font-regular text-black text-center">
              {props.data.description}
            </ReactMarkdown>
          ) : null}
        </div>
        <div className="space-y-10 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          {props.data.features?.map((feature, index) => (
            <Feature
              isServer={false}
              key={index}
              data={feature}
              variant="tier"
              onClick={() => {
                const amount = feature.amount || 1;
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
                      treeAmount: amount,
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
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
