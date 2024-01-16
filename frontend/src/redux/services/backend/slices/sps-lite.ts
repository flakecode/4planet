import { api as currencyApi } from "~redux/services/backend/extensions/sps-billing/api/currency/api";
import { api as flyoutApi } from "~redux/services/backend/extensions/sps-website-builder/api/flyout/api";
import { api as footerApi } from "~redux/services/backend/extensions/sps-website-builder/api/footer/api";
import { api as formRequestApi } from "~redux/services/backend/extensions/sps-crm/api/form-request/api";
import { api as layoutApi } from "~redux/services/backend/extensions/sps-website-builder/api/layout/api";
import { api as loaderApi } from "~redux/services/backend/extensions/sps-website-builder/api/loader/api";
import { api as modalApi } from "~redux/services/backend/extensions/sps-website-builder/api/modal/api";
import { api as navbarApi } from "~redux/services/backend/extensions/sps-website-builder/api/navbar/api";
import { api as pageApi } from "~redux/services/backend/extensions/sps-website-builder/api/page/api";
import { api as reviewApi } from "~redux/services/backend/extensions/sps-crm/api/review/api";
import { api as sidebarApi } from "~redux/services/backend/extensions/sps-website-builder/api/sidebar/api";
import { api as slideOverApi } from "~redux/services/backend/extensions/sps-website-builder/api/slide-over/api";
import { api as topbarApi } from "~redux/services/backend/extensions/sps-website-builder/api/topbar/api";
import { api as tierApi } from "~redux/services/backend/extensions/sps-subscription/api/tier/api";
import { api as subscriptionAttributeApi } from "~redux/services/backend/extensions/sps-subscription/api/attribute/api";
import { api as subscriptionAttributeKeyApi } from "~redux/services/backend/extensions/sps-subscription/api/attribute-key/api";
import { api as subscriptionApi } from "~redux/services/backend/extensions/sps-subscription/api/subscription/api";
import { api as invoiceApi } from "~redux/services/backend/extensions/sps-billing/api/invoice/api";
import { api as productApi } from "~redux/services/backend/extensions/sps-ecommerce/api/product/api";
import { api as ecommerceAttributeApi } from "~redux/services/backend/extensions/sps-ecommerce/api/attribute/api";
import { api as ecommerceAttributeKeyApi } from "~redux/services/backend/extensions/sps-ecommerce/api/attribute-key/api";
import { api as ecommerceCartApi } from "~redux/services/backend/extensions/sps-ecommerce/api/cart/api";
import { api as ecommerceOrderApi } from "~redux/services/backend/extensions/sps-ecommerce/api/order/api";
import { api as roleApi } from "~redux/services/backend/extensions/users-permissions/api/role/api";
import { api as userApi } from "~redux/services/backend/extensions/users-permissions/api/user/api";

export const slices = {
  middlewares: [
    currencyApi.middleware,
    flyoutApi.middleware,
    footerApi.middleware,
    formRequestApi.middleware,
    layoutApi.middleware,
    loaderApi.middleware,
    modalApi.middleware,
    navbarApi.middleware,
    pageApi.middleware,
    reviewApi.middleware,
    sidebarApi.middleware,
    slideOverApi.middleware,
    topbarApi.middleware,
    tierApi.middleware,
    subscriptionAttributeApi.middleware,
    subscriptionAttributeKeyApi.middleware,
    subscriptionApi.middleware,
    invoiceApi.middleware,
    productApi.middleware,
    ecommerceAttributeApi.middleware,
    ecommerceAttributeKeyApi.middleware,
    ecommerceCartApi.middleware,
    ecommerceOrderApi.middleware,
    roleApi.middleware,
    userApi.middleware,
  ],
  reducer: {
    [currencyApi.reducerPath]: currencyApi.reducer,
    [flyoutApi.reducerPath]: flyoutApi.reducer,
    [footerApi.reducerPath]: footerApi.reducer,
    [formRequestApi.reducerPath]: formRequestApi.reducer,
    [layoutApi.reducerPath]: layoutApi.reducer,
    [loaderApi.reducerPath]: loaderApi.reducer,
    [modalApi.reducerPath]: modalApi.reducer,
    [navbarApi.reducerPath]: navbarApi.reducer,
    [pageApi.reducerPath]: pageApi.reducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
    [sidebarApi.reducerPath]: sidebarApi.reducer,
    [slideOverApi.reducerPath]: slideOverApi.reducer,
    [topbarApi.reducerPath]: topbarApi.reducer,
    [tierApi.reducerPath]: tierApi.reducer,
    [subscriptionAttributeApi.reducerPath]: subscriptionAttributeApi.reducer,
    [subscriptionAttributeKeyApi.reducerPath]:
      subscriptionAttributeKeyApi.reducer,
    [subscriptionApi.reducerPath]: subscriptionApi.reducer,
    [invoiceApi.reducerPath]: invoiceApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [ecommerceAttributeApi.reducerPath]: ecommerceAttributeApi.reducer,
    [ecommerceAttributeKeyApi.reducerPath]: ecommerceAttributeKeyApi.reducer,
    [ecommerceCartApi.reducerPath]: ecommerceCartApi.reducer,
    [ecommerceOrderApi.reducerPath]: ecommerceOrderApi.reducer,
    [roleApi.reducerPath]: roleApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
};
