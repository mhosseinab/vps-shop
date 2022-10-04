import React, { FC, useState } from "react";

import { styled } from "@mui/system";

import Layout from "components/dashboard/Layout";
import OverView from "components/dashboard/OverView";
import Backup from "components/dashboard/Backup";
import Firewalls from "components/dashboard/Firewalls";
import Power from "components/dashboard/Power";
import Rescue from "components/dashboard/Rescue";
import Delate from "components/dashboard/Delate";
import Rebuild from "components/dashboard/Rebuild";
import Rescale from "components/dashboard/Rescale";
import Graphs from "components/dashboard/Graphs";
import IsoImage from "components/dashboard/IsoImage";

const Dashboard: FC = () => {
  const [dashboardContent, setDashboardContent] = useState<string>("داشبورد");
  const menuItems = [
    "داشبورد",
    "نمودار ها",
    "بکاپ گیری ",
    "تصویر لحظها",
    "تعادل ارسال",
    "شبکه",
    "فایروالس",
    "اندازه ها",
    "قدرت",
    "نجات",
    "تصویر iso",
    "مقیاس مجدد",
    "بازسازی",
    "حذف",
  ];
  return (
    <Layout>
      <DashboardContainer>
        <div className="rightSide">
          <ul>
            {menuItems.map((item) => (
              <li
                onClick={(): void => setDashboardContent(item)}
                style={{
                  color: `${item === dashboardContent ? "#d51f41" : "#8c8c8c"}`,
                }}
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="leftSide">
          {dashboardContent === "داشبورد" && <OverView />}
          {dashboardContent === "نمودار ها" && <Graphs />}
          {dashboardContent === "بکاپ گیری " && <Backup />}
          {dashboardContent === "فایروالس" && <Firewalls />}
          {dashboardContent === "قدرت" && <Power />}
          {dashboardContent === "نجات" && <Rescue />}
          {dashboardContent === "حذف" && <Delate />}
          {dashboardContent === "بازسازی" && <Rebuild />}
          {dashboardContent === "مقیاس مجدد" && <Rescale />}
          {dashboardContent === "تصویر iso" && <IsoImage />}
        </div>
      </DashboardContainer>
    </Layout>
  );
};

const DashboardContainer = styled("div")({
  display: "flex",
  width: "100%",
  padding: "1.2rem",
  "@media (max-width: 768px)": {
    flexDirection: "column",
    ".leftSide": {
      width: "100%!important",
      marginTop: "2.5rem",
    },
    ".rightSide ul": {
      width: "100%!important",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "flex-start",
      li: {
        fontSize: "0.5rem",
      },
    },
  },
  "@media (min-width: 768px)": {
    flexDirection: "row",
    ".leftSide": {
      width: "100%!important",
      height: "100%",
    },
    ".rightSide": {
      width: "15%!important",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },

  ul: {
    display: "flex",
    flexDirection: "column",

    gap: "1rem",

    li: {
      textAlign: "right",
      fontSize: "0.8rem",
      cursor: "pointer",
      fontWeight: "bold",
      transition: "all 0.3s ease-in-out",
    },
  },
});

export default Dashboard;
