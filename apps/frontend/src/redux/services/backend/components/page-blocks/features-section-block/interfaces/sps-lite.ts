import type { IEntity as IBackendFile } from "libs/modules/sps-file-storage/frontend/src/lib/redux/entities/file/interfaces";
import type { IComponent as IBackendComponentFeature } from "../../../elements/feature/interfaces";

export interface IComponent {
  id: number;
  __component: "page-blocks.features-section-block";
  variant: "with-icon";
  features?: IBackendComponentFeature[] | null;
  title: string | null;
  subtitle: string | null;
  description: string | null;
  anchor: string | null;
  className: string | null;
  media?: IBackendFile[] | null;
  additionalMedia?: IBackendFile[] | null;
}
