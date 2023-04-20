import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { MdExpandLess } from "react-icons/md";
import { MdExpandMore } from "react-icons/md";
import LockPersonOutlinedIcon from "@mui/icons-material/LockPersonOutlined";
import "./select.css";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ["Oliver Hansen", "Van Henry", "April Tucker"];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectPlaceholder() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    // setPersonName(
    //   // On autofill we get a stringified value.
    //   typeof value === "string" ? value.split(",") : value
    // );
  };

  return (
    <div style={{ display: "flex", alignItems: "stretch" }}>
      <FormControl
        sx={{ m: 1, width: 300, mt: 3, width: "auto", margin: 0, marginTop: 0 }}
        className="outline"
      >
        <Select
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={
            <OutlinedInput
              style={{
                padding: "0",
                height: "70px",
              }}
              sx={{
                boxShadow: "none",
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
                "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  {
                    border: 0,
                  },
                "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    border: 0,
                  },
              }}
            />
          }
          IconComponent={() => (
            <MdExpandLess style={{ fontSize: "1.4rem", color: "white" }} />
          )}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return (
                <div
                  style={{
                    color: "white",
                    display: "block",
                    textTransform: "capitalize",
                    fontSize: "1rem",
                    display: "flex",
                  }}
                >
                  <LockPersonOutlinedIcon />
                  <span
                    style={{ marginLeft: "0.3rem", marginRight: "0.19rem" }}
                  >
                    Login
                  </span>
                  <em></em>
                </div>
              );
            }

            return selected.join(", ");
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem disabled value="">
            <em>Placeholder</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
