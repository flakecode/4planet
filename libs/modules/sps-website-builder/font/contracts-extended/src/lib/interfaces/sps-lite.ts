import type { IModel as IParentModel } from "@sps/sps-website-builder-font-contracts";
import type { IModel as IFile } from "@sps/sps-file-storage-contracts/lib/models/file/interfaces";

export interface IModel extends IParentModel {
  media?: IFile;
}
