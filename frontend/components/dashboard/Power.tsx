import React, { FC } from "react";

import TextPaper from "components/dashboard/TextPaper";

const Power: FC = () => {
  return (
    <div>
      <TextPaper
        title="قدرت"
        paragraph="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته"
        button1={{ value: "فعال کردن قدرت", disabled: false }}
        button2={{ value: "خاموش کردن", disabled: false }}
      />
      <TextPaper
        title="ریسیت کردن قدرت"
        paragraph="ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. "
        button1={{ value: "چرخه قدرت", disabled: false }}
      />
    </div>
  );
};

export default Power;
