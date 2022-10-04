import { FC } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaYoutube,
  FaTwitterSquare,
  FaFacebookSquare,
} from "react-icons/fa";

import FooterDropDown from "components/footer/FooterDropDown";

const Footer: FC = () => {
  const items = [
    {
      title: "هتزنر انلاین",
      values: [
        "شرکت",
        "تماس با ما",
        "حرفه",
        "مشتری های ما",
        "اتاق خبر",
        "خبرنامه",
      ],
    },
    {
      title: "محصول",
      values: [
        "سرور اختصاصی",
        "مزایده سرور",
        "موقعیت مکانی",
        "جعبه های ذخیره سازی",
        "فضای ابری",
        "روش های سفارشی",
      ],
    },
    {
      title: "میزبانی وب",
      values: ["میزبانی وب", "ورور های مدیریت شده", "خرید دامنه"],
    },
    {
      title: "پشتیبانی",
      values: [
        "مرکز پشتیبانی",
        "فرم پشتیبانی",
        "وضعیت",
        "مقاله های هتزنر",
        "دانلود ها",
      ],
    },
    {
      title: "قانونی",
      values: [
        "اطلاعات قانونی",
        "حریم خصوصی",
        "سیاست های سیستم",
        "شریط و ضوابط",
      ],
    },
  ];
  return (
    <div className="flex flex-col">
      <div dir="ltr" className="bg-redColor">
        <div className="container flex flex-col lg:flex-row  justify-around items-center py-7 lg:py-0 lg:h-14 lg:pt-2 text-white">
          <div className="flex items-center gap-2 text-xl">
            <FaPhone />
            <a href="tel:+4998315050">+49 9831 505 0</a>
          </div>
          <div className="flex items-center gap-2 text-xl">
            <FaEnvelope />
            <a href="mailto:">support@hetzner.com</a>
          </div>
        </div>
      </div>
      <div className="bg-blackColor pt-16">
        <div className="container">
          <div className="lg:grid lg:grid-cols-6  gap-x-8 text-white">
            {items.map((item) => (
              <FooterDropDown
                key={item.title}
                title={item.title}
                values={item.values}
              />
            ))}
            <div className="flex flex-col  gap-3">
              <h4 className="font-medium uppercase pb hidden lg:block">
                درباره ما
              </h4>
              <a
                href="#"
                className="bg-redColor max-w-fit py-1 p-p10 font-medium rounded-sm my-5 lg:my-0"
              >
                موقعیت شغلی
              </a>
              <div className="flex gap-3 text-3xl">
                <FaFacebookSquare />
                <FaTwitterSquare />
                <FaInstagram />
                <FaYoutube />
              </div>
            </div>
          </div>
        </div>
        <p
          className=" text-center"
          style={{
            color: "#9a9a9a",
            fontSize: "0.7rem",
            padding: "20px 0 40px",
          }}
        >
          هتزنر انلاین تمامی حقوق محفوظ است. قیمت ها شامل 19 درصد مالیات بر ارزش
          افزوده © 2022.
        </p>
      </div>
    </div>
  );
};

export default Footer;
