import React, { FC, useEffect, useState } from "react";

const CloudMenu: FC = () => {
  const menuItems = [
    {
      title: "مشاهده کامل",
      link: "overview",
    },
    { title: "محل سکونت", link: "location" },
    { title: "قیمت ها", link: "price" },
    { title: "امکانات", link: "features" },
    { title: "آی پی", link: "code" },
    { title: "سوالات متداول", link: "qa" },
  ];

  const [scrollPosition, setPosition] = useState(0);

  useEffect(() => {
    let sectionTop = 0;
    let current: string | null | undefined = "";
    const sections = document.querySelectorAll("section");
    const nav = document.querySelectorAll("li");
    sections.forEach((sec) => {
      if (sec?.offsetTop) {
        sectionTop = sec?.offsetTop;
      }
      const sectionHeight = sec?.clientHeight;

      if (scrollPosition >= sectionTop - sectionHeight / 4) {
        current = sec?.getAttribute("id");
        sec.classList.add("section");
      } else {
        sec.classList.remove("section");
      }

      nav.forEach((navItem) => {
        navItem.classList.remove("active");
        if (current) {
          if (navItem.classList.contains(current)) {
            navItem.classList.add("active");
          }
        }
      });
    });
    const updatePosition = (): void => {
      setPosition(window.scrollY);
    };

    window.addEventListener("scroll", updatePosition);
    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, [scrollPosition]);

  return (
    <div
      className={`bg-white w-full flex items-center shadow-custom h-14 ${
        scrollPosition > 200
          ? "fixed left-0 z-40 w-full lg:top-16 top-[60px] "
          : "relative"
      } `}
    >
      <div className="container flex items-center w-full">
        <ul className=" flex items-center justify-between w-full">
          {menuItems.map((item, index) => (
            <li key={index} id="li" className={item.link}>
              <a
                className={`text-blackColor text-xs sm:text-sm lg:text-base  ${item.link}`}
                href={`#${item.link}`}
              >
                {item.title}
              </a>
            </li>
          ))}
          <button className="py-1.5 hidden sm:block px-2.5 bg-redColor text-xs text-white rounded-md font-bold hover:bg-red-800 transition-all ease-in ">
            ساخت اکانت
          </button>
        </ul>
      </div>
    </div>
  );
};

export default CloudMenu;
