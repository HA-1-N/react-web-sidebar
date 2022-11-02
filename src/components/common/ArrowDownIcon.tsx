import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import { RiArrowDownSLine } from "react-icons/ri";

const ArrowDownIcon = (props: any) => {
  return (
    <>
      <RiArrowDownSLine />
    </>
  );
};

export default ArrowDownIcon;
export const getArrowDownIcon = (props?: any) => <ArrowDownIcon {...props} />;
