import { IComponentProps as ITimelineComponentProps } from "@sps/sps-website-builder-models-feature-frontend-component-variants-startup-timeline";
import { IComponentProps as ITierComponentProps } from "@sps/sps-website-builder-models-feature-frontend-component-variants-startup-tier";
import { IComponentProps as IRequisiteComponentProps } from "@sps/sps-website-builder-models-feature-frontend-component-variants-startup-requisite";
import { IComponentProps as IHowItWorksComponentProps } from "@sps/sps-website-builder-models-feature-frontend-component-variants-startup-how-it-works";
import { IComponentProps as IHeadlinesComponentProps } from "@sps/sps-website-builder-models-feature-frontend-component-variants-startup-headlines";
export type IComponentProps =
  | ITimelineComponentProps
  | ITierComponentProps
  | IRequisiteComponentProps
  | IHowItWorksComponentProps
  | IHeadlinesComponentProps
  | never;
