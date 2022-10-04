import React, { FC } from "react";
import TextPaper from "./TextPaper";

const Delate: FC = () => {
  return (
    <div>
      <TextPaper
        title="حذف کردن"
        paragraph="ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"
        button1={{ value: "حذف کردن سرور", disabled: false }}
      />
    </div>
  );
};

export default Delate;
