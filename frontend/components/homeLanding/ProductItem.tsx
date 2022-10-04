import { FC } from "react";
import Image from "next/image";

interface Props {
  img: StaticImageData;
  title: string;
  paragraph: string;
  price: string;
}

const ProductItem: FC<Props> = ({ img, title, paragraph, price }) => {
  return (
    <div className="bg-white mt-mt70 flex flex-col text-center justify-between min-h-min-230 ">
      <div className="relative">
        <div className="absolute -top-14 w-full flex justify-center items-center ">
          <a
            href="#"
            className=" rounded-full hover:shadow-custom w-28 h-28 transition-all ease-in duration-200"
          >
            <Image src={img} width={110} height={110} alt={title + "logo"} />
          </a>
        </div>
      </div>

      <div
        className="text-center w-full text-blackColor"
        style={{ padding: "70px 20px 20px"  }}
      >
        <a className="text-xl font-bold uppercase " href="#">
          {title}
        </a>
        <p className="text-sm pt-6 text-right">{paragraph}</p>
      </div>
      <div
        className="bg-blackColor flex flex-col justify-center items-center"
        style={{ padding: " 17px 20px" }}
      >
        <span className="text-bgBtn text-sm -ml-2 pb-2 flex items-center gap-x-2">
          <span> شروع قیمت از</span>
          <span className="text-lg font-medium"> {price}</span>
        </span>
        <a
          href="#"
          className="border-2 uppercase rounded-sm text-center border-white text-sm font-medium text-white"
          style={{ padding: "5px 12px" }}
        >
          مشاهده
        </a>
      </div>
    </div>
  );
};

export default ProductItem;
