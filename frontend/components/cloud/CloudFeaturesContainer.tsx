import CloudFeatureItem from "./CloudFeatureItem";
import { FC } from "react";
import cloud from "assets/img/svg/icon-circle-cloud.svg";
import rootServer from "assets/img/svg/dedicated-rootserver.svg";
import server from "assets/img/svg/icon-circle-serverboerse2.svg";

const CloudFeaturesContainer: FC = () => {
  const products: {
    img: StaticImageData;
    title: string;
    paragraph: string;
  }[] = [
    {
      img: cloud,
      title: "مزایده",
      paragraph:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، ",
    },
    {
      img: server,
      title: "فضای ابری",
      paragraph:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، ",
    },
    {
      img: rootServer,
      title: "سرور های اختصاصی",
      paragraph:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، ",
    },
    {
      img: rootServer,
      title: "میزبانی وب",
      paragraph:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، ",
    },
  ];
  return (
    <section className="container py-10" id="features">
      <div className="mx-auto" style={{ paddingBottom: "60px" }}>
        <h1
          className="text-4xl text-darkText font-bold uppercase text-center"
          style={{ marginBottom: "0.57em" }}
        >
          امکانات
        </h1>
        <div className="w-full grid grid-cols-1 px-4 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-x-8 bg-transparent">
          {products.map((pro) => (
            <CloudFeatureItem
              key={pro.title}
              img={pro.img}
              title={pro.title}
              paragraph={pro.paragraph}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center w-full mt-12 text-center mb-2.5">
        <button className="bg-bgBtn  font-bold py-2.5 px-4 rounded-md hover:bg-yellow-500 transition-all">
          همین الان وارد شوید
        </button>
      </div>
    </section>
  );
};

export default CloudFeaturesContainer;
