import { FC, SetStateAction, useState } from "react";
import { FaAngleDown } from "react-icons/fa";

interface Props {
  title: string;
  values: string[];
}

const FooterDropDown: FC<Props> = ({ title, values }) => {
  const [show, setShow] = useState<SetStateAction<boolean>>(false);

  return (
    <div key={title} className="flex  flex-col text-right gap-4">
      <div className="flex flex-row  justify-between" onClick={() : void => setShow(!show)}>
        <h4  className="font-bold uppercase">
          {title}
        </h4>
        <FaAngleDown className="lg:hidden"/>
      </div>
      <ul
        className={`lg:flex flex-col gap-y-2 transition-all ease-in duration-500 ${
          show ? "block" : "hidden"
        }`}
      >
        {values.map((value) => (
          <li className="font-extralight text-sm" key={value}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default FooterDropDown;
