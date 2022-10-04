import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

import { FaExternalLinkAlt, FaLongArrowAltRight } from "react-icons/fa";
import React, { FC, useState } from "react";

import { ImAttachment } from "react-icons/im";
import { styled } from "@mui/system";

const theme = createTheme({
  direction: "rtl", // Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const SupportSection: FC = () => {
  const [request, setRequest] = useState("");
  const [category, setCategory] = useState("");

  const handleChange = (event: string): void => {
    setCategory(event);
  };
  return (
    <SupportContainer>
      <Paper className="request">
        <div className="head">
          <h4>درخواست پشتیبانی</h4>
          <div className="btn">
            <ul>
              <li
                className={`${request === "technical" && "selected"}`}
                onClick={(): void => setRequest("technical")}
              >
                فنی
              </li>
              <li
                className={`${request === "accounting" && "selected"}`}
                onClick={(): void => setRequest("accounting")}
              >
                پرداخت
              </li>
              <li
                className={`${request === "others" && "selected"}`}
                onClick={(): void => setRequest("others")}
              >
                متفرقه
              </li>
            </ul>
          </div>
        </div>
        <div className={`${request === "technical" ? "dBlock" : "dNone"}`}>
          <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
              <div dir="rtl">
                <div className="select">
                  <h6>مشکلتون چیه؟</h6>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="select-category"> دسته </InputLabel>
                      <Select
                        labelId="select-category"
                        value={category}
                        label="دسته"
                        onChange={(e): void => handleChange(e.target.value)}
                      >
                        <MenuItem value={10}>مشکل سرور</MenuItem>
                        <MenuItem value={20}>مشکل پرداخت</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>
              </div>
            </ThemeProvider>
          </CacheProvider>

          <form className="content">
            <CacheProvider value={cacheRtl}>
              <ThemeProvider theme={theme}>
                <div dir="rtl" className="field-container">
                  <div className="field">
                    <TextField
                      inputProps={{ min: 0, style: { textAlign: "right" } }} // the change is here
                      sx={{ width: "50%" }}
                      id="outlined-basic"
                      label="اختیاری : انتخاب سرور"
                      variant="outlined"
                      className="input-right"
                    />
                    <FaLongArrowAltRight />
                    <FormControl sx={{ minWidth: 120, width: "50%" }}>
                      <InputLabel id="select-server">
                        اختیاری : انتخاب پروژه
                      </InputLabel>
                      <Select
                        // value={age}
                        // onChange={handleChange}
                        dir="rtl"
                        labelId="select-server"
                        label=" اختیاری : انتخاب پروژه "
                      >
                        <MenuItem value={10}>hetzner</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </ThemeProvider>
            </CacheProvider>

            <textarea required rows={5} placeholder="موضوع خودتون شرح بدید *" />
            <div className="file">
              <input type="file" />
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <ImAttachment />
                <h4>اضافه کردن فایل</h4>
              </div>
              <small dir="ltr">.txt,.jpg,.jpeg,.png,.bmp,.pdf</small>
            </div>
            <input type="submit" value="ثبت" />
          </form>
        </div>
      </Paper>
      <div className="docs">
        <Paper>
          <h4>وضعیت هتزنر</h4>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که{" "}
          </p>
          <a href="#">
            برسی وضعیت هتزنر <FaExternalLinkAlt />
          </a>
        </Paper>
        <Paper>
          <h4>داکیومنت هتزنر</h4>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
          </p>
          <a href="#">
            رفتن به داکیومنت <FaExternalLinkAlt />
          </a>
        </Paper>
      </div>
    </SupportContainer>
  );
};

const SupportContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  gap: "1rem",
  justifyContent: "space-between",
  overflowX: "hidden",
  boxSizing: "border-box",
  "*": { fontFamily: "IranSans" },
  ".input-right": {
    "&::placeholder": {
      textAlign: "right",
    },
  },
  ".dNone": {
    display: "none",
  },
  ".dBlock": {
    display: "block",
  },
  ".selected": {
    background: "#d50c2d",
    color: "#fff",
  },
  flex: 5,
  ".request": {
    flex: 3.5,
    padding: "1.3rem 0",
    ".head": {
      h4: {
        fontSize: "19px",
        color: "#393939",
        padding: "0.5rem 1rem",
      },
      ".btn": {
        padding: "1rem 1rem 2rem 1rem",
        borderBottom: "1px solid #e6e6e6",

        ul: {
          display: "flex",
          gap: "0.5rem",
          li: {
            border: "1px solid #dbdbdb",
            textAlign: "center",
            padding: "1rem 0",
            flex: 1,
            borderRadius: "5px",
            cursor: "pointer",
          },
        },
      },
    },
    ".select": {
      padding: "1rem 1rem 2rem 1rem",
      borderBottom: "1px solid #e6e6e6",
      ".MuiBox-root ": {
        fontFamily: "IranSans",
      },
      h6: {
        marginBottom: "1rem",
      },
    },
    ".content": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "0.5rem",
      margin: "2rem 1rem",
      '.field-container' : {
      width : '100%'
      },
      ".field": {
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.5rem 0",
      },
      textarea: {
        border: "1px solid #dbdbdb",
        width: "100%",
        padding: "1rem",
      },
      ".file": {
        cursor: "pointer",
        width: "100%",
        background: "#dbdbdb",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        padding: "1rem 0",
        svg: {
          color: "#393939",
        },
        small: {
          color: "#494949",
          textTransform: "uppercase",
          fontSize: "12px",
          marginTop: "0.5rem",
        },
        input: {
          width: "100%",
          height: "100%",
          opacity: "0",
          position: "absolute",
          top: "0",
          left: "0",
        },
      },
      'input[type="submit"]': {
        background: "#d1d1d17f",
        color: "#747171",
        width: "100%",
        borderRadius: "5px",
        padding: "0.5rem",
      },
      "@media (max-width: 768px)": {
        overflowX: "hidden",

        ".field": {
          flexDirection: "column",
          svg: {
            display: "none",
          },
          div: {
            width: "100%",
            marginBottom: "0.5rem",
          },
        },
      },
    },
  },
  ".docs": {
    flex: 1.5,
    display: "none",
    div: {
      padding: "2rem",
      marginBottom: "1rem",
      h4: {
        fontSize: "16px",
        fontWeight: "bold",
      },
      p: {
        fontSize: "12px",
        color: "#494949",
        margin: "1rem 0",
      },
      a: {
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        gap: "0.5rem",
        borderRadius: "5px",
        padding: "0.5rem",
        background: "#dbdbdb",
        width: "100%",
        color: "#494949",
        fontSize: "14px",
      },
    },
    "@media (min-width: 1024px)": {
      display: "block",
    },
  },
});

export default SupportSection;

