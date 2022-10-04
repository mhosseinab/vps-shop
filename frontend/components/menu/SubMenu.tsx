import { FaGlobeAmericas, FaQuestion, FaUser, FaUsers } from "react-icons/fa";

import { FC } from "react";
import Image from "next/image";
import SmallDropDown from "components/menu/SmallDropDown";
import cloud from "assets/img/svg/cloud.svg";
import dns from "assets/img/svg/dns.svg";
import germany from "assets/img/svg/Flag_of_Germany.svg.webp";
import kicon from "assets/img/svg/kicon.svg";
import robot from "assets/img/svg/robot.svg";

const SubMenu: FC = () => {
  return (
    <div className="bg-blackColor w-full h-10 flex justify-around items-center text-xs text-white">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 text-white">
          زبان :{" "}
          <SmallDropDown
            menuName="انگلیسی"
            icon={<FaGlobeAmericas />}
            menuItems={[
              { name: "انگلیسی", link: "english" },
              { name: "المانی", link: "dutch" },
              { name: "روسی", link: "russian" },
            ]}
          />
        </div>
        {/* ------------------------------------------- */}
        <div className="flex items-center gap-1 text-white">
          لوکیشن :
          <SmallDropDown
            menuName="DE 19%"
            icon={<Image width={15} height={12} src={germany} alt="germany" />}
            menuItems={[
              { name: "انگلیسی", link: "english" },
              { name: "المانی", link: "dutch" },
              { name: "روسی", link: "russian" },
            ]}
          />
        </div>
        {/* -------------------------------------------------- */}
      </div>
      <div className="items-center gap-x-3 hidden lg:flex">
        <div className="flex items-center px-2 py-1 gap-1 bg-garyColor rounded-sm">
          <a href="#">جامعه</a>
          <FaUsers />
        </div>
        <SmallDropDown
          menuName="درباره ما"
          menuItems={[
            { name: "شرکت", link: "Compony" },
            { name: "اتاق خبر", link: "Newsroom" },
            { name: "مشتری های ما", link: "Our customers" },
            { name: "سازنده", link: "Career" },
            { name: "قانونی", link: "Legal" },
          ]}
        />
        <div className="flex items-center px-2 py-1 gap-1 bg-garyColor rounded-sm">
          <a href="#">پشتیبانی</a>
          <FaQuestion />
        </div>
        <SmallDropDown
          menuName="ورود"
          icon={<FaUser />}
          menuItems={[
            { name: "ابر", link: "dashboard", itemImg: cloud },
            { name: "ربات", link: "Robot", itemImg: robot },
            { name: "نام کاربری", link: "konsoleH", itemImg: kicon },
            { name: "دی ان اس", link: "DNS", itemImg: dns },
          ]}
        />
      </div>
    </div>
  );
};

export default SubMenu;
