import { createApi } from "@reduxjs/toolkit/query/react";
import { BACKEND_URL } from "~utils/envs";
import {
  strapiFetchBaseQueryBuilder,
  strapiFind,
  strapiFindOne,
} from "~redux/strapi-rtk";
import { populate } from "../populate";
import { IEntity } from "../interfaces";

const model = "attributes";
const rtkType = "Attribute";

export const api = createApi({
  baseQuery: strapiFetchBaseQueryBuilder(`${BACKEND_URL}/api/sps-ecommerce`),
  tagTypes: [rtkType],
  reducerPath: model,
  endpoints: (build) => ({
    get: strapiFind<IEntity>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),

    getById: strapiFindOne<IEntity>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),
  }),
});
