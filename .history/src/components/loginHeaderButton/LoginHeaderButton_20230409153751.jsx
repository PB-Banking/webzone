import LockPersonOutlinedIcon from "@mui/icons-material/LockPersonOutlined";
import { MdExpandLess } from "react-icons/md";
import { MdExpandMore } from "react-icons/md";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
const LoginHeaderButton = (props) => {
  const muiTheme = useTheme();
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
    console.log(currState[anc]);
    if (toggleDrawer) {
      if (currState[anc] === true) {
        toggleDrawer(e);
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
          paddingLeft: "15px",
          paddingRight: toggleDrawer || cancelButton ? "0px" : "15px",
          flexGrow: "1",
          boxShadow: toggleDrawer ? "none" : "0 0 15px 0 rgba(0,0,0,.2)",
        }}
        onClick={(e) => handleLoginHeader(e)}
      >
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
                style={{ fontSize: "1.6rem" }}
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
