import React, { FC, useState } from "react";

import Flag from "react-world-flags";
import Image from "next/image";
import finlandMap from "assets/img/svg/map-hel3.svg";
import germanyMap from "assets/img/svg/map-germany.svg";
import usaMap from "assets/img/svg/map-usa.svg";

const CloudLocation: FC = () => {
  const [location, setLocation] = useState("germany");
  return (
    <section className="bg-[#f5f5f5] min-h-[380px]" id="location">
      <div className="container flex flex-col lg:flex-row pb-10 pt-p60">
        <div className="w-full flex flex-col items-center  lg:w-7/12 xl:w-6/12 md:border-l px-[15px]">
          <h2 className="text-center text-[2rem] mb-[0.75em] font-bold text-darkText">
            محل سرور ها
          </h2>
          <div className="flex flex-wrap items-center w-full">
            <div
              className={`flex items-center relative mr-[6px] mb-5 px-2 border-blackColor rounded-[4px] border-2 form-check ${
                location === "germany" && "bg-blackColor text-white"
              }`}
            >
              <input
                checked={location === "germany"}
                onClick={(): void => setLocation("germany")}
                type="radio"
                name="germany"
                id="germany"
                onChange={(): void => setLocation("germany")}
                className="form-check-input appearance-none rounded-full h-5 w-5 border-2 border-blackColor bg-white checked:bg-red-700 checked:border-[#f5f5f5] checked:border-4 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              />
              <label
                className="py-2.5 pr-12 pl-[14px] cursor-pointer text-[0.8em]"
                htmlFor="germany"
              >
                آلمان
              </label>
              <Flag
                code="de"
                width={20}
                height={15}
                title="United States"
                className="hidden md:block"
              />
            </div>
            <div
              className={`flex items-center relative mr-[6px] mb-5 px-2 border-blackColor rounded-[4px] border-2 form-check ${
                location === "finland" && "bg-blackColor text-white"
              }`}
            >
              <input
                checked={location === "finland"}
                onClick={(): void => setLocation("finland")}
                type="radio"
                id="finland"
                onChange={(): void => setLocation("finland")}
                className="form-check-input appearance-none rounded-full h-5 w-5 border-2 border-blackColor bg-white checked:bg-red-700 checked:border-[#f5f5f5] checked:border-4 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              />
              <label
                className="py-2.5 pr-12 pl-[14px] cursor-pointer text-[0.8em]"
                htmlFor="finland"
              >
                فنلاند
              </label>
              <Flag
                code="fi"
                width={20}
                height={15}
                title="United States"
                className="hidden md:block"
              />
            </div>
            <div
              className={`flex items-center relative mr-[6px] mb-5 px-2 border-blackColor rounded-[4px] border-2 form-check ${
                location === "usa" && "bg-blackColor text-white"
              }`}
            >
              <input
                checked={location === "usa"}
                onClick={(): void => setLocation("usa")}
                onChange={(): void => setLocation("usa")}
                type="radio"
                id="usa"
                className="form-check-input appearance-none rounded-full h-5 w-5 border-2 border-blackColor bg-white checked:bg-red-700 checked:border-[#f5f5f5] checked:border-4 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              />
              <label
                className="py-2.5 pr-12 pl-[14px] cursor-pointer text-[0.8em]"
                htmlFor="usa"
              >
                آمریکا
              </label>
              <Flag
                code="us"
                width={20}
                height={15}
                title="United States"
                className="hidden md:block"
              />
            </div>
          </div>
          <p className="text-sm leading-7 text-blackColor">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
            استفاده قرار گیرد.
          </p>
        </div>
        <div className="w-full flex items-center justify-center lg:w-5/12 xl:w-6/12 mt-4 px-[15px]">
          <Image
            src={
              (location === "germany" && germanyMap) ||
              (location === "usa" && usaMap) ||
              (location === "finland" && finlandMap)
            }
            alt="usa"
          />
        </div>
      </div>
    </section>
  );
};

export default CloudLocation;
