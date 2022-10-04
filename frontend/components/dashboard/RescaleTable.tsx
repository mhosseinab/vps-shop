import * as React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/system";

function createData(
  name: string,
  vcpus: number,
  ram: number,
  ssd: number,
  traffic: number,
  price: number,
  totoalPrice: number
): {
  name: string;
  vcpus: number;
  ram: number;
  ssd: number;
  traffic: number;
  price: number;
  totoalPrice: number;
} {
  return { name, vcpus, ram, ssd, traffic, price, totoalPrice };
}

const rows = [
  createData("cx11", 1, 2, 20, 20, 10000, 40000),
  createData("cx12", 1, 2, 20, 20, 10000, 40000),
  createData("cx13", 1, 2, 20, 20, 10000, 40000),
  createData("cx14", 1, 2, 20, 20, 10000, 40000),
];
console.log(rows);
const ResalableTable: React.FC = () => {
  const [server, setServer] = React.useState("cx11");
  return (
    <Container>
      <div dir="rtl" className="table-row">
        <TableContainer>
          <Table
            sx={{ minWidth: 650 }}
            aria-label="simple table"
            padding="normal"
          >
            <TableHead>
              <TableRow>
                <TableCell align="right">اسم</TableCell>
                <TableCell align="right">پردازنده</TableCell>
                <TableCell align="right">رم</TableCell>
                <TableCell align="right">اس اس دی</TableCell>
                <TableCell align="right">ترافیک</TableCell>
                <TableCell align="right">قیمت ساعتی</TableCell>
                <TableCell align="right">قیمت ماهانه</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    cursor: "pointer",
                    background: "#fff",
                  }}
                  onClick={(): void => setServer(row.name)}
                  dir="ltr"
                >
                  <TableCell
                    align="right"
                    scope="row"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.8rem",
                    }}
                    className="inputContainer"
                  >
                    <input
                      type="radio"
                      onClick={(): void => setServer(row.name)}
                      checked={row.name === server}
                      onChange={(): void => setServer(row.name)}
                      style={{ appearance: "none" }}
                      className="customInput"
                    />
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.vcpus}</TableCell>
                  <TableCell align="right">{row.ram} GB</TableCell>
                  <TableCell align="right">{row.ssd} GB</TableCell>
                  <TableCell align="right">{row.traffic} TB</TableCell>
                  <TableCell align="right">{row.price} </TableCell>
                  <TableCell
                    style={{ color: "#d50c2d", fontWeight: 600 }}
                    align="right"
                  >
                    {row.totoalPrice}{" "}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="button">
        <button>تغیر سرویس</button>
        <small>
          تمام قیمت ها به اضافه 0% مالیات هستند. <small>مشاهده قوانین ما</small>
        </small>
      </div>
    </Container>
  );
};

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "2rem 0",
  "*": {
    fontFamily: "iranSans",
  },
  ".button": {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    gap: "0.6rem",
    button: {
      background: "#d1d1d17f",
      color: "#747171",
      borderRadius: "5px",
      padding: "0.5rem 0.8rem",
    },
    small: {
      color: "#646262",
      fontSize: "0.7rem",
      small: {
        color: "#d50c2d",
      },
    },
  },
  table: {
    border: "none",
  },
  ".css-1ygcj2i-MuiTableCell-root": {
    border: "none",
    boxShadow: "0 1px 4px 0 rgba(0, 0 ,0, 0.4)",
  },
  ".css-15wwp11-MuiTableHead-root , .css-1azl6jz-MuiTableCell-root": {
    backgroundColor: "transparent",
    color: "#777",
  },
  ".table-row": {
    padding: "0.5rem",
  },
  ".inputContainer": {
    position: "relative",
  },
  ".css-177gid-MuiTableCell-root , .css-1azl6jz-MuiTableCell-root , .css-1hg0cgf-MuiTableCell-root ":
    {
      fontFamily: "iranSans",
      textAlign: "center",
    },
});

export default ResalableTable;
