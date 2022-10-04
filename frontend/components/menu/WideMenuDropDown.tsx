import { FC } from "react";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  link: string;
  paragraph?: string;
  showMenu?: string;
  setShowMenu?: ((event: string) => void | undefined) | undefined;
  menu?: {
    img: StaticImageData;
    subtitle: string;
    price: number;
  }[];
}

const WideMenuDropDown: FC<Props> = ({
  title,
  menu,
  paragraph,
  showMenu,
  setShowMenu,
  link,
}) => {
  const showMenuHandler = (): void => {
    if (menu) {
      if (showMenu === title) {
        setShowMenu && setShowMenu("");
      } else {
        setShowMenu && setShowMenu(title);
      }
    } else {
      return;
    }
  };
  return (
    <div dir="container">
      {!menu ? (
        <Link passHref href={`/${link}`}>
          <li
            onClick={showMenuHandler}
            className={`${
              showMenu === title && "text-redColor border-b-2 border-b-redColor"
            } transition-all ease-in-out duration-500 font-bold cursor-pointer text-base  text-blackColor hover:bg-gray-100 px-3 leading-extra-loose flex items-center`}
          >
            {title}
            {menu && (
              <FaChevronDown
                className={`text-xs pr-1 ${
                  showMenu === title && "text-redColor"
                }`}
              />
            )}
          </li>
        </Link>
      ) : (
        <li
          onClick={showMenuHandler}
          className={`${
            showMenu === title && "text-redColor border-b-2 border-b-redColor"
          } transition-all ease-in-out duration-500 font-bold cursor-pointer text-base  text-blackColor hover:bg-gray-100 px-3 leading-extra-loose flex items-center`}
        >
          {title}
          {menu && (
            <FaChevronDown
              className={`text-xs pr-1 ${
                showMenu === title && "text-redColor"
              }`}
            />
          )}
        </li>
      )}
      <div
        onClick={showMenuHandler}
        className={`fixed bg-transparent inset-0 h-full w-full z-10 
          ${showMenu === title ? "block" : "hidden"}
          `}
      ></div>
      {showMenu === title && (
        <div className="absolute left-0 z-50 w-full bg-darkText text-white transition-all ease-in-out duration-500">
          <div className="container flex justify-start items-center">
            <div className="w-3/12 px-4 py-p20 ">
              <h3 className="text-lg uppercase font-medium">
                {menu && menu[0].subtitle}
              </h3>
              <span className="py-p10 text-xs text-bgBtn">
                from € {menu && menu[0].price}{" "}
              </span>
              <p className="text-xs py-p10">{paragraph}</p>
            </div>
            <ul className="w-9/12 border-r-2 border-r-lightColor flex items-center justify-start">
              {menu?.map((item) => (
                <li
                  key={item.subtitle}
                  className="py-p20 flex flex-col items-end px-p10"
                >
                  <div className="flex flex-col items-center">
                    <Image
                      width={70}
                      height={70}
                      src={item.img}
                      alt={item.subtitle}
                    />
                    <div
                      className="pt-p10 uppercase font-medium text-center"
                      style={{ fontSize: "0.6rem" }}
                    >
                      <h6>{item.subtitle}</h6>
                      <span className="text-bgBtn lowercase pt-1">
                        from € {item.price}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default WideMenuDropDown;
