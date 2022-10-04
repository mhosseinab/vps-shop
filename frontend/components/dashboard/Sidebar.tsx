//  Icons
import { AiOutlineCloudServer, AiOutlineDatabase } from "react-icons/ai";
import { BsHddNetwork, BsPin } from "react-icons/bs";
import { GiFirewall, GiUnbalanced } from "react-icons/gi";
import React, { FC } from "react";

import { CgKey } from "react-icons/cg";
import { IoCubeOutline } from "react-icons/io5";
import Link from "next/link";
import { styled } from "@mui/system";

const Sidebar: FC = () => {
  return (
    <SidebarContainer>
      <SidebarItems>
        <Link passHref href={"/dashboard"}>
          <IconContainer>
            <AiOutlineDatabase href="/dashboard" />
          </IconContainer>
        </Link>
        <Link passHref href={"/"}>
          <IconContainer>
            <IoCubeOutline />
          </IconContainer>
        </Link>
        <Link passHref href={"/"}>
          <IconContainer>
            <GiUnbalanced />
          </IconContainer>
        </Link>
        <Link passHref href={"/"}>
          <IconContainer>
            <AiOutlineCloudServer />
          </IconContainer>
        </Link>
        <Link passHref href={"/"}>
          <IconContainer>
            <BsHddNetwork />
          </IconContainer>
        </Link>
        <Link passHref href={"/"}>
          <IconContainer>
            <GiFirewall />
          </IconContainer>
        </Link>
        <Link passHref href={"/"}>
          <IconContainer>
            <CgKey />
          </IconContainer>
        </Link>
      </SidebarItems>
      <Link passHref href={"/"}>
        <IconContainer>
          <BsPin className="pin" />
        </IconContainer>
      </Link>
    </SidebarContainer>
  );
};

const SidebarContainer = styled("div")({
  width: "4.5rem",
  boxShadow: "0 1px 4px 0 rgba(0, 0 ,0, 0.4)",
  height: "80vh",
  backgroundColor: "#fff",
  borderLeft: "2px solid #e6e6e6",
  display: "inline-flex",
  flexDirection: "column",
  paddingBottom: "1rem",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: "28px",
  color: "#333",
  ".pin": {
    fontSize: "1.2rem",
  },
  "@media (min-width: 768px)": {
  },
  "@media (max-width: 768px)": {
    display: "none",
    marginBottom: "1rem",
  },
});

const SidebarItems = styled("div")({ width: "100%" });

const IconContainer = styled("a")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  padding: "1.25rem",
  cursor: "pointer",
  ":active": {
    borderRight: "3px solid #d50c2d",
    backgroundColor: "#ededed",
  },
  ":first-child": {
    borderRight: "3px solid #d50c2d",
    backgroundColor: "#ededed",
  },
  ":hover": {
    backgroundColor: "#ededed",
  },
});

export default Sidebar;
