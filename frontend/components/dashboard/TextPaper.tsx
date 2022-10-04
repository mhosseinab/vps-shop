import { Paper } from "@mui/material";
import { styled } from "@mui/system";
import React, { FC } from "react";

interface Props {
  title: string;
  paragraph: string;
  button1: {
    value: string;
    disabled: boolean;
  };
  button2?: {
    value: string;
    disabled: boolean;
  };
}

const TextPaper: FC<Props> = ({ title, paragraph, button1, button2 }) => {
  return (
    <Container>
      <h3>{title}</h3>
      <p>{paragraph}</p>
      <button disabled={button1.disabled}>{button1.value}</button>
      {button2 && <button disabled={button2.disabled}>{button2.value}</button>}
    </Container>
  );
};

const Container = styled(Paper)({
  padding: "1rem 1rem 1rem 0rem",
  marginBottom: "1rem",
  "@media (max-width: 768px)": {
    h3: { fontSize: "1rem" ,  fontWeight: "bold"},
    p: { width: "100%", fontSize: "0.8rem" },
    button: {
      padding: "0.3rem 0.5rem",
      backgroundColor: "#d50c2d",
      color: "white",
      fontSize: "0.8rem",
      borderRadius: "0.5rem",
      fontWeight: "bold",
      margin: "1rem 0 0 1rem",

      ":disabled": {
        background: "#ebebeb",
        color: "#7c7c7c",
      },
    },
  },
  "@media (min-width: 768px)": {
    padding: "2.5rem 2.5rem 2rem 0rem",

    h3: {
      fontSize: "1.3rem",
      fontWeight: "bold",
    },
    p: { width: "60%", fontSize: "0.9rem", padding: "1.5rem 0" },

    button: {
      backgroundColor: "#d50c2d",
      padding: "0.5rem 1rem",
      color: "white",
      borderRadius: "0.5rem",
      fontWeight: "bold",
      marginLeft: "1rem",
      ":disabled": {
        background: "#ebebeb",
        color: "#7c7c7c",
      },
    },
  },
});

export default TextPaper;
