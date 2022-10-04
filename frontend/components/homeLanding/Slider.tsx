import React, { FC, ReactNode } from "react";
import { Slide } from "react-slideshow-image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "react-slideshow-image/dist/styles.css";

import SliderItem from "components/homeLanding/SliderItem";
import storagebox from "assets/img/storagebox-icon3.png";
import storageshare from "assets/img/storageshare-icon2.png";
import ipv6 from "assets/img/ipv6-icon.png";

const properties = {
  duration: 10000,
  transitionDuration: 500,
  infinite: true,
  autoPlay: false,
  indicators: () : ReactNode =>  (
    <div className="indicator -mt-12 cursor-pointer rounded-full border-2 border-white h-5 w-5 mx-1 z-10"></div>
  ),

  arrows: true,
  pauseOnHover: true,
  prevArrow: (
    <div className="xl:h-1/2 md:h-1/3 hidden md:flex w-12 left-5 bg-lightColor hover:bg-lightColorHover rounded-sm cursor-pointer hover: absolute  items-center justify-center">
      <FaChevronLeft fontSize={32} className="text-white" />
    </div>
  ),
  nextArrow: (
    <div className="xl:h-1/2 md:h-1/3 hidden md:flex w-12 right-5 bg-lightColor hover:bg-lightColorHover rounded-sm cursor-pointer hover: absolute items-center justify-center">
      <FaChevronRight fontSize={32} className="text-white" />
    </div>
  ),
};

const SlideShow: FC = () => {
  const items = [
    {
      slideImage: "https://www.hetzner.com/assets/Uploads/storagebox-big.jpg",
      title1: "داده های موجود را بالا نگه دارید",
      title2: "حافظه ذخیره سازی هتزنر",
      paragraph:
        "سریع ، و ایمن به اسانی میتوانید تحلیل های روزانه را ببنید و انرا بخشی از برانمه روزانه خود بگذارید و بکاپ گرفتن اتوماتیک.",
      button1: "فضای ذخیره سازی",
      button2: "بیشتر بدانید",
      imgIcon: storagebox,
    },
    {
      slideImage: "https://www.hetzner.com/assets/Uploads/storageshare-big.jpg",
      title1: "ساده ، منعطف ، ایمن",
      title2: "در همان صفحه با ذخیره اشتراکی قرار بگیرد",
      paragraph:
        "با دیگران همکاری کنید و همه اسناد، تصاویر و موارد دیگر خود را به اشتراک بگذارید و ایمن کنید - همه در یک مکان.",
      button1: "اشترک ذخیره سازی",
      button2: "بیشتر بدانید",
      imgIcon: storageshare,
    },
    {
      slideImage: "https://www.hetzner.com/assets/Uploads/ipv6-big.jpg",
      title1: "اماده برای اینده",
      title2: "است IPv6 تنها راه",
      title3: "برای سرور های رووت اختصاصی",
      paragraph:
        "میتونید انتخاب کنید کی از IPv4 استفاده کنید و یا در سرور رووت اختصاصی خودتان از IPv6 استفاده کنید",
      button1: "پیدا کردن سرور",
      button2: "بیشتر بدانید",
      imgIcon: ipv6,
    },
    {
      slideImage: "https://www.hetzner.com/assets/Uploads/mac-mini-bg-big.jpg",
      title1: " ARM سیستم قدرتمند بر پایه",
      title2: "هستید؟ MAC MINI اماده اجرای ",
      paragraph:
        "سرور Apple Mac mini M1 ما با 16 گیگابایت رم، 256 گیگابایت SSD و NVMe اختیاری، فرصت‌های جدیدی مانند توسعه با Xcode، Xamarin، ویژوال استودیو و موارد دیگر را بر اساس اجاره ایجاد می‌کند., ",
      button1: "اپل مک مینی",
      button2: "بیشتر بدانید",
    },
  ];
  return (
    <>
      <div className="relative">
        <Slide {...properties}>
          {items.map((item) => (
            <SliderItem
              title1={item.title1}
              title2={item.title2}
              paragraph={item.paragraph}
              slideImage={item.slideImage}
              button1={item.button1}
              button2={item.button2}
              imgIcon={item.imgIcon}
              key={item.title1}
            />
          ))}
        </Slide>
      </div>
    </>
  );
};

export default SlideShow;
