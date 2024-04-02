import type { IModel as IParentModel } from "./sps-lite";

export interface IModel extends Omit<IParentModel, "variant"> {
  variant:
    | IParentModel["variant"]
    | "for-planet-timeline"
    | "for-planet-headlines"
    | "for-planet-tiers"
    | "for-planet-how-it-works"
    | "for-planet-requisites";
}
