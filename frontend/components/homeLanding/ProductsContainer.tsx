import { FC } from "react";

import ProductItem from "./ProductItem";

import cloud from "assets/img/svg/icon-circle-cloud.svg";
import server from "assets/img/svg/icon-circle-serverboerse2.svg";
import rootServer from "assets/img/svg/dedicated-rootserver.svg";
import BorderCut from "components/ui/BorderCut";

const ProductsContainer: FC = () => {
  const products: {
    img: StaticImageData;
    title: string;
    paragraph: string;
    price: string;
  }[] = [
    {
      img: cloud,
      title: "مزایده",
      paragraph:
        "قیمت ها کاهش می یابد و هیجان بالا می رود. پیشنهادات را در مزایده سرور ما قرار دهید!",
      price: "120000",
    },
    {
      img: server,
      title: "فضای ابری",
      paragraph:
        "با پول کم، فضای ابری زیادی در اختیار شما قرار می گیرد. سرورهای ابری انعطاف پذیر با سخت افزار پیشرفته.",
      price: "200000",
    },
    {
      img: rootServer,
      title: "سرور های اختصاصی",
      paragraph:
        "سرورهای روت اختصاصی برای رفع هر نیاز. عملکرد عالی با اتصال عالی.",
      price: "1000000",
    },
    {
      img: rootServer,
      title: "میزبانی وب",
      paragraph:
        "راهی سریع و ارزان برای رسیدن به صفحه اصلی خودتان. قیمت برای مبتدیان و مشاغل.",
      price: "800000",
    },
  ];
  return (
    <div className="container ">
      <BorderCut />
      <div
        className="mx-auto"
        style={{ paddingTop: "60px", paddingBottom: "60px" }}
      >
        <h1
          className="text-4xl text-darkText uppercase text-center font-medium"
          style={{ marginBottom: "0.57em" }}
        >
          محصولات
        </h1>
        <div className="w-full grid grid-cols-1 px-4 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-x-8 bg-transparent">
          {products.map((pro) => (
            <ProductItem
              key={pro.title}
              img={pro.img}
              title={pro.title}
              price={pro.price}
              paragraph={pro.paragraph}
            />
          ))}
        </div>
      </div>
      <div className="text-center font-light text-blackColor pb-10">
        به کمک نیاز دارید؟{" "}
        <a className="underline font-medium" href="#">
          کلیک کنید
        </a>
      </div>
    </div>
  );
};

export default ProductsContainer;
