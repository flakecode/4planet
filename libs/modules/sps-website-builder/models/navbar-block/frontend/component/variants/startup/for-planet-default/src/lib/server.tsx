"use server";
import "server-only";

import { ErrorBoundary } from "@sps/ui-adapter";
import { IComponentProps, IComponentPropsExtended } from "./interface";
import { Error } from "./Error";
import { api } from "@sps/sps-website-builder-models-navbar-block-frontend-api-server";
import { Component } from "./Component";
import { Component as Logotype } from "@sps/sps-website-builder-models-logotype-frontend-component";
import { Component as Button } from "@sps/sps-website-builder-models-button-frontend-component";

// default is required for dynamic import
export default async function Server(props: IComponentProps) {
  const data = await api.fetch.findOne({
    id: props.data.id,
  });

  if (!data) {
    return <></>;
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
            isServer={props.isServer}
            data={props.data.logotype}
          />
        ) : null}
        <div className="hidden lg:flex gap-8 mx-auto">
          {props.data.buttons?.map((button, index) => {
            return (
              <Button
                isServer={props.isServer}
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
                isServer={props.isServer}
                key={index}
                variant={button.variant}
                data={button}
              />
            );
          })}
          {props.data.extraButtons?.map((button, index) => {
            return (
              <Button
                isServer={props.isServer}
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
