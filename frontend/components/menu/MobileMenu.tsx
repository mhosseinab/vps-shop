import Image from "next/image";
import React, { FC, useState } from "react";
import { FaChevronLeft, FaChevronDown } from "react-icons/fa";

import server from "assets/img/svg/icon-circle-serverfinder.svg";

const MobileMenu: FC = () => {
  const [show, setShow] = useState("");

  const showMenuHandler = (value: string): void => {
    if (value === show) {
      setShow("");
    } else {
      setShow(value);
    }
  };

  const menu: {
    title: string;
    item?: { head: string; price: number }[];
  }[] = [
    {
      title: "اختصاصی",
      item: [
        { head: "اپل", price: 30000 },
        { head: "امازون", price: 45000 },
      ],
    },
    {
      title: "ابر",
    },
    { title: "وب و مدیریت", item: [{ head: "میزبانی وب", price: 40000 }] },
    { title: "محل سکونت" },
    {
      title: "ذخیره سازی",
      item: [{ head: "ذخیره سازی اشتراکی", price: 28000 }],
    },
    { title: "خدمات", item: [{ head: "ثبت دامنه", price: 20000 }] },
  ];
  return (
    <div className="flex flex-col text-right border-b-lightColor border-b-2 p-p10">
      <div className="">
        <a
          href="#"
          className="flex items-center justify-between p-p10 border-b-lightColor border-b-2"
        >
          <div className="flex ">
            <Image src={server} alt={server} width={40} height={40} />
            <span className="flex flex-col  mr-3 text-sm font-extralight">
              پیدا کردن سرور
              <small className="text-bgBtn">شروع از 70،000</small>
            </span>
          </div>
          <FaChevronLeft />
        </a>
        <a
          href="#"
          className="flex items-center justify-between p-p10 border-b-lightColor border-b-2"
        >
          <div className="flex ">
            <Image src={server} alt={server} width={40} height={40} />
            <span className="flex flex-col  mr-3 text-sm font-extralight">
              مزایده سرور
              <small className="text-bgBtn">شروع از 40،000</small>
            </span>
          </div>
          <FaChevronLeft />
        </a>
      </div>
      {menu.map((item) => (
        <div className="py-p10  flex flex-col " key={item.title}>
          <div
            className="flex items-center gap-x-2"
            onClick={(): void => showMenuHandler(item.title)}
          >
            <h4 className="text-base font-medium ">{item.title}</h4>
            {item.item ? (
              show === item.title ? (
                <FaChevronDown fontSize={12} />
              ) : (
                <FaChevronLeft fontSize={12} />
              )
            ) : (
              ""
            )}
          </div>
          {show === item.title && (
            <ul>
              {item.item?.map((item) => (
                <div
                  key={item.head}
                  className="flex justify-between items-center py-p10"
                >
                  <a className="text-sm opacity-90" href="#">
                    {item.head}
                  </a>
                  <small className="text-xs font-thin text-bgBtn">
                    شروع از {item.price}
                  </small>
                </div>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default MobileMenu;
