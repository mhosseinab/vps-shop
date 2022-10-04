import React, { FC } from "react";
import { styled } from "@mui/material/styles";

import Switch, { SwitchProps } from "@mui/material/Switch";
import { FormControlLabel, Typography } from "@mui/material";
import { BsCircleFill, BsLock, BsTag } from "react-icons/bs";
import { FiTerminal } from "react-icons/fi";

const DetailsMenu: FC = () => {
  return (
    <MenuContainer>
      <MenuRightSide>
        <BsCircleFill style={{ color: "#7bea7b" }} />
        <Typography variant="h5" color="#393939">
          argo
        </Typography>
        <div className="details">
          <Typography variant="h6" fontWeight={600} color="#383838">
            <Typography variant="body2" fontWeight={400} color="#d6234d">
              Add IP
            </Typography>
            :Floating IPs
          </Typography>
          <Typography variant="h6" fontWeight={600} color="#383838">
            <Typography variant="body2" fontWeight={400} color="#403838">
              2001:db8:3333:4444
            </Typography>
            :IPv6
          </Typography>
          <Typography variant="h6" fontWeight={600} color="#383838">
            <Typography variant="body2" fontWeight={400} color="#403838">
              99.48.27.27
            </Typography>
            :IPv4
          </Typography>
        </div>
      </MenuRightSide>
      <MenuLeftSide>
        <FormControlLabel
          control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
          label=""
        />
        <FiTerminal className="terminal" />
        <BsLock />
        <BsTag />
      </MenuLeftSide>
    </MenuContainer>
  );
};

const MenuContainer = styled("div")({
  background: "#fff",
  height: "4.3rem",
  borderBottom: "2px solid #e6e6e6",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  padding: "0 20px",
  "div > div ": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
const MenuRightSide = styled("div")({
  display: "flex",
  alignItems: "center",
  width: "100%",
  h5: {
    marginLeft: "6rem",
    marginRight: "2rem",
  },
  ".details": {
    gap: "1rem",
  },
  "> div > h6": {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    fontSize: "1rem",
  },
  "@media (max-width: 1098px)": {
  width: "40%",

    ".details": {
      display: "none",
    },
  },
});
const MenuLeftSide = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: "1.4rem",
  svg: {
    fontSize: "1.3rem",
    color: "#bababa",
  },
  ".terminal": {
    fontSize: "2.2rem",
    padding: "0rem 0.5rem",
    backgroundColor: "#dbdbdb",
    color: "#333",
    borderRadius: "0.5rem",
  },
  "@media (max-width: 968px)": {
    width: "100%",
  },
});

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));
export default DetailsMenu;
