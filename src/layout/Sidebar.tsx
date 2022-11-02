import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import styled from "@emotion/styled";
import ItemSideBar from "../components/sidebar/item-sidebar/ItemSideBar";
import SideBarConst from "../shared/constants/sidebar/side-bar.constant";
import { filterRolesSideBar } from "../shared/utils/auth.ultil";
import "./Sidebar.css";

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNavShow = styled.nav`
  // background: #33ccff;
  // width: 250px;
  // height: 100vh;
  // display: flex;
  // justify-content: center;
  // position: fixed;
  // top: 80px;
  // left: ${({ sidebar }: any) => (sidebar ? "0" : "-100%")};
  // // left: 0;
  // transition: 350ms;
  // z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = (props: any) => {
  const { handleCollapseMenu, showSidebar } = props;

  return (
    <>
      <div className="px-2 pt-3 wrapper-sidebar" style={{ background: "#ccc" }}>
        <ul className="list-unstyled d-block">
          {/* <SidebarNavShow
            // sidebar={showSidebar}
            style={{
              background: "#33ccff",
              width: "250px",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              position: "fixed",
              top: "80px",
              left: !showSidebar ? "0" : "-100%",
              transition: "350ms",
              zIndex: 10,
            }}
          > */}
          {/* <SidebarWrap> */}
          {/* <NavIcon to="#">
                <AiOutlineClose onClick={handleCollapseMenu} />
              </NavIcon> */}
          {filterRolesSideBar(SideBarConst, []).map((item, index) => (
            <ItemSideBar item={item} index={index} key={index} />
          ))}
          {/* </SidebarWrap> */}
          {/* </SidebarNavShow> */}
          {/* <li className="text-center my-5">
            <img src={ImgSibar} alt="image_sibar" width="60%"/>
          </li> */}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
