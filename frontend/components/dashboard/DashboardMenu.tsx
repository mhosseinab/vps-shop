import { IoNotificationsOutline, IoPersonOutline } from "react-icons/io5";
import React, { FC } from "react";

import { BsGrid3X3Gap } from "react-icons/bs";
import { CgFormatSlash } from "react-icons/cg";
import { GoChevronDown } from "react-icons/go";
import Image from "next/image";
import { IoIosMenu } from "react-icons/io";
// icons
import { RiSearchLine } from "react-icons/ri";
import logo from "assets/img/svg/hetzner-logo.svg";
import { styled } from "@mui/system";
import { useRouter } from "next/router";

const DashboardMenu: FC = () => {
  const router = useRouter();

  return (
    <MenuContainer>
      <MenuContent>
        <IoIosMenu fontSize={20} />
        <MenuContentLeftSide>
          <Image
            src={logo}
            alt="logo"
            onClick={(): Promise<boolean> => router.push("/")}
            className="click"
          />
          <span> میز فرمان ابری </span>
          <MenuIconContainer>
            <span>Site</span>
            <GoChevronDown />
          </MenuIconContainer>
        </MenuContentLeftSide>

        <MenuContentMiddle>
          <RiSearchLine fontWeight={600} />
          <input type="text" placeholder="جستوجو" />
          <SlashIcon />
        </MenuContentMiddle>

        <MenuContentRightSide>
          <MenuIconContainer>
            <span>
              <IoNotificationsOutline />
              <GoChevronDown />
            </span>
          </MenuIconContainer>
          <MenuIconContainer>
            <BsGrid3X3Gap    onClick={(): Promise<boolean> => router.push("/dashboard/support")}     className="click" />
            <GoChevronDown />
          </MenuIconContainer>
          <MenuIconContainer>
            <IoPersonOutline />
            <GoChevronDown />
          </MenuIconContainer>
        </MenuContentRightSide>
      </MenuContent>
    </MenuContainer>
  );
};
const MenuContainer = styled("div")({
  background: "#fff",
  height: "4.3rem",
  borderBottom: "3px solid #e6e6e6",
  display: "fixed",
  width: "100%",
  padding: "0 20px",
  zIndex: 100,
  ".click": {
    cursor: "pointer",
  },
});

const MenuContent = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  "> svg ": {
    display: "none",
  },
  "@media (max-width: 768px)": {
    "> svg ": {
      display: "block",
    },
  },
});
const MenuContentRightSide = styled("div")({
  display: "flex",
  alignItems: "center",
  fontSize: "24px",
  gap: "20px",
  " span": {
    display: "flex",
    padding: "4px 16px 4px 20px",
    marginRight: "14px",
    borderRight: "1px solid #f0f0f0",
  },
  "@media (max-width: 1098px)": {
    fontSize: "17px",
  },
});
const MenuContentMiddle = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  backgroundColor: "#f4f4f4",
  padding: "6px 12px",
  color: "#c2c2c2",
  fontWeight: "900",
  fontSize: "18px",
  borderRadius: "6px",
  input: {
    backgroundColor: "transparent",
    fontSize: "14px",
    paddingRight: "4px",
    height: "full",
    border: "none",
    outline: "none",
    color: "#383838",
  },
  "@media (max-width: 1098px)": {
    display: "none",
  },
});
const SlashIcon = styled(CgFormatSlash)({
  border: "2px solid #c2c2c2",
  borderRadius: "6px",
  fontSize: "24px",
});
const MenuContentLeftSide = styled("div")({
  display: "flex",
  alignItems: "center",
  fontSize: "18px",
  gap: "4px",
  fontWeight: "500",
  " > span": {
    padding: "4px 16px 4px 20px",
    marginRight: "14px",
    borderRight: "1px solid #f0f0f0",
  },
  "@media (max-width: 768px)": {
    display: "none",
    "> div": {
      display: "block",
    },
  },
});
const MenuIconContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "4px",
});
export default DashboardMenu;
