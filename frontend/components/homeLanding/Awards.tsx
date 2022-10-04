import Image from "next/image";
import { FC } from "react";

import bayerns from "assets/img/bayerns-best-50-award.png";
import eco from "assets/img/eco-award-2011.png";
import fox from "assets/img/fox-certification-award.svg";
import readers1 from "assets/img/readers-choice-award-2019.png";
import readers2 from "assets/img/readers-choice-award-2020.png";
import readers3 from "assets/img/readers-choice-award-2021.png";

const Awards: FC = () => {
  const items: {
    img: StaticImageData;
    title: string;
  }[] = [
    { img: readers3, title: "Readers' Choice 2021" },
    { img: readers2, title: "Readers' Choice 2020" },
    { img: readers1, title: "Readers' Choice 2019" },
    { img: fox, title: "ISO 27001-Certification" },
    { img: eco, title: "ECO Award" },
    { img: bayerns, title: "Bayerns Best 50" },
  ];
  return (
    <div className="container">
      <div className="py-10">
        <h1 className="text-center uppercase text-2 text-blackColor font-semibold mb-6">جوایز</h1>
        <div className="grid grid-cols-2 md:grid-cols-6  items-center justify-center gap-5 ">
          {items.map((item) => (
            <div
              className="flex flex-col justify-between items-center  h-48"
              key={item.title}
            >
              <div className="h-3/4 flex items-center mb-3">
                <Image className="" src={item.img} alt={item.title} />
              </div>
              <div className="flex h-1/4  w-full justify-center items-center text-grayTxt">
                <h5 className="text-xs md:text-base">{item.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;
