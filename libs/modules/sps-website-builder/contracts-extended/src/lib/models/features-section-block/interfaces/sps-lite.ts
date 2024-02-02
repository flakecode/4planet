import { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/features-section-block/interfaces";
import type { IModel as IFile } from "@sps/sps-file-storage-contracts/lib/models/file/interfaces";
import { IModel as IFeature } from "@sps/sps-website-builder-contracts/lib/models/feature/interfaces";

export interface IModel extends IParentModel {
  features?: IFeature[] | null;
  media?: IFile[] | null;
  additionalMedia?: IFile[] | null;
}
