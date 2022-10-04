import React, { FC, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { RiArrowDownSFill } from "react-icons/ri";

interface Props {
  menuName: string;
  menuItems?: {
    link: string;
    name: string;
    itemImg?: { height: number; src: string; width: number };
  }[];
  icon?: React.ReactNode;
}
const SmallDropDown: FC<Props> = ({ menuName, menuItems, icon }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={(): void => setShowMenu(!showMenu)}
        className="relative flex items-center gap-1 z-10 rounded-sm bg-garyColor text-white px-2 py-1 cursor-pointer  focus:outline-none"
      >
        {icon}
        <span> {menuName}</span>
        <RiArrowDownSFill fontSize={16} />
      </button>

      <div
        onClick={(): void => setShowMenu(false)}
        className={`fixed inset-0 h-full w-full z-10 
          ${showMenu ? "block" : "hidden"}
          `}
      ></div>

      <div
        className={`absolute right-0 mt-2 py-2 w-36 bg-white rounded-sm shadow-xl z-20 ${
          showMenu ? "block" : "hidden"
        }`}
      >
        {menuItems?.map((item) => (
          <Link href={`/${item.link}`} key={item.name}>
            <a className="flex gap-2 px-4 py-2 text-sm capitalize text-gray-700 border-b last:border-0 hover:bg-slate-100 cursor-pointer">
              {item.itemImg && <Image src={item.itemImg} alt={item.name} />}
              {item.name}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SmallDropDown;
