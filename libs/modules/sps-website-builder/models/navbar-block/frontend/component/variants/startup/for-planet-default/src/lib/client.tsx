"use client";
import "client-only";

import { Component } from "./Component";
import { ErrorBoundary } from "@sps/ui-adapter";
import { Skeleton } from "./Skeleton";
import { Error } from "./Error";
import { IComponentProps, IComponentPropsExtended } from "./interface";
import { api } from "@sps/sps-website-builder-models-navbar-block-frontend-api-client";
import { Component as Logotype } from "@sps/sps-website-builder-models-logotype-frontend-component";
import { Component as Button } from "@sps/sps-website-builder-models-button-frontend-component";

export default function Client(props: IComponentProps) {
  const { data, isFetching, isLoading, isUninitialized } =
    api.rtk.useFindOneQuery({
      id: props.data.id,
    });

  if (isFetching || isLoading || isUninitialized || !data) {
    return <Skeleton {...props} />;
  }

  return (
    <ErrorBoundary fallback={Error}>
      <Component {...props} data={data}>
        <InnerComponent {...props} data={data} />
      </Component>
    </ErrorBoundary>
  );
}

function InnerComponent(props: IComponentPropsExtended) {
  return (
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
  );
}
