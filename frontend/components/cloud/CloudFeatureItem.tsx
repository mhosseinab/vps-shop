import { FC } from "react";
import Image from "next/image";

interface Props {
  img: StaticImageData;
  title: string;
  paragraph: string;
}

const CloudFeatureItem: FC<Props> = ({ img, title, paragraph }) => {
  return (
    <div className="bg-white mt-mt70 flex flex-col text-center justify-start min-h-[309px] ">
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
        className="text-center  w-full text-blackColor"
        style={{ padding: "70px 20px 20px"  }}
      >
        <a className="text-xl font-bold uppercase " href="#">
          {title}
        </a>
        <p className="text-sm pt-6 text-right">{paragraph}</p>
      </div>
    </div>
  );
};

export default CloudFeatureItem;


  