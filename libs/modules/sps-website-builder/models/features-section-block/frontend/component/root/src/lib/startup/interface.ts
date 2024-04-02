import { IComponentProps as IForPlanetTimelineComponentProps } from "@sps/sps-website-builder-models-features-section-block-frontend-component-variants-startup-for-planet-timeline";
import { IComponentProps as IForPlanetTiersComponentProps } from "@sps/sps-website-builder-models-features-section-block-frontend-component-variants-startup-for-planet-tiers";
import { IComponentProps as IForPlanetRequisitesComponentProps } from "@sps/sps-website-builder-models-features-section-block-frontend-component-variants-startup-for-planet-requisites";
import { IComponentProps as IForPlanetHowItWorksComponentProps } from "@sps/sps-website-builder-models-features-section-block-frontend-component-variants-startup-for-planet-how-it-works";
import { IComponentProps as IForPlanetHeadlinesComponentProps } from "@sps/sps-website-builder-models-features-section-block-frontend-component-variants-startup-for-planet-headlines";
export type IComponentProps =
  | IForPlanetTimelineComponentProps
  | IForPlanetTiersComponentProps
  | IForPlanetRequisitesComponentProps
  | IForPlanetHowItWorksComponentProps
  | IForPlanetHeadlinesComponentProps
  | never;
