import type { IEntity as IBackendFile } from "libs/modules/sps-file-storage/frontend/src/lib/redux/entities/file/interfaces";
import type { IComponent as IBackendComponentButton } from "../../../elements/button/interfaces";

export interface IComponent {
  id: number;
  __component: "page-blocks.checkout-form-block";
  variant:
    | "single-step-with-tier"
    | "single-step-with-product"
    | "single-step-with-cart";
  className: string | null;
  title: string | null;
  subtitle: string | null;
  anchor: string | null;
  description: string | null;
  buttons: IBackendComponentButton[] | null;
  media?: IBackendFile[] | null;
  additionalMedia?: IBackendFile[] | null;
}
