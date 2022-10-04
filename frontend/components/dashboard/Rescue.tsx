import React, { FC } from "react";

import TextPaper from "components/dashboard/TextPaper";

const Rescue: FC = () => {
  return (
    <div>
      <TextPaper
        title="نجات"
        paragraph="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته"
        button1={{ value: "فعال کردن نجات", disabled: false }}
        button2={{ value: "فعال کردن نجات و چرخه قدرت", disabled: false }}
      />
      <TextPaper
        title="رمز اصلی"
        paragraph="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. "
        button1={{ value: "بازیابی رمز عبور", disabled: false }}
      />
    </div>
  );
};

export default Rescue;
