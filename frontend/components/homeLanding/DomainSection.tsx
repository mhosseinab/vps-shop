import { FC } from "react";
import { FaSearch } from "react-icons/fa";

const DomainSection: FC = () => {
  return (
    <div
    dir="ltr"
      className=" w-full p-16 hidden md:block"
      style={{
        backgroundImage: `url(/domain-search.jpg)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: 0,
      }}
    >
      <div className="lg:container mx-auto">
        <div className="flex flex-col justify-center items-center gap-5">
          <h2 className="font-medium text-white text-2 uppercase">
          هم اکنون دامنه خود را دریافت کنید
          </h2>

          <div className="flex items-center w-full">
            <div className="w-2/12 lg:w-1/12 text-white font-light text-2">
              <strong>www.</strong>
            </div>
            <div className="w-10/12 lg:w-11/12 flex px-2">
              <input
                placeholder="desireddomain.com"
                type="text"
                className="w-full h-11 py-p10 px-4 outline-none"
              />
              <div className="flex justify-center items-center h-11 py-p10 px-4 text-base uppercase rounded-r-md gap-2 bg-bgBtn">
                <FaSearch />
                <span>جستوجو</span>
              </div>
            </div>
          </div>
          <p className="text-white text-sm font-medium">
           لازم نیست حتما دامنه را به صورت کامل وارد کنید همینکه فقط اسمش رو بنویسید کافیه
          </p>
        </div>
      </div>
    </div>
  );
};

export default DomainSection;
