import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { FormControl, InputLabel, Paper, Select } from "@mui/material";
import { Box, styled } from "@mui/system";
import {
  cpu,
  cpuData,
  disk,
  diskData,
  diskIops,
  diskIopsData,
  network,
  networkData,
  networkPps,
  networkPpsData,
} from "lib/chartData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const theme = createTheme({
  direction: "rtl", // Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export default function Graphs(): JSX.Element {
  return (
    <Container>
      <Paper className="header">
        <h4>نمودارها</h4>
        <Box sx={{ minWidth: 180 }}>
          <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
              <div dir="rtl">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">زنده </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={} the value
                    label="Age"
                    // onChange={handleChange} // event handler
                  ></Select>
                </FormControl>
              </div>
            </ThemeProvider>
          </CacheProvider>
        </Box>
      </Paper>
      <Paper className="">
        <Line height={200} options={cpu} data={cpuData} />
      </Paper>
      <Paper className="">
        <Line height={200} options={disk} data={diskData} />
      </Paper>
      <Paper className="">
        <Line height={200} options={diskIops} data={diskIopsData} />
      </Paper>
      <Paper className="">
        <Line height={200} options={network} data={networkData} />
      </Paper>
      <Paper className="">
        <Line height={200} options={networkPps} data={networkPpsData} />
      </Paper>
    </Container>
  );
}

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  maxWidth: "100vw",
  ".header": {
    h4: {
      fontSize: "1.1rem",
      fontWeight: "bold",
    },
    padding: "3rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    "@media (max-width: 768px)": {
      padding: "1rem",
    },
  },
});

