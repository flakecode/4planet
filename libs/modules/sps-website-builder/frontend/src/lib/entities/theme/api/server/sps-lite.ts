import { api as parentApi } from "../../../api/server";
import { populate } from "@sps/sps-website-builder-contracts-extended/lib/entities/theme/populate";
import { IEntity } from "@sps/sps-website-builder-contracts-extended/lib/entities/theme/interfaces";

export const api = {
  findOne: async ({ id }: { id: number }): Promise<IEntity> => {
    const params = {
      id,
      populate,
      model: "theme",
    };

    return parentApi.findOne<IEntity>(params);
  },
};
