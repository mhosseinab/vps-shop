import React, { FC, useState } from "react";

import CloudPriceItem from "./CloudPriceItem";
import CloudPriceStorage from "./CloudPriceStorage";

const CloudPrice: FC = () => {
  const [serverType, setServerType] = useState("default");
  return (
    <section
    id="price"
      className=" bg-no-repeat bg-cover pt-[70px] pb-[81px] bg-redColor"
      style={{
        backgroundImage:
          "url('https://www.hetzner.com/themes/hetzner/images/cloud-volumes/background-cloud-price.png')",
        backgroundPosition: "50%",
      }}
    >
      <div className="text-white p-5">
        <h2 className="text-center text-lg lg:text-2xl font-bold mb-[0.75em] ">
          سرویس ابری با کیفیت بالا - قیمت های بی نظیر
        </h2>
        <p className="text-sm text-center">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که
          <br />
          <br />
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و
        </p>
      </div>
      <div className="container flex w-full justify-between p-5">
        <div className="flex  w-full lg:w-1/2 xl:w-1/3">
          <div
            className={`flex items-center relative mr-[6px] mb-5 px-2 border-white rounded-[4px] border-2 form-check ${
              serverType === "default"
                ? "text-blackColor bg-white"
                : "border-white bg-redColor text-white "
            }`}
          >
            <input
              checked={serverType === "default"}
              onClick={(): void => setServerType("default")}
              type="radio"
              name="default"
              id="default"
              onChange={(): void => setServerType("default")}
              className="form-check-input appearance-none rounded-full h-5 w-5 border-2  border-[#f5f5f5] bg-white checked:bg-red-700 checked:border-[#d1d3d1] checked:border-4 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            />
            <label
              className="py-2.5 pr-[14px] cursor-pointer text-[0.8em]"
              htmlFor="default"
            >
              پیش فرض
            </label>
          </div>
          <div
            className={`flex items-center relative mr-[6px] mb-5 px-2 rounded-[4px] border-2 form-check ${
              serverType === "vcpu"
                ? "text-blackColor bg-white"
                : "border-white bg-redColor text-white "
            }`}
          >
            <input
              checked={serverType === "vcpu"}
              onClick={(): void => setServerType("vcpu")}
              type="radio"
              name="vcpu"
              id="vcpu"
              onChange={(): void => setServerType("vcpu")}
              className="form-check-input appearance-none rounded-full h-5 w-5 border-2 border-[#f5f5f5] bg-white checked:bg-red-700 checked:border-[#d1d3d1] checked:border-4 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            />
            <label
              className="py-2.5 pr-[14px] cursor-pointer text-[0.8em]"
              htmlFor="vcpu"
            >
              سرور های اختصاصی
            </label>
          </div>
        </div>
        <div className=" hidden lg:flex lg:w-1/2 xl:w-2/3 border-r-2 border-r-white pr-5 text-sm text-white leading-7">
          {serverType === "vcpu" ? (
            <p>
              سرور های اختصاصی دیوانه کننده هستند :‌بالاترین کارایی برای شما ،
              این سی پی یو ها مناسب کار های سنگین میباشند و یادگیری ماشین و
              محاسبات.
            </p>
          ) : (
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و <br /> لورم ایپسوم متن
              ساختگی با تولید سادگی نامفهوم از صنعت{" "}
            </p>
          )}
        </div>
      </div>
      <CloudPriceItem />
      <CloudPriceStorage />
      <div className="flex items-center justify-center w-full mt-12 text-center mb-2.5">
        <button className="bg-bgBtn mr-3  font-bold py-2.5 px-4 rounded-md hover:bg-yellow-500 transition-all">
          شروع کنید
        </button>
      </div>
    </section>
  );
};

export default CloudPrice;
