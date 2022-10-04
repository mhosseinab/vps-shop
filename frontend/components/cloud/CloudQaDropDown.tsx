import { FC, SetStateAction, useState } from "react";

import { FaAngleDown } from "react-icons/fa";

interface Props {
  title: string;
  paragraph: string;
}

const CloudQaDropDown: FC<Props> = ({ title, paragraph }) => {
  const [show, setShow] = useState<SetStateAction<boolean>>(true);

  return (
    <div key={title} className="flex  flex-col text-right gap-4 mb-5">
      <div
        className="flex items-center gap-x-2 text-redColor cursor-pointer select-none"
        onClick={(): void => setShow(!show)}
      >
        <FaAngleDown className={`transform transition-transform ${show ? "rotate-0" : "rotate-90"} `} />
        <h4 className="font-bold uppercase text-redColor ">{title}</h4>
      </div>
      <p className={`transition-all ease-in text-sm text-blackColor ${show ? "block" : "hidden"}`}>
        {paragraph}
      </p>
    </div>
  );
};

export default CloudQaDropDown;
