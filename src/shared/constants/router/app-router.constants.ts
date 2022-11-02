import { DASHBOARD_ROUTER } from "./dashboard-router.constants";
import { PRODUCT_ROUTER } from "./product-router.constants";

export const APP_ROUTER_CONST = {
  layout: {
    path: "/",
    roles: [],
    childrens: {
      overview: {
        path: "/overview",
        roles: [],
      },
      inventoryScheduler: {
        path: "/inventory-scheduler",
        roles: [],
      },
      product: PRODUCT_ROUTER,
      dashboard: DASHBOARD_ROUTER,
    },
  },
  nonfound: {
    path: "/404",
  },
  login: {
    path: "/login",
  },
  authCallback: {
    path: "/auth/callback",
  },
  all: {
    path: "*",
  },
};
