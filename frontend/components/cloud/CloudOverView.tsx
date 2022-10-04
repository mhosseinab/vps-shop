import React, { FC } from "react";

import Image from "next/image";
import awards from "assets/img/svg/awards-cloud.svg";
import data from "assets/img/svg/data-center-hetzner-cloud.png";
import deployment from "assets/img/svg/deployment-hetzner-cloud.svg";
import platform from "assets/img/svg/plattform-hetzner-cloud.svg";

const CloudOverView: FC = () => {
  const overViewItems = [
    {
      title: "کارایی باورنکردنی شروع قیمت از 30,000 تومان",
      paragraph:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،  می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، ",
      img: data,
    },
    {
      title: "اماده برای کار در چند ثانیه",
      paragraph:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،  شصت و سه درصد گذشته حال و آینده، ",
      img: deployment,
    },
    {
      title: "قابلیت استفاده بصری",
      paragraph:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، ",
      img: platform,
    },
    {
      title: "خدمات عالی",
      paragraph:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت آینده، ",
      img: awards,
    },
  ];

  return (
    <section className="py-10" id="overview">
      <div className="xl:container mx-auto">
        <div>
          {overViewItems.map((item, index) => (
            <div className="" key={index}>
              <div
                className={`flex flex-col md:flex-row ${
                  (index + 1) % 2 === 0 && "md:flex-row-reverse"
                } items-center justify-center gap-10 p-4`}
              >
                <div className="w-full flex items-center justify-center md:w-1/2 lg:w-2/5">
                  <Image
                    src={item.img}
                    alt="data center"
                    className="lg:w-505 h-auto"
                  />
                </div>
                <div className="w-full xl:w-1/4 lg:w-2/3 md:w-1/2 ">
                  <h3 className="text-lg font-bold pb-3">{item.title}</h3>
                  <p className="text-sm text-blackColor">{item.paragraph}</p>
                </div>
              </div>
              <div
                className={`${
                  overViewItems.length === index + 1 ? "hidden" : "hr"
                }`}
              ></div>
            </div>
          ))}
          <div className="flex items-center justify-center w-full mt-12 text-center mb-2.5">
            <button className="bg-bgBtn  font-bold py-2.5 px-4 rounded-md hover:bg-yellow-500 transition-all">
              همین لان ثبت نام کنید
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudOverView;
