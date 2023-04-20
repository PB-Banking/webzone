import { useState, useContext } from "react";
import { MdExpandLess } from "react-icons/md";
import { MdExpandMore } from "react-icons/md";
import List from "../list/List";
import "./select.css";
import Drawer from ".././drawer/Drawer";
import { ScreenContext } from "../../App";
import LoginHeaderButton from ".././loginHeaderButton/LoginHeaderButton";
function Select(props) {
  const { matches } = useContext(ScreenContext);
  const { position, listTwo } = props;

  const list = ["PB Online Banking", "PB Private Banking", "Web Broker"];

  function renderForLargeScreen() {
    let res = !matches && position === "right";
    return res;
  }
  return (
    <div>
      {renderForLargeScreen() && <LoginHeaderButton />}
      {matches && position === "left" && (
        <Drawer anchorPosition="left" listMenu={listTwo} />
      )}
      {matches && position === "right" && (
        <Drawer anchorPosition="right" listMenu={list} />
      )}
      {!matches && renderForLargeScreen() && (
        <div>
          <div
            className="shadowBoxTwo"
            style={{
              position: "absolute",
              right: "0px",
              width: "13.438rem",
              color: "black",
              background: "#fff",
            }}
          >
            {<List listMenu={list} />}
          </div>
        </div>
      )}
    </div>
  );
}

export default Select;
