import { FC } from "react";
import { FaGavel } from "react-icons/fa";

const MainImage1: FC = () => {
  return (
    <div
      className=" w-full p-16"
      style={{
        backgroundImage: `url(/section1bg.jpg)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="lg:container  mx-auto">
        <div className="flex md:flex-row-reverse flex-col items-center justify-center text-white text-right">
          <div className="md:w-1/2 lg:w-1/3 w-full text-center bg-white text-darkText ">
            <p className="p-5 text-base font-normal ">
              اما، زیاد منتظر نمانید وگرنه ممکن است شخص دیگری شما را شکست دهد.
            </p>
            <div className="w-full border-b flex flex-col"></div>
            <div className="p-5 text-darkText">
              <p className="font-normal text-xl"> : پایان مزایده تا</p>
              <span className="block text-xl font-medium">00:05:27</span>
              <span
                className="text-base font-medium"
                style={{ color: "#59a219" }}
              >
                Intel Core i7-2600
              </span>
            </div>
            <div
              className="flex bg-blackColor font-bold text-lg "
              style={{ padding: "17px 20px" }}
            >
              <a className="bg-bgBtn py-p10 px-4 gap-1 flex justify-center items-center w-60 mx-auto rounded-md">
                <FaGavel />
                مزایده سرور
              </a>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-1/3 w-full text-shadow text-right">
            <div className=" -mr-5">
              <h4 className="font-extralight text-2xl text-white">مزایده سرور</h4>
              <h4 className="font-bold text-2xl text-white">
                وقت داره تموم میشه
              </h4>
              <p className="font-normal text-md mb-5">به همین راحتی : </p>
            </div>
            <ol className="list-decimal">
              <li className="font-bold text-base pb-2">
                مشخصات سخت افزاری مورد نظر خود را وارد کنید
              </li>
              <li className="font-bold text-base pb-2">
                پیشنهادات را مقایسه کنید
              </li>
              <li className="font-bold text-base pb-2">
                مراقب تغیرات قیمت باشید
              </li>
              <li className="font-bold text-base pb-2">
                پیشنهاد خود را ببندید
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainImage1;
