import { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/slide/interfaces";
import type { IModel as IFile } from "@sps/sps-file-storage-contracts/lib/entities/file/interfaces";

export interface IModel extends IParentModel {
  media?: IFile[] | null;
  additionalMedia?: IFile[] | null;
}
