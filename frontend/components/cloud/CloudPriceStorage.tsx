import "react-input-range/lib/css/index.css";

import React, { FC, useState } from "react";

import Image from "next/image";
import InputRange from "react-input-range";
import diskImg from "assets/img/svg/disk.svg";
import imgWrapper from "assets/img/svg/‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍imgWrapper.svg";

const CloudPriceStorage: FC = () => {
  const [range, setRange] = useState<number | Range>(30);
  const commafy = (num: number): string => {
    const str = num.toString().split(".");
    if (str[0].length >= 4) {
      str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
    }
    if (str[1] && str[1].length >= 4) {
      str[1] = str[1].replace(/(\d{3})/g, "$1 ");
    }
    return str.join(".");
  };
  return (
    <div className="flex flex-col items-center justify-center w-full container pt-16">
      <h2 className="text-center text-white text-3xl font-bold mb-[.75em]">
        بلاک انتخاب مقدار
      </h2>
      <p className="text-center text-white text-sm font-light">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و{" "}
      </p>
      <div className="w-full sm:w-5/6 lg:w-1/2 bg-white mt-5 p-5">
        <h3 className="text-lg text-center text-blackColor mb-[0.83em]">
          اندازه
        </h3>
        <p className="text-center text-blackColor text-sm">
          فضای ابری خودرا افزایش دهید با استفاده از ولوم پایین که هر بار 40،000
          تومان در ماه قیمت را افزایش میدهد
        </p>
        <div dir="ltr" className={`relative text-center my-2.5`}>
          <Image
            src={imgWrapper}
            alt="img"
            width={130}
            height={130}
            className=""
          />
          <div
            className="absolute left-[50%] top-[50%] text-center "
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <Image
              src={diskImg}
              alt="img"
              width={1.3 * +range }
              height={1.3 * +range}
            />
          </div>
        </div>
        <div
          dir="ltr"
          className="flex w-11/12 items-center justify-center mx-auto"
        >
          <div className="w-full">
            <InputRange
              step={5}
              minValue={10}
              maxValue={100}
              value={+range}
              formatLabel={(value): string => `${value} GB`}
              onChange={(e): void => setRange(+e)}
            />
          </div>
        </div>
      </div>
      <div className="bg-[#383838] py-2.5 px-5 text-center  w-full sm:w-5/6 lg:w-1/2">
        <span className="text-[#fdc400] text-2xl font-bold ">
          {commafy(40000 * +range)}
          <small className="block text-xs mb-2.5">هر ماه</small>
        </span>
        <span className="text-[0.7rem] text-white">
          صورت حساب به صورت ساعتی
        </span>
      </div>
    </div>
  );
};

export default CloudPriceStorage;
