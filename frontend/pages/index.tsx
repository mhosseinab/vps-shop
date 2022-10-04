import Awards from "components/homeLanding/Awards";
import BorderCut from "components/ui/BorderCut";
import DomainSection from "components/homeLanding/DomainSection";
import Footer from "components/footer/Footer";
import MainImage1 from "components/homeLanding/MainImage1";
import Menu from "components/menu/Menu";
import News from "components/homeLanding/News";
import type { NextPage } from "next";
import ProductsContainer from "components/homeLanding/ProductsContainer";
import ScrollToTop from "components/homeLanding/ScrollToTop";
import SlideShow from "components/homeLanding/Slider";
import SubMenu from "components/menu/SubMenu";

const Home: NextPage = () => {
  return (
    <div className="font-iran-sans text-right">
      <SubMenu />
      <Menu />
      <SlideShow />
      <div className="bg-bgContainer">
        <ProductsContainer />
        <BorderCut />
        <MainImage1 />
        <BorderCut />
        <News />
        <BorderCut />
        <DomainSection />
        <BorderCut />
        <Awards />
        <BorderCut />
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Home;
