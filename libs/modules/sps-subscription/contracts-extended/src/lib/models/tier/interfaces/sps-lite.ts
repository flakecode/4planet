import type { IModel as IParentModel } from "@sps/sps-subscription-contracts/lib/models/tier/interfaces";
import type { IModel as IButton } from "@sps/sps-website-builder-contracts/lib/models/button/interfaces";

export interface IModel extends IParentModel {
  buttons?: IButton[] | null;
}
