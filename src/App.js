import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar/Navbar";
import LanguageBar from "./components/language/Language";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
export const ScreenContext = React.createContext();
function App() {
  const muiTheme = useTheme();
  const matches = useMediaQuery(muiTheme.breakpoints.down("md"));
  const matchesSmallScreen = useMediaQuery(muiTheme.breakpoints.down("xs"));
  return (
    <ScreenContext.Provider value={{ matches, matchesSmallScreen }}>
      <div className="App">
        {/* <Box
          sx={{
            fontFamily: "WeblySleek_UI_Normal",
          }}
        >
          Raleway
        </Box> */}
        {!matches && <LanguageBar />}

        <NavBar />
      </div>
    </ScreenContext.Provider>
  );
}

export default App;
