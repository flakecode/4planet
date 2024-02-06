import type { IModel as IParentModel } from "./sps";

export interface IModel extends Omit<IParentModel, "variant"> {
  variant:
    | IParentModel["variant"]
    | "for-planet-heading"
    | "for-planet-with-target"
    | "for-planet-create-subscription"
    | "for-planet-gallery-and-text"
    | "for-planet-map"
    | "for-planet-videos"
    | "for-planet-gallery-and-text-inversed";
}
