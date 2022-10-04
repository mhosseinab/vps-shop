import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/system";

import { BsSearch } from "react-icons/bs";

function createData(
  name: string,
  description: string
): {
  name: string;
  description: string;
} {
  return { name, description };
}

const rows = [
  createData("VyOs 1.4 (amd64)", "vyos-1.4.0.amd64.iso"),
  createData("VyOs 1.4 (i386)", "vyos-1.4.0.i386.iso"),
  createData("VyOs 1.4 (arm)", "vyos-1.4.0.arm.iso"),
];

const IsoImage: React.FC = () => {
  return (
    <Container className="">
      <Paper className="head">
        <h4>فایل iso</h4>
        <h6>نصب کردن فایل iso روی درایو مجازت شما</h6>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد
        </p>
      </Paper>
      <Paper dir="ltr" className="table-row">
        <div className="">
          <h4>available image</h4>
          <div className="search">
            <input
              style={{ width: "100%", height: "100%" }}
              placeholder="جستوجو"
            />
            <BsSearch />
          </div>
        </div>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>DESCRIPTION</TableCell>
                <TableCell align="left">NAME</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.description}</TableCell>
                  <TableCell align="right">
                    <button>نصب</button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "2rem 0",
  ".head": {
    padding: "2rem",
    h4: {
      fontWeight: "bold",
    },
    "p , h6": {
      fontSize: "0.8rem",
      color: "#393939",
    },
    h6 :{
      paddingBottom : '0.5rem'
    }
  },
  button: {
    padding: "0.3rem 0.5rem",
    backgroundColor: "#d50c2d",
    color: "white",
    fontSize: "0.8rem",
    borderRadius: "0.5rem",
    fontWeight: "bold",
    margin: "1rem 0 0 1rem",
  },
  table: {
    border: "1px solid #d9d9d9",
  },
  ".css-15wwp11-MuiTableHead-root": {
    backgroundColor: "#eeeeee",
  },
  ".table-row": {
    padding: "0.5rem",
    "> div": {
      display: "flex",
      alignItems: "center",
      width: "100%",
      justifyContent: "space-between",
      padding: "0.5rem 1rem",
      h4: {
        textTransform: "uppercase",
        fontWeight: "600",
      },
      ".search": {
        color: "#a0a0a0",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        padding: "0.5rem",
        border: "1px solid #ebebeb",
        input: {
          textAlign: "right",
          width: "100%",
          height: "100%",
          outline: "none",
        },
      },
    },
    "@media (max-width: 548px)": {
      "> div": {
        flexDirection: "column",
      },
    },
  },
});

export default IsoImage;
