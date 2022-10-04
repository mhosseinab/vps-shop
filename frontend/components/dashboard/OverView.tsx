import React, { FC } from "react";
import Image from "next/image";
import { Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";

import {
  BsCpu,
  BsCurrencyEuro,
  BsArrowDownUp,
  BsPlus,
  BsClockHistory,
  BsGrid,
} from "react-icons/bs";
import { FaMemory, FaCheck } from "react-icons/fa";
import { IoTicketOutline } from "react-icons/io5";

import map from "assets/img/map.png";

const OverView: FC = () => {
  return (
    <OverViewContainer>
      <Paper>
        <div className="details">
          <Typography variant="h4">
            CPX21
            <small>#145687</small>
          </Typography>
          <Typography>
            <span className="">
              <BsCpu />3
            </span>
            <small>VCPU</small>
          </Typography>
          <Typography>
            <span className="">
              <FaMemory />4
            </span>
            <small>RAM</small>
          </Typography>
          <Typography>
            <span className="">
              <IoTicketOutline />
              80GB
            </span>
            <small>DISK LOCAL</small>
          </Typography>
          <Typography>
            <span className="">
              <BsCurrencyEuro />
              1.95
            </span>
            <small>USAGE</small>
          </Typography>
          <Typography>
            <span className="">
              <BsArrowDownUp />
              0/20TB
            </span>
            <small>TRAFFIC OUT</small>
          </Typography>
          <Typography>
            <span className="">
              <BsCurrencyEuro />
              <span>mo/</span>
              6.90
            </span>
            <small>PRICE</small>
          </Typography>
        </div>
        <div className="add">
          <button>ADD LABELS</button>
          <BsPlus />
        </div>
      </Paper>
      <div className="server">
        <Paper className="activity">
          <div className="">
            <Typography variant="h5">فعالیت های سرور</Typography>
            <Typography variant="h6">
              <span className="head">
                <FaCheck />
                تغیر امنیت سرور
              </span>
              <small>5 ماه قبل</small>
            </Typography>
            <Typography variant="h6">
              <span className="head">
                <FaCheck />
                ساخت سرور جدید
              </span>
              <small>6 ماه قبل</small>
            </Typography>
          </div>
          <button>مشاهده همه</button>
        </Paper>
        <div className="options">
          <Paper className="option__head">
            <Typography variant="h5">گزینه های سرور</Typography>
            <div className="">
              <div className="option__headActivity">
                <BsClockHistory />
                <div className="option__headButton">
                  <button>فعال</button>
                  <small>بکاپ</small>
                </div>
              </div>

              <div className="option__headActivity">
                <BsGrid />
                <div className="option__headButton">
                  <button disabled={true}>اضافه کردن به گروه</button>
                  <small>سطح گروه</small>
                </div>
              </div>
            </div>
          </Paper>
          <Paper className="option__bottom">
            <div className="option__bottomRight">
              <Typography variant="h5">محل سرور</Typography>
              <Grid container rowSpacing={1}>
                <Grid xs={6} item className="option__bottomRightDetails">
                  <h6>دیتاسنتر</h6>
                  <span>hel1-dc2</span>
                </Grid>
                <Grid xs={6} item className="option__bottomRightDetails">
                  <h6>شهر</h6>
                  <span>هلینسکی</span>
                </Grid>
                <Grid xs={6} item className="option__bottomRightDetails">
                  <h6>کشور</h6>
                  <span>فنلاند</span>
                </Grid>
                <Grid xs={6} item className="option__bottomRightDetails">
                  <h6>منطقه</h6>
                  <span>eu-central</span>
                </Grid>
              </Grid>
            </div>
            <div className="option__bottomLeft">
              <Image src={map} alt="map" />
            </div>
          </Paper>
        </div>
      </div>
    </OverViewContainer>
  );
};

const OverViewContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  "*": {
    fontFamily: "iranSans!important",
  },
  ".add": {
    color: "#858585",
    padding: "1.5rem",
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2rem",
    button: {
      fontSize: "1.3rem",
      fontWeight: 900,
    },
  },
  h4: {
    display: "flex",
    flexDirection: "column",
    small: {
      fontSize: "0.8rem",
      color: "#8c8c8c!important",
      textAlign: "left",
    },
  },
  ".details": {
    display: "flex",
    gap: "2rem",
    padding: "2rem 2rem",
    borderBottom: "1px solid #e0e0e0",
    small: {
      fontSize: "0.9rem",
      color: "#393939",
    },
    span: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      fontSize: "1.6rem",
      span: {
        fontSize: "0.8rem",
        marginTop: "0.5rem",
        marginLeft: "-0.5rem",
      },
      svg: {
        fontSize: "1.6rem",
        fontWeight: "bold",
        color: "#d51f41",
      },
    },
    "@media (max-width: 1200px)": {
      flexWrap: "wrap",
      gap: "2rem 0rem",
      justifyContent: "space-between",

      h4: {
        width: "100%",
        textAlign: "center",
        small: { textAlign: "center" },
      },
      p: {
        flex: "33%",
      },
    },
    "@media (max-width: 600px)": {
      flexWrap: "wrap",
      gap: "2rem 0rem",
      justifyContent: "space-between",

      h4: {
        width: "100%",
        textAlign: "center",
        small: { textAlign: "center" },
      },
      p: {
        flex: "50%",
      },
    },
  },
  ".server": {
    height: "100%",
    display: "flex",
    gap: "1rem",
    ".activity": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      width: "50%",
      h5: {
        fontSize: "1.3rem",
        color: "#393939",
        padding: "2rem 2rem 1.5rem 0rem",
        width: "100%",
        display: "block",
        borderBottom: "1px solid #e0e0e0",
      },
      h6: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.5rem 2rem",
        fontSize: "1rem",
        color: "#495158",
        borderBottom: "1px solid #e0e0e0",
        small: {
          fontSize: "0.8rem",
        },
        ".head": {
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        },
        svg: {
          color: "#32d632",
        },
      },
      button: {
        backgroundColor: "#dbdbdb",
        padding: " 1rem",
      },
    },
    "@media (max-width: 1200px)": {
      flexWrap: "wrap",
      ".activity ,  .options": {
        width: "100%",
      },
      ".options": {
        ".option__head": {
          "> div": {
            justifyContent: "center",
            alignItems: "start",
            flexDirection: "column",
          },
        },
      },
    },
  },
  ".options": {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    height: "100%",

    width: "50%",
  },
  ".option__head": {
    width: "100%",
    alignItems: "center",
    padding: "2rem 2rem 1.5rem 0rem",

    "> div": {
      display: "flex",
      gap: "2rem",
      width: "100%",
      paddingTop: "1.5rem",
      ".option__headActivity": {
        display: "flex",
        gap: "1rem",
        ".option__headButton": {
          display: "flex",
          flexDirection: "column",
          small: {
            paddingTop: "0.4rem",
          },
        },
      },
    },
    svg: {
      fontSize: "1.6rem",
      color: "#d50c2d",
    },
    button: {
      background: "#d50c2d",
      color: "#fff",
      padding: "0.3rem 1rem",
      fontFamily: "iranSans",
      borderRadius: "0.3rem",
      ":disabled": {
        background: "#ebebeb",
        color: "#7c7c7c",
      },
    },
  },
  h5: {
    fontSize: "1.3rem",
    color: "#393939",
  },
  ".option__bottom": {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    ".option__bottomRight": {
      display: "flex",
      flexDirection: "column",

      "> div": {
        padding: "1rem 1.5rem 0.8rem 0rem",

        h6: {
          color: "#7c7c7c",
        },
        span: {
          fontSize: "0.9rem",
        },
      },
      h5: {
        padding: "1rem 1.5rem 0.8rem 0rem",
      },
    },
  },
});

export default OverView;

