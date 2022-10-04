import React, { FC } from "react";

import Activity from "components/dashboard/support/Activity";
import DashboardMenu from "components/dashboard/DashboardMenu";
import { Paper } from "@mui/material";
import SupportSection from "components/dashboard/support/SupportSection";
import { styled } from "@mui/system";

const Support: FC = () => {
  const [dashboardContent, setDashboardContent] = React.useState("پروژه ها");

  const menuItems: string[] = [
    "پروژه ها",
    "حافظه",
    "فعالیت ها",
    "محدودیت ها",
    "پشتیبانی",
    "متصل به",
  ];
  return (
    <SupportContainer>
      <DashboardMenu />
      <div className="menu">
        <ul>
          {menuItems.map((item, index) => (
            <li
              onClick={(): void => setDashboardContent(item)}
              style={{
                color: `${item === dashboardContent ? "#d51f41" : "#8c8c8c"}`,
                borderBottom: `${
                  item === dashboardContent ? "2px solid #d51f41" : "none"
                }`,
              }}
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="content">
        <Paper>{dashboardContent === "فعالیت ها" && <Activity />}</Paper>
        {dashboardContent === "پشتیبانی" && <SupportSection />}
      </div>
    </SupportContainer>
  );
};

const SupportContainer = styled("div")({
  "*": {
    fontFamily: "iranSans",
  },
  backgroundColor: "#f5f5f5",
  width: "100%",
  height: "100vh",
  flex: 10,
  ".menu ul": {
    width: "100%!important",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    gap: "1.5rem",
    padding: "3rem",
    li: {
      textAlign: "right",
      fontSize: "0.8rem",
      cursor: "pointer",
      fontWeight: "bold",
      transition: "all 0.3s ease-in-out",
      padding: "0.5rem 0 ",
    },
  },
  ".content": {
    margin: "0 3rem",
  },
  "@media (max-width: 768px)": {
    ".menu ul": {
      gap: "0.9rem",
      padding: "1rem",
    },
    ".content": {
      margin: "0 0.4rem",
      overflowY: "auto",
    },
  },
});

export default Support;
