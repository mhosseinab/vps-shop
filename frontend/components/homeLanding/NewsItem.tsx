import { FC } from "react";

interface Props {
  head: string;
  title: string;
  paragraph: string;
}

const NewsItem: FC<Props> = ({ title, paragraph }) => {
  return (
    <div
      className="flex flex-col gap-3"
      style={{
        borderColor: "#e9eaed #e0e1e5 #d4d5d9",
        borderStyle: "solid",
        borderWidth: "1px",
      }}
    >
      <div className="bg-white p-p20 flex flex-col gap-3">
        <small>07. February 2022</small>
        <h4 className="uppercase text-darkText font-bold text-base">{title}</h4>
        <p className="leading-6 text-sm">{paragraph}</p>
        <a
          className="py-1 px-p10 border-darkText border-2 rounded-sm inline uppercase font-medium text-xs max-w-fit"
          href="#"
        >
          نمایش بیشتر
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
