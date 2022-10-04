import React, { FC } from "react";

import TextPaper from "components/dashboard/TextPaper";

const Firewalls: FC = () => {
  return (
    <div>
      <TextPaper
        title="فایروالس"
        paragraph="ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"
        button1={{ value: "ساختن فایروالس", disabled: false }}
        button2={{ value: "فعال کردن فایروالس", disabled: true }}
      />
    </div>
  );
};

export default Firewalls;
