import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import DashboardOne from "../features/dashboard/dashboard-one/Dashboard_One";
import DashboardTwo from "../features/dashboard/dashboard-two/DashboardTwo";
import NonFound from "../features/NonFound";
import Overview from "../features/overview/Overview";
import ProductOne from "../features/products/product_1/ProductOne";
import ProductTwo from "../features/products/product_2/ProductTwo";
import ProductThree from "../features/products/product_3/ProductThree";
import Layout from "../layout/Layout";
import { APP_ROUTER_CONST } from "../shared/constants/router/app-router.constants";
import { PRODUCT_ROUTER } from "../shared/constants/router/product-router.constants";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path={APP_ROUTER_CONST.layout.path} element={<Layout />}>
          {/* <Route
            path="/"
            element={<Navigate to="/overview" replace={true} />}
          ></Route> */}
          <Route path="/overview" element={<Overview />}></Route>
          {/* <Route path="/game" element={<Game />}></Route> */}
          <Route
            path={
              APP_ROUTER_CONST.layout.childrens.product.childrens.product_1.path
            }
            element={<ProductOne />}
          ></Route>

          <Route
            path={
              // APP_ROUTER_CONST.layout.childrens.product.childrens.product_2.path
              PRODUCT_ROUTER.childrens.product_2.path
            }
            element={<ProductTwo />}
          ></Route>

          <Route
            path={
              APP_ROUTER_CONST.layout.childrens.product.childrens.product_3.path
            }
            element={<ProductThree />}
          ></Route>

          <Route
            path={
              APP_ROUTER_CONST.layout.childrens.dashboard.childrens.dashboard_1
                .path
            }
            element={<DashboardOne />}
          ></Route>

          <Route
            path={
              APP_ROUTER_CONST.layout.childrens.dashboard.childrens.dashboard_2
                .path
            }
            element={<DashboardTwo />}
          ></Route>
        </Route>
        <Route path={APP_ROUTER_CONST.nonfound.path} element={<NonFound />} />
        {/* <Route path={APP_ROUTER_CONST.login.path} element={<Login />} />
        <Route
          path={APP_ROUTER_CONST.authCallback.path}
          element={<AuthCallback />}
        /> */}
        <Route path={APP_ROUTER_CONST.all.path} element={<NonFound />} />
      </Routes>
    </>
  );
};

export default AppRouter;
