import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h2",
          h2: "h2",
          h3: "h2",
          h4: "h3",
          h5: "h3",
          h6: "h3",
          subtitle1: "h3",
          subtitle2: "p",
          body1: "span",
          body2: "span",
        },
      },
    },
  },
  typography: {
    fontFamily: ["Circular Pro", "Verdana", "sans-serif"].join(","),
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,

    h1: {
      fontFamily: ["Circular Pro", "Verdana", "sans-serif"].join(","),
      fontWeight: 600,
      fontSize: "2.5rem",
      letterSpacing: "-1px",
    },
    h2: {
      fontFamily: ["Circular Pro", "Verdana", "sans-serif"].join(","),
      fontWeight: 600,
      fontSize: "2rem",
      letterSpacing: "-1px",
    },
    h4: {
      fontFamily: ["Circular Pro", "Verdana", "sans-serif"].join(","),
      fontWeight: 600,
      fontSize: "1.5rem",
      letterSpacing: "-1px",
    },
    h5: {
      fontFamily: ["Circular Pro", "Verdana", "sans-serif"].join(","),
      fontWeight: 600,
      fontSize: "1.2rem",
      letterSpacing: "-1px",
    },
    h6: {
      fontFamily: ["Circular Pro", "Verdana", "sans-serif"].join(","),
      fontWeight: 600,
      fontSize: "0.9rem",
      letterSpacing: "-1px",
    },
    body1: {
      fontFamily: ["Circular Pro", "Verdana", "sans-serif"].join(","),
      fontWeight: 300,
      fontSize: "1rem",
      letterSpacing: "-1px",
    },
    p: {
      fontFamily: ["Circular Pro", "Verdana", "sans-serif"].join(","),
      fontWeight: 300,
      fontSize: "1rem",
      letterSpacing: "-1px",
    },
  },
  palette: {
    primary: {
      main: "#76FF03", // Green
    },
    secondary: {
      main: "#A7FFEB", // LightBlue
    },
    background: {
      paper: "#A7FFEB",
      default: "#3E2723",
      secondary: "#76FF03",
      third: "#bdbdbd",
    },
    text: {
      primary: "#263238",
    },
  },
});

export default theme;
