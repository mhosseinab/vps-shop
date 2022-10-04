import React, { FC, useState } from "react";

import { FaExternalLinkAlt } from "react-icons/fa";

const CloudCode: FC = () => {
  const [codeTab, setCodeTab] = useState("curl");
  const jsx = (
    <span className="flex h-2.5 w-2.5 ml-2.5 mb-1 relative">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500"></span>
    </span>
  );
  return (
    <section
      className="min-h-[400px] w-full bg-no-repeat bg-cover"
      id="code"
      style={{
        backgroundImage:
          "url('https://www.hetzner.com/themes/hetzner/dist/images/developers-hub.2380aeb6f12cbe23a7c731f7d1016632.png')",
        backgroundPosition: "50%",
      }}
    >
      <div className="container mx-auto py-[60px] text-white">
        <div className="">
          <h2 className="text-center text-2xl font-bold mb-[0.7em]">
            تمام امکانات همچنین با API موجود میباشد
          </h2>
          <p className="mb-10 text-sm leading-7">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد
          </p>
        </div>
        <div dir="ltr" className="flex items-center justify-center">
          <div className="w-full lg:w-2/3">
            <div className="bg-[#383838] rounded-sm flex flex-col">
              <div className="flex flex-row justify-between items-center">
                <div className="w-[70px] pl-5 flex justify-between self-center">
                  <span className="bg-[#2ace42] rounded-full w-3 h-3"></span>
                  <span className="bg-[#fcc02c] rounded-full w-3 h-3"></span>
                  <span className="bg-[#fa5e56] rounded-full w-3 h-3"></span>
                </div>
                <div className="flex gap-x-3 items-center pt-2.5 pr-5 justify-center text-sm ">
                  <div
                    onClick={(): void => setCodeTab("curl")}
                    className={`
                    ${
                      codeTab === "curl"
                        ? "cursor-default bg-[#272822] after:bg-[#525252] after:mb-1 after:w-2.5 after:h-2.5 after:ml-2.5 after:rounded-full"
                        : "bg-[#525252] cursor-pointer "
                    }
                  rounded-t-sm flex p-[15px] font-bold uppercase items-center `}
                  >
                    curl
                    {codeTab !== "curl" && jsx}
                  </div>
                  <div
                    onClick={(): void => setCodeTab("cli")}
                    className={`
                    ${
                      codeTab === "cli"
                        ? "cursor-default bg-[#272822] after:bg-[#525252] after:mb-1 after:w-2.5 after:h-2.5 after:ml-2.5 after:rounded-full"
                        : "cursor-pointer bg-[#525252] relative"
                    }
                    rounded-t-sm  flex p-[15px] font-bold uppercase items-center `}
                  >
                    HCLOUD CLI
                    {codeTab !== "cli" && jsx}
                  </div>
                </div>
              </div>
              <div className="table h-full w-full whitespace-normal min-h-[150px] bg-[#272822] p-2.5 text-[#ddd] text-left text-xs">
                <code className="h-[167px] whitespace-pre-wrap">
                  {codeTab === "curl" ? (
                    <>
                      <h6>
                        ~$ curl -H &apos;Authorization: Bearer
                        YOUR-API-TOKEN&apos;
                      </h6>
                      <br />
                      <h6> -H &apos;Content-Type: application/json&apos; </h6>
                      <br /> -d &apos;{"{"}{" "}
                      <span className="text-[#a6e22e]">&quot;name&quot;</span>:{" "}
                      <span className="text-[#a6e22e]">
                        &quot;server01&quot;
                      </span>
                      ,
                      <span className="text-[#a6e22e]">
                        {" "}
                        &quot;server_type&quot;
                      </span>
                      :<span className="text-[#a6e22e]">
                        &quot;cx21&quot;
                      </span>,{" "}
                      <span className="text-[#a6e22e]">
                        &quot;location&quot;
                      </span>
                      : <span className="text-[#a6e22e]">&quot;nbg1&quot;</span>
                      ,{" "}
                      <span className="text-[#a6e22e]">&quot;image&quot;</span>:{" "}
                      <span className="text-[#a6e22e]">
                        &quot;ubuntu -16.04&quot;
                      </span>
                      &apos;{"}"}
                      <br />
                      <br /> -X POST
                      &apos;https://api.hetzner.cloud/v1/servers&apos;
                    </>
                  ) : (
                    <>
                      ~$ hcloud server create --name{" "}
                      <span className="text-[#a6e22e]">
                        &apos;server01&apos;
                      </span>{" "}
                      --
                      <span className="text-[#a6e22e]">type</span>{" "}
                      <span className="text-[#a6e22e]">&apos;cx21&apos;</span>{" "}
                      --location{" "}
                      <span className="text-[#a6e22e]">&apos;nbg1&apos;</span>{" "}
                      --image{" "}
                      <span className="text-[#a6e22e]">
                        &apos;ubuntu-16.04&apos;
                      </span>
                    </>
                  )}
                </code>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full mt-12 text-center mb-2.5">
          <button className="bg-bgBtn text-blackColor flex items-center gap-x-1 font-bold py-2.5 px-4 rounded-md hover:bg-yellow-500 transition-all">
            همین الان وارد شوید
            <FaExternalLinkAlt />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CloudCode;
