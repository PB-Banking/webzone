import LockPersonOutlinedIcon from "@mui/icons-material/LockPersonOutlined";
import { MdExpandLess } from "react-icons/md";
import { MdExpandMore } from "react-icons/md";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import "./loginHeaderButton.css";
import { useContext } from "react";
import { ScreenContext } from "../../App";
import ETransferLogo from "../eTransferLogo/ETransferLogo";
const LoginHeaderButton = (props) => {
  const muiTheme = useTheme();
  const { matches, matchesSlightlySmallScreen } = useContext(ScreenContext);
  const [expandLess, setExpandLess] = useState(false);
  const { toggleDrawer, cancelButton, anc, currState } = props;
  const handleLoginHeader = (e) => {
    setExpandLess(!expandLess);
    if (toggleDrawer) {
      if (currState[anc] === false) {
        toggleDrawer(e);
      }
    }
  };

  const handleCloseHeader = (e) => {
    if (toggleDrawer) {
      if (currState[anc] === true) {
        toggleDrawer(e);
      }
    }
  };

  const getBreakPadPointVal = () => {
    let val = "14px";
    if (matches) {
      val = "14px";
    }
    if (matchesSlightlySmallScreen && !cancelButton) {
      val = "8px";
    }
    if (matchesSlightlySmallScreen && cancelButton) {
      val = "14px";
    }
    return val;
  };
  const getPaddingValue = (padPosition) => {
    if (padPosition === "right") {
      if (anc && anc === "left") {
        return getBreakPadPointVal();
      } else {
        if (toggleDrawer || cancelButton) {
          return "0px";
        } else {
          return "15px";
        }
      }
    } else {
      if (anc && anc === "left") {
        return getBreakPadPointVal();
      } else {
        return "15px";
      }
    }
  };

  const getSize = (comp) => {
    if (comp === "closeIcon") {
      return muiTheme.eTransferLogoWidths.closeIconSize;
    } else {
      if (matches) {
        return muiTheme.eTransferLogoWidths.eTransferLogoWidthMd;
      } else {
        return muiTheme.eTransferLogoWidths.eTransferLogoWidthLg;
      }
    }
  };

  return (
    <>
      <div
        style={{
          height: "100%",
          background:
            toggleDrawer || cancelButton
              ? muiTheme.appBarBackground.color
              : "#fff",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          paddingLeft: getPaddingValue("left"),
          paddingRight: getPaddingValue("right"),
          flexGrow: "1",
          boxShadow: toggleDrawer ? "none" : "0 0 15px 0 rgba(0,0,0,.2)",
        }}
        // className={anc && anc === "left" ? "burgerButton" : "nonBurgerButton"}
        onClick={(e) => handleLoginHeader(e)}
      >
        {}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            color:
              toggleDrawer || cancelButton
                ? "#fff"
                : muiTheme.appBarBackground.color,
            flexGrow: "1",
          }}
        >
          {anc === "left" && !cancelButton && (
            <div
              style={{
                padding: "0px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MenuIcon style={{ fontSize: "1.6rem" }} />
            </div>
          )}

          {anc === "left" && cancelButton && (
            <div
              style={{
                padding: "0px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <a
                className="nav-link"
                href="#"
                style={{ width: "3.5rem", marginRight: "33px" }}
                sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              >
                <ETransferLogo logoWidth={getSize("eTransferLogo")} />
              </a>
            </div>
          )}

          {anc !== "left" && (
            <>
              <LockPersonOutlinedIcon style={{ fontSize: "1.6rem" }} />
              <span
                style={{
                  marginLeft: "0.3rem",
                  marginRight: "0.19rem",
                  fontWeight: cancelButton ? "400" : "700",
                }}
              >
                Login
              </span>
            </>
          )}
          {!toggleDrawer && expandLess && (
            <MdExpandLess className="expandSize" />
          )}
          {!toggleDrawer && !expandLess && (
            <MdExpandMore className="expandSize" />
          )}
          {cancelButton && (
            <div
              style={{
                display: "flex",
                flexGrow: "1",
                justifyContent: "right",
              }}
            >
              <CloseIcon
                style={{ fontSize: getSize("closeIcon") }}
                onClick={(e) => handleCloseHeader(e)}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LoginHeaderButton;
