import { useState, useContext } from "react";
import { MdExpandLess } from "react-icons/md";
import { MdExpandMore } from "react-icons/md";
import List from "../list/List";
import "./select.css";
import Drawer from ".././drawer/Drawer";
import { ScreenContext } from "../../App";
import LoginHeaderButton from ".././loginHeaderButton/LoginHeaderButton";
function Select() {
  const { matches } = useContext(ScreenContext);
  const list = ["PB Online Banking", "PB Private Banking", "Web Broker"];
  return (
    <div>
      {!matches && <LoginHeaderButton />}
      {matches && <Drawer anchorPosition="right" listMenu={list} />}
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
          {!matches && <List listMenu={list} />}
        </div>
      </div>
    </div>
  );
}

export default Select;
