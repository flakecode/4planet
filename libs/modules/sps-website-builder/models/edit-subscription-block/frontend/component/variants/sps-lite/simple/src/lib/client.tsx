"use client";
import "client-only";

import { Component } from "./Component";
import { ErrorBoundary } from "@sps/ui-adapter";
import { Skeleton } from "./Skeleton";
import { Error } from "./Error";
import { IComponentProps } from "./interface";
import { api } from "@sps/sps-website-builder-models-edit-subscription-block-frontend-api";

export default function Client(props: IComponentProps) {
  const { data, isFetching, isLoading, isUninitialized } =
    api.client.useFindOneQuery({
      id: props.data.id,
    });

  if (isFetching || isLoading || isUninitialized || !data) {
    return <Skeleton {...props} />;
  }

  return (
    <ErrorBoundary fallback={Error}>
      <Component {...props} data={data} />
    </ErrorBoundary>
  );
}
