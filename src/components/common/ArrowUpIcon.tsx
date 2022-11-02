import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import { RiArrowUpSLine } from "react-icons/ri";

const ArrowUpIcon = (props: any) => {
  return (
    <>
      <RiArrowUpSLine />
    </>
  );
};

export default ArrowUpIcon;
export const getArrowUpIcon = (props?: any) => <ArrowUpIcon {...props} />;
