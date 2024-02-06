import { Component } from "./Component";
import { ErrorBoundary } from "@sps/ui-adapter";
import { Error } from "./Error";
import { Skeleton } from "./Skeleton";
import { IComponentProps, IComponentPropsExtended } from "../../interface";

export function ForPlanetTiers(
  props: IComponentProps | IComponentPropsExtended,
) {
  return (
    <ErrorBoundary fallback={Error}>
      {props.showSkeletons ? <Skeleton {...props} /> : <Component {...props} />}
    </ErrorBoundary>
  );
}
