import React, { FC } from "react";

import BorderCut from "components/ui/BorderCut";
import BorderCutWhite from "components/ui/BorderCutWhite";
import CloudCode from "components/cloud/CloudCode";
import CloudFeaturesContainer from "components/cloud/CloudFeaturesContainer";
import CloudHeader from "components/cloud/CloudHeader";
import CloudLocation from "components/cloud/CloudLocation";
import CloudMenu from "components/menu/CloudMenu";
import CloudOverView from "components/cloud/CloudOverView";
import CloudPrice from "components/cloud/CloudPrice";
import CloudQa from "components/cloud/CloudQa";
import Footer from "components/footer/Footer";
import Menu from "components/menu/Menu";
import ScrollToTop from "components/homeLanding/ScrollToTop";
import SubMenu from "components/menu/SubMenu";

const Cloud: FC = () => {
  return (
    <div className="font-iran-sans text-right">
      <SubMenu />
      <Menu />
      <div className="bg-bgContainer flex-1 w-full h-full scroll-smooth">
        <CloudHeader />
        <CloudMenu />
        <CloudOverView />
        <BorderCutWhite />
        <CloudLocation />
        <BorderCutWhite />
        <CloudPrice />
        <BorderCut />
        <CloudFeaturesContainer />
        <BorderCut />
        <CloudCode />
        <BorderCut />
        <CloudQa />
        <BorderCut />
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Cloud;
