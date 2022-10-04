import React, { FC } from "react";
import Image from "next/image";

import headerLogo from "assets/img/icon-hero-usa-small.png";

const CloudHeader: FC = () => {
  return (
    <div
      className="w-full h-413"
      style={{
        backgroundImage: `url(https://www.hetzner.com/assets/Uploads/hetzner-goes-usa-bg-big2.jpg) `,
        transform: "rotate(180deg)",
        backgroundSize: "cover",
        backgroundPosition: "50%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container w-full h-full flex items-center justify-between rotate-180">
        <div className="w-1/2 text-white">
          <ul className="mb-2.5 text-2xl">
            <li>
              <h1>هتزنر ابری</h1>
            </li>
            <li className="font-bold">با مبلغ کمی سرویس ابری بگیرید</li>
            <li>سرویس ابری از 30000 تومان شروع میشود</li>
          </ul>
          <p className="mb-5">
            هتزنر در حال گسترش به ایالات متحده آمریکا است و حالا سرور های ابری
            را با پردازنده AMD در آشبورن ، ویرجینای آمریکا ارائه می دهد
          </p>
          <ul className="flex flex-col md:flex-row w-full justify-start gap-1">
            <li
              className="bg-bgBtn text-blackColor font-medium uppercase text-sm rounded-md text-center"
              style={{ padding: "6px 12px" }}
            >
              بیشتر بدانید
            </li>
          </ul>
        </div>
        <Image src={headerLogo} alt="usa logo header" />
      </div>
    </div>
  );
};

export default CloudHeader;
