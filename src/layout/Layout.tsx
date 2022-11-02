import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const handleCollapseMenu = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <>
      <Navbar handleCollapseMenu={handleCollapseMenu} />
      <div className="d-flex">
        <Sidebar
          handleCollapseMenu={handleCollapseMenu}
          showSidebar={showSidebar}
        />
        <div
          className="px-3 py-3"
          style={{
            marginLeft: "310px",
            // marginLeft: !showSidebar ? "310px" : "0",
            overflow: "auto",
            width: "100%",
          }}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
