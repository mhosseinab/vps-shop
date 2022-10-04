import { FC, useEffect, useState } from "react";

import { FaTimes } from "react-icons/fa";
import Image from "next/image";
import { IoIosMenu } from "react-icons/io";
import MobileMenu from "components/menu/MobileMenu";
import WideMenuDropDown from "components/menu/WideMenuDropDown";
import logo from "assets/img/svg/hetzner-logo.svg";
import server from "assets/img/svg/icon-circle-serverfinder.svg";
import { useRouter } from "next/router";

const Menu: FC = () => {
  const [scrollPosition, setPosition] = useState(0);
  const [showMenu, setShowMenu] = useState("");
  const [mobileToggle, setMobileToggle] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const updatePosition = (): void => {
      setPosition(window.scrollY);
    };

    window.addEventListener("scroll", updatePosition);
    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  const menu1 = [
    {
      img: server,
      subtitle: "پیدا کردن سرور",
      price: 40000,
    },
  ];

  return (
    <div
      className={` bg-white h-14  px-5 lg:h-fit shadow-custom ${
        scrollPosition > 100 && " fixed top-0 left-0 z-50 w-full"
      }`}
      style={{ minHeight: "60px" }}
    >
      <div className="flex justify-between items-center container">
        <div
          className="block lg:hidden text-gray-600 border-2 rounded-md cursor-pointer"
          onClick={(): void => setMobileToggle(true)}
          style={{ padding: "5px 11px", margin: "8px 0" }}
        >
          <IoIosMenu fontSize={30} />
        </div>
        {mobileToggle && (
          <div
            className={`w-3/4 fixed bg-darkText text-white  z-50 top-0 h-full flex flex-col transition-transform ease-in duration-1000 ${
              mobileToggle ? "right-0" : "-right-full"
            }`}
          >
            <button
              className="bg-lightColor p-p10 flex items-center justify-center gap-x-1"
              onClick={(): void => setMobileToggle(false)}
            >
              <FaTimes fontSize={14} className="font-medium" />
              بستن
            </button>
            <MobileMenu />
          </div>
        )}
        <div
          onClick={(): void => setMobileToggle(false)}
          className={`fixed bg-transparent inset-0 h-full w-full z-10 
          ${mobileToggle ? "block" : "hidden"}
          `}
        ></div>
        <ul className="hidden lg:flex items-center ">
          <WideMenuDropDown
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            title="اختصاصی"
            paragraph="فعال سازی سرور مد نظرشما در چند ثانیه"
            menu={menu1}
            link="1"
          />
          <WideMenuDropDown title="ابر" link="cloud" />
          <WideMenuDropDown
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            title="وب و مدیریت"
            paragraph="فعال سازی سرور مد نظرشما در چند ثانیه"
            menu={menu1}
            link="web"
          />
          <WideMenuDropDown title="کلکسیون" link="collection" />
          <WideMenuDropDown
            title="ذخیره‌سازی"
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            paragraph="فعال سازی سرور مد نظرشما در چند ثانیه"
            menu={menu1}
            link="save"
          />
          <WideMenuDropDown
            title="سرویس ها"
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            paragraph="فعال سازی سرور مد نظرشما در چند ثانیه"
            menu={menu1}
            link="services"
          />
        </ul>
        <Image
          src={logo}
          alt="logo"
          onClick={(): Promise<boolean> => router.push("/")}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Menu;
