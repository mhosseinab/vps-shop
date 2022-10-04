//tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },
    extend: {
      container: false,
      // {
      //   center: true,
      //   sm: '540px',
      //   md: '720px',
      //   lg: '960px',
      //   xl: '1198px',
      //   xxl: '1198px',
      //   maxWidth : {
      //     '2xl' : "119px"
      //   },
      // },
      fontFamily: {
        "iran-sans": ["iranSans"],
      },
      fontSize: {
        2: 32,
      },
      lineHeight: {
        "extra-loose": "4rem",
      },
      colors: {
        blackColor: "#383838",
        garyColor: "#686868",
        darkText: "#333",
        lightColor: "hsla(0,0%,100%,.2)",
        lightColorHover: "hsla(0,0%,100%,.3)",
        bgBtn: "#fdc400",
        bgContainer: "#ededed",
        redColor: "#d50c2d",
        grayTxt: "#5a5a5a",
      },
      height: {
        40: "40rem",
        711: "711px",
        353: "353px",
        505: "505px",
        370: "370px",
        260: "260px",
        191: "191",
        413: "413px",
      },
      width: {
        505: "505px",
        370: "370px",
        260: "260px",
        191: "191",
        17: `80px`,
      },
      margin: {
        mt70: "70px",
      },
      maxHeight: {
        230: "230px",
      },
      minHeight: {
        "min-230": "230px",
      },
      boxShadow: {
        custom: "0 0 10px rgb(0 0 0 / 40%)",
      },
      padding: {
        p10: 10,
        p20: 20,
        p60: "60px",
      },
      boxShadow: {
        custom: "0 1px 4px 0 rgba(0, 0 ,0, 0.4)",
        borderShadow: "inset 0 0 0 2px #383838",
      },
      scale: {
        '0.3': '0.5',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "750px",
          },
          "@screen lg": {
            maxWidth: "970px",
          },
          "@screen xl": {
            maxWidth: "1170px",
          },
        },
      });
    },
  ],
};
