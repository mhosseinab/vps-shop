import { FC } from "react";
import NewsItem from "components/homeLanding/NewsItem";

const News: FC = () => {
  const items: { head: string; title: string; paragraph: string }[] = [
    {
      head: "اخبار",
      title:
        "ذخیره سازی دیتاها در هتزنر اسان شده است",
      paragraph:
        "تهیه نسخه پشتیبان از اطلاعات شما برای جلوگیری از از دست رفتن اطلاعات ضروری است. و افراد بیشتری از سرویس‌های ذخیره‌سازی آنلاین برای اشتراک‌گذاری تصاویر، ویدیوها و اسناد و برای پشتیبان‌گیری استفاده می‌کنند.",
    },
    {
      head: "PRESS RELEASES",
      title:
      "دیتا سنتر هتزنر به یک دیتا سنتر جدید گسترش پیدا کرده است",
      paragraph:
        "ما همیشه در تلاش هستیم تا بهترین راه حل ها را به شما ارائه دهیم. بنابراین، برای اینکه کارها برای شما انعطاف پذیرتر شود، سرورهای ریشه اختصاصی ما فقط از ای پی 6 پشتیبانی می کنند",
    },
    {
      head: "",
      title:
        "هاست لینوکس",
      paragraph:
        "هاست لینوکسی به شما امکان بکارگیری برنامه های گوناگون تحت  را می دهد تا با اطمینان خاطر سایتتان را تحت سیستم عامل محبوب لینوکس در دیتاسنتر های منتخب هتزنر سرور میزبانی کنید.",
    },
  ];
  return (
    <div className="py-10">
      <div className="container max-w-xxl">
        <h2 className="font-bold uppercase text-2 text-center text-darkText mb-8">
          اخبار / مطبوعات
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col gap-1.5 ml-4">
            <div className="flex items-center justify-between px-5 py-p10 text-white bg-blackColor">
              <h3 className="uppercase font-bold">اخبار</h3>
              <a href="#" className="underline text-xs">
                نمایش همه
              </a>
            </div>
            {items.map((item) => (
              <NewsItem
                key={item.title}
                title={item.title}
                head={item.head}
                paragraph={item.paragraph}
              />
            ))}
          </div>
          <div className="flex flex-col gap-1.5 mr-3.5">
            <div className="flex items-center justify-between px-5 py-p10 text-white bg-blackColor">
              <h3 className="uppercase font-bold">بیانیه های مطبوعاتی</h3>
              <a href="#" className="underline text-xs">
                نمایش همه
              </a>
            </div>
            {items.map((item) => (
              <NewsItem
                key={item.title}
                title={item.title}
                head={item.head}
                paragraph={item.paragraph}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
