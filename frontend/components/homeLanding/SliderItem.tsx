import Image from "next/image";

interface Props {
  slideImage: string;
  title1: string;
  title2: string;
  title3?: string;
  paragraph: string;
  button1: string;
  button2: string;
  imgIcon?: StaticImageData | undefined;
}

const SliderItem: React.FC<Props> = ({
  slideImage,
  title1,
  title2,
  title3,
  paragraph,
  button1,
  button2,
  imgIcon,
}) => {
  return (
    <div className="each-slide relative">
      <div
        className="bg-cover  xl:h-711 lg:353 h-96 py-32  flex items-center justify-center"
        style={{ backgroundImage: `url(${slideImage})` }}
      >
        <div
          className={`flex items-center justify-center sm:px-24 px-4 w-full h-96`}
        >
          {imgIcon && (
            <div className="xl:w-505 xl:h-370 lg:w-260 lg:h-191 hidden lg:block">
              <Image
                // className="w-full h-full"
                src={imgIcon}
                alt={title1}
              />
            </div>
          )}
          <div className="w-full text-right xl:w-505 xl:h-370 lg:w-1/2 lg:h-19 text-white flex flex-col justify-center ">
            <ul>
              <li className="font-extralight text-base md:text-3xl uppercase text-shadow">
                {title1}
              </li>
              <li className="font-medium -mt-3 py-2 md:py-5 text-base md:text-2xl uppercase text-shadow">
                {title2}
              </li>
              <li className="font-light text-base md:text-3xl uppercase text-shadow">
                {title3}
              </li>
            </ul>
            <p className="text-base md:text-base font-normal text-shadow pb-2 ">
              {paragraph}
            </p>
            <ul className="flex flex-col md:flex-row w-full justify-end gap-1">
              <li
                className="bg-blackColor text-white font-medium uppercase text-sm rounded-md text-center"
                style={{ padding: "6px 12px" }}
              >
                {button2}
              </li>
              <li
                className="bg-bgBtn text-blackColor font-medium uppercase text-sm rounded-md text-center"
                style={{ padding: "6px 12px" }}
              >
                {button1}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderItem;
