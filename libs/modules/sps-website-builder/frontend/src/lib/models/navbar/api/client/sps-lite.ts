import { createApi } from "@reduxjs/toolkit/query/react";
import { rtk, BACKEND_URL } from "@sps/utils";
import { populate, route, tag, IModelExtended } from "../../model";
import { globalActionsStore } from "@sps/store";

export const api = createApi({
  baseQuery: rtk.api.fetchBaseQueryBuilder(
    `${BACKEND_URL}/api/sps-website-builder`,
  ),
  tagTypes: [tag],
  reducerPath: route,
  endpoints: (build) => ({
    findOne: rtk.api.findOne<IModelExtended>({
      serviceApi: this,
      build,
      populate,
      model: route,
      rtkType: tag,
    }),
  }),
});

export const subscription = (reduxStore: any) => {
  // const triggeredActions: string[] = [];
  return globalActionsStore.subscribe((state) => {
    // const spsEcommerceState = state.stores["sps-ecommerce"];
    // spsEcommerceState?.actions?.forEach((action: any) => {
    //   if (
    //     action.type === "products/executeMutation/fulfilled" &&
    //     !triggeredActions.includes(action.meta.requestId)
    //   ) {
    //     reduxStore.dispatch(api.util.invalidateTags([tag]));
    //     triggeredActions.push(action.meta.requestId);
    //   }
    // });
  });
};
