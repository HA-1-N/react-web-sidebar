import { getOverviewIcon } from "./../../../components/common/OverviewIcon";
import { APP_ROUTER_CONST } from "../router/app-router.constants";
import { SIDERBAR_ID } from "../../enums/side-bar.enum";
import { getArrowDownIcon } from "../../../components/common/ArrowDownIcon";
import { getArrowUpIcon } from "../../../components/common/ArrowUpIcon";

const SideBarConst = [
  {
    name: "Overview",
    link: APP_ROUTER_CONST.layout.childrens.overview.path,
    linkParentActive: [],
    icon: getOverviewIcon,
    id: SIDERBAR_ID.OVERVIEW,
    iconArrowDown: getArrowDownIcon,
    iconArrowUp: getArrowUpIcon,
  },
  {
    name: "Product",
    link: "",
    linkParentActive: [],
    icon: getOverviewIcon,
    iconArrowDown: getArrowDownIcon,
    iconArrowUp: getArrowUpIcon,
    childrens: [
      {
        name: "Product 1",
        icon: "icon1",
        linkParentActive: [],
        link: APP_ROUTER_CONST.layout.childrens.product.childrens.product_1
          .path,
        roles: [],
        id: SIDERBAR_ID.SIDERBAR_PRODUCT_ID.PRODUCT_1,
      },
      {
        name: "Product 2",
        icon: "icon1",
        linkParentActive: [],
        link: APP_ROUTER_CONST.layout.childrens.product.childrens.product_2
          .path,
        roles: [],
        id: SIDERBAR_ID.SIDERBAR_PRODUCT_ID.PRODUCT_2,
      },
      {
        name: "Product 3",
        icon: "icon1",
        linkParentActive: [],
        link: APP_ROUTER_CONST.layout.childrens.product.childrens.product_3
          .path,
        roles: [],
        id: SIDERBAR_ID.SIDERBAR_PRODUCT_ID.PRODUCT_3,
      },
    ],
  },
  {
    name: "Dashboard",
    link: "",
    linkParentActive: [],
    icon: getOverviewIcon,
    iconArrowDown: getArrowDownIcon,
    iconArrowUp: getArrowUpIcon,
    childrens: [
      {
        name: "Dashboard One",
        icon: "icon1",
        linkParentActive: [],
        link: APP_ROUTER_CONST.layout.childrens.dashboard.childrens.dashboard_1
          .path,
        roles: [],
        id: SIDERBAR_ID.SIDERBAR_DASHBOARD_ID.DASHBOARD_1,
      },
      {
        name: "Dashboard Two",
        icon: "icon1",
        linkParentActive: [],
        link: APP_ROUTER_CONST.layout.childrens.dashboard.childrens.dashboard_2
          .path,
        roles: [],
        id: SIDERBAR_ID.SIDERBAR_DASHBOARD_ID.DASHBOARD_2,
      },
    ],
  },
];

export default SideBarConst;
