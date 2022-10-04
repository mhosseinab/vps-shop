import React, { FC } from "react";

import Flag from "react-world-flags";

const CloudPriceItem: FC = () => {
  const items = [
    {
      title: "cx11",
      vcpu: 1,
      price: "30,000",
      cpu: "intel",
      ram: "2 GB",
      disk: "20 GB",
      traffic: "20 TB",
      location: ["de", "fi"],
    },
    {
      title: "cx11",
      vcpu: 1,
      price: "30,000",
      cpu: "intel",
      ram: "2 GB",
      disk: "20 GB",
      traffic: "20 TB",
      location: ["de", "fi"],
    },
    {
      title: "cx11",
      vcpu: 1,
      price: "30,000",
      cpu: "intel",
      ram: "2 GB",
      disk: "20 GB",
      traffic: "20 TB",
      location: ["de", "fi"],
    },
    {
      title: "cx11",
      vcpu: 1,
      price: "30,000",
      cpu: "intel",
      ram: "2 GB",
      disk: "20 GB",
      traffic: "20 TB",
      location: ["de", "fi"],
    },
    {
      title: "cx11",
      vcpu: 1,
      price: "30,000",
      cpu: "intel",
      ram: "2 GB",
      disk: "20 GB",
      traffic: "20 TB",
      location: ["de", "fi"],
    },
    {
      title: "cx11",
      vcpu: 1,
      price: "30,000",
      cpu: "intel",
      ram: "2 GB",
      disk: "20 GB",
      traffic: "20 TB",
      location: ["de", "fi"],
    },
    {
      title: "cx11",
      vcpu: 1,
      price: "30,000",
      cpu: "intel",
      ram: "2 GB",
      disk: "20 GB",
      traffic: "20 TB",
      location: ["de", "fi"],
    },
  ];
  return (
    <div dir="ltr" className="flex items-center gap-8 px-5 justify-center flex-wrap">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white w-full xl:w-2/12 md:w-4/12 sm:w-1/2 text-center"
        >
          <h4 className="py-2.5 px-5 font-bold text-md text-blackColor uppercase">
            {item.title}
          </h4>
          <div
            dir="rtl"
            className="text-white bg-[#383838] py-2.5 px-5 flex flex-col"
          >
            <span className=" flex flex-col items-center justify-center text-[1.6em] text-[#fdc400]">
              {item.price}
              <small className=" text-xs -mt-1">هر ماه</small>
            </span>
            <span className="text-xs py-2"> 200 / ساعتی</span>
          </div>
          <div className="flex flex-col text-center items-center justify-center p-5">
            <ul className="flex flex-col gap-y-3">
              <li className="font-bold text-sm text-blackColor flex items-center justify-center">
                {item.vcpu} vCPU
                <span className="py-[3px] px-[7px] bg-[#777] text-white rounded text-xs ml-1">
                  {item.cpu}
                </span>
              </li>
              <li className="font-bold text-sm uppercase text-blackColor flex items-center justify-center">
                {item.ram} ram
              </li>
              <li className="font-bold text-sm text-blackColor flex items-center justify-center">
                {item.disk} Disk space
              </li>
              <li className="font-bold text-sm text-blackColor flex items-center justify-center">
                {item.traffic} Traffic
              </li>
              <li className="font-bold text-sm text-blackColor flex items-center justify-center gap-x-2">
                {item.location.map((cu, index) => (
                  <Flag key={index} code={cu} width={20} height={15} />
                ))}
                Locations
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CloudPriceItem;
