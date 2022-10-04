import { FC } from "react";

const BorderCut: FC = () => {
  return (
    <div className="container text-left max-w-xxl px-5" dir="ltr">
      <div className="main">
        <div className="main-right"></div>
        <div className="main-center"></div>
        <div className="main-left"></div>
      </div>
    </div>
  );
};

export default BorderCut;
