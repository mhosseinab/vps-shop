import React, { FC } from "react";
import { Box, FormControl, InputLabel, Paper, Select } from "@mui/material";
import { styled } from "@mui/system";

const Rebuild: FC = () => {
  return (
    <Container>
      <h3>بازسازی</h3>
      <p>
        ساخت دوباره قدرت سرور را پایین می اورد و همچنین بر روی دیسک قبلی دوباره
        نوشته میشود
      </p>
      <p>تمام اطلاعات قبلی داخل پاک خواهد شد</p>
      <div className="">
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Image </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={} the value
              label="Image"
              // onChange={handleChange} // event handler
            ></Select>
          </FormControl>
        </Box>
        <button disabled>ساختن دوباره</button>
      </div>
    </Container>
  );
};

const Container = styled(Paper)({
  marginBottom: "1rem",
  h3: {
    fontSize: "1.3rem",
    fontWeight: "bold",
  },
  "@media (max-width: 768px)": {
    padding: "1rem 1rem 1rem 1rem",
    p: {
      width: "100%",
      fontSize: "0.9rem",
      padding: "1.5rem 0",
      color: "#393939",
    },
    "> div": {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      gap: "2rem",
      padding: "0 1rem",
      "> div": {
        width: "100%",
      },
    },
    button: {marginLeft: "0"},
  },
  "@media (min-width: 768px)": {
    padding: "2.5rem 2.5rem 2rem 0rem",
    p: {
      width: "100%",
      fontSize: "0.9rem",
      padding: "1.5rem 0",
      color: "#393939",
    },
    "> div": {
      display: "flex",
      width: "100%",
      gap: "2rem",
      "> div": {
        width: "80%",
      },
    },
    button: {marginLeft: "1rem"},
  },

  button: {
    backgroundColor: "#d50c2d",
    padding: "0.5rem 1rem",
    color: "white",
    borderRadius: "0.5rem",
    fontWeight: "bold",
    ":disabled": {
      background: "#ebebeb",
      color: "#7c7c7c",
    },
  },
});

export default Rebuild;

