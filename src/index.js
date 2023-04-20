import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme } from "@mui/material/styles";
// import { ThemeProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import { createMuiTheme, CssBaseline } from "@mui/material";
import WeblySleek_UI_Normal from "./fonts/WeblySleek_UI_Normal.woff2";
import weblysleekuil from "./fonts/weblysleekuil.ttf";

const root = ReactDOM.createRoot(document.getElementById("root"));

const BREAKPOINTS = {
  xs: 0,
  sm: 767,
  md: 1024,
  lg: 1200,
  xl: 1536,
};

const breakpointsValues = {
  breakpoints: {
    values: BREAKPOINTS,
  },
};
const theme = createTheme({
  typography: {
    // fontFamily: "WeblySleek_UI_Normal,Serif",
    fontFamily: [
      "WeblySleek_UI_Normal",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  drawerWidths: {
    drawerWidthSm: "47.5%",
    drawerWidthXs: "78.5%",
  },
  drawerHeights: {
    drawerHeightLg: "4.375rem",
    drawerHeightSm: "3.938rem",
    drawerHeightXs: "2.875rem",
  },
  appBarBackground: {
    color: "#146243",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'WeblySleek_UI_Normal';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('WeblySleek_UI_Normal'), local('WeblySleek_UI_Normal'), url(${WeblySleek_UI_Normal}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
  ...breakpointsValues,
});
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
