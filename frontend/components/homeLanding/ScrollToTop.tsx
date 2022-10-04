import React, { FC, useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop: FC = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  const [scrollBottom, setScrollBottom] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll: () => void = () => {
      setScrollY(window.scrollY);
      scrollY;
      if (
        window.innerHeight + window.scrollY + 2300 >=
        document.body.offsetHeight
      ) {
        setScrollBottom(true);
      } else {
        setScrollBottom(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      onClick={scrollToTop}
      className={`text-xl fixed bg-black text-white z-50 cursor-pointer rounded-md outline-none  transition-opacity ease-in duration-300 ${
        scrollBottom ? "opacity-100" : "opacity-0"
      }`}
      style={{ padding: "15px 20px", right: "25px", bottom: "25px" }}
    >
      <FaArrowUp />
    </div>
  );
};

export default ScrollToTop;
