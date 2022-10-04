import React, { FC } from "react";
import { Checkbox, Paper } from "@mui/material";
import { styled } from "@mui/system";
import { BsExclamationCircle } from "react-icons/bs";

import { red } from "@mui/material/colors";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

import RescaleTable from "components/dashboard/RescaleTable";

const Rescale: FC = () => {
  return (
    <div>
      <Container>
        <h3>مقیاس مجدد</h3>
        <p>به قدرت بیشتری نیاز دارید ؟ فقط یک پلن قدرتمند دیگر انتخاب کنید</p>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
        </p>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است.
        </p>
        <div className="option">
          <Checkbox
            {...label}
            defaultChecked
            sx={{
              color: red[800],
              "&.Mui-checked": {
                color: red[600],
              },
            }}
          />
          <h6>
            فقط سی پی یو و رم
            <small>
              این فیلد سایز دیسک را تغییر نمی دهد، که این اپشن را به شما میدهد
              که بعد ان را کم کنید
            </small>
          </h6>
        </div>
        <small className="info">
          <BsExclamationCircle />
          زمانیکه تغییر سرویس میدهید اطلاعات شما پاک نخواهد شد
        </small>
      </Container>
      <RescaleService className="rescale__service">
        <Paper className="red">
          <h4>استاندارد</h4>
          <ul>
            <li>
              مناسب برای اپلیکشن های شخصی ، انواع توزیع سیستم ها ، خوشه بندی
              پویا و محیط توسعه
            </li>
            <li>
              تناسب مناسب اندازه رم و سی پی یو بر روی Intel® Xeon® Gold
              Processors
            </li>
            <li>سی پی یو بهینه شده برای AMD EPYC</li>
          </ul>
        </Paper>
        <Paper>
          <h4>اختصاصی</h4>
          <ul>
            <li>
              مناسب برای اپلیکشن های شخصی ، انواع توزیع سیستم ها ، خوشه بندی
              پویا و محیط توسعه
            </li>
            <li>
              تناسب مناسب اندازه رم و سی پی یو بر روی Intel® Xeon® Gold
              Processors
            </li>
            <li>سی پی یو بهینه شده برای AMD EPYC</li>
          </ul>
        </Paper>
      </RescaleService>
      <RescaleTable />
    </div>
  );
};

const Container = styled(Paper)({
  padding: "2.5rem 2.5rem 2rem 2rem",
  marginBottom: "1rem",
  h3: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#595959",
  },
  p: {
    width: "100%",
    fontSize: "0.9rem",
    padding: "1.5rem 0",
    color: "#393939",
  },
  "small , h6 ": {
    color: "#595959",
  },
  ".option": {
    border: "1px solid #ebebeb ",
    padding: "1rem",
    display: "flex",
    gap: "0.5rem",
    h6: {
      small: {
        display: "block",
      },
    },
  },
  ".info": {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    margin: "1.5rem 0 0 0",
  },
});

const RescaleService = styled("div")({
  display: "flex",
  "@media (max-width: 768px)": {
    display: "flex",
    flexDirection: "column",
    "> div ": {
      width: "100%",
      padding: "1rem 2rem 1rem 1rem",
      ul: {
        listStyle: "dick!important",
        padding: "0.5rem",
        li: {
          fontSize: "0.8rem",
        },
      },
    },
  },
  "@media (min-width: 768px)": {
    "> div ": {
      width: "50%",
      padding: "1rem 2rem 1rem 1rem",
      ul: {
        listStyle: "dick!important",
        padding: "0.5rem",
        li: {
          fontSize: "0.8rem",
        },
      },
    },
  },
  gap: "2rem",
  h4: {
    fontSize: "1.2rem",
  },

  ".red": {
    background: "#d50c2d",
    color: "#fff",
  },
});

export default Rescale;
