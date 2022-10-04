import { styled } from "@mui/system";
import { FC, ReactNode } from "react";

import DashboardMenu from "components/dashboard/DashboardMenu";
import Sidebar from "components/dashboard/Sidebar";
import DetailsMenu from "./DetailsMenu";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <DashboardContainer>
      <DashboardMenu />
      <DashboardContent>
        <Sidebar />
        <div className="content">
          <DetailsMenu />
          {children}
        </div>
      </DashboardContent>
    </DashboardContainer>
  );
};
const DashboardContainer = styled("div")({
  fontFamily: "iranSans",
  backgroundColor: "#f5f5f5",
  width: "100%",
  height: "100%",
  flex: 10,
});

const DashboardContent = styled("div")({
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "space-between",
  width: "100%",
  position: "relative",
  ".content": {
    width: "100%",
  },
});

export default Layout;
