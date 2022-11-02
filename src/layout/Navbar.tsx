import React from "react";
import styled from "@emotion/styled";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { APP_ROUTER_CONST } from "../shared/constants/router/app-router.constants";

const Nav = styled.div`
  background: #0066ff;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
// =====-================================-=
const Navbar = (props: any) => {
  const { handleCollapseMenu } = props;

  const navigate = useNavigate();

  const handleClick = () => {
    handleCollapseMenu();
  };

  const goToHomePage = () => {
    navigate(APP_ROUTER_CONST.layout.childrens.overview.path, {
      replace: true,
    });
  };
  return (
    <>
      <Nav
      // className="navbar sticky-top navbar-light px-4 bg-common"
      >
        <NavIcon to="#">
          <FaBars style={{ color: "#FFF" }} onClick={handleClick} />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
