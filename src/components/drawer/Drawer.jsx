import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useEffect } from "react";
import LoginHeaderButton from ".././loginHeaderButton/LoginHeaderButton";
import { useTheme } from "@mui/material/styles";

export default function TemporaryDrawer(props) {
  const muiTheme = useTheme();
  const { anchorPosition, listMenu } = props;

  // useEffect(() => {
  //   if (expandLess === true) {
  //     console.log(anchorPosition, expandLess, " passed in");
  //     toggleDrawer(anchorPosition, true)();
  //   }
  // });

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const getList = () => {
    if (listMenu && listMenu.length >= 1) {
      if (!listMenu.includes("Login")) {
        listMenu.unshift("Login");
      }
      return listMenu;
    } else {
      return ["Login"];
    }
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: "100%" }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{ paddingTop: "0px" }}>
        {getList().map((text, index) => (
          <ListItem
            key={text}
            sx={{
              ...(index === 0 && {
                height: {
                  xs: muiTheme.drawerHeights.drawerHeightXs,
                  sm: muiTheme.drawerHeights.drawerHeightSm,
                  md: muiTheme.drawerHeights.drawerHeightLg,
                  lg: muiTheme.drawerHeights.drawerHeightLg,
                  xl: muiTheme.drawerHeights.drawerHeightLg,
                },
                alignItems: "center",
                background: muiTheme.appBarBackground.color,
              }),
            }}
            disablePadding
          >
            <ListItemButton style={{ padding: "0px" }}>
              {index === 0 && (
                <>
                  <ListItemIcon sx={{ width: "100%" }}>
                    <LoginHeaderButton
                      toggleDrawer={toggleDrawer(anchor, false)}
                      cancelButton={true}
                      anc={anchorPosition}
                      currState={state}
                    />
                  </ListItemIcon>
                </>
              )}

              {index > 0 && (
                <div style={{ paddingLeft: "45px", width: "100%" }}>
                  <ListItemText
                    primary={text}
                    sx={{ padding: "11px 25px 10px 0" }}
                  />
                  <Divider />
                </div>
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div style={{ height: "100%" }}>
      {["left", "right", "top", "bottom"]
        .filter((anc) => anc === anchorPosition)
        .map((anchor) => (
          <React.Fragment key={anchor}>
            {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}

            <LoginHeaderButton
              toggleDrawer={toggleDrawer(anchor, true)}
              anc={anchorPosition}
              currState={state}
            />
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              PaperProps={{
                sx: {
                  width: {
                    sm: muiTheme.drawerWidths.drawerWidthSm,
                    xs: muiTheme.drawerWidths.drawerWidthXs,
                  },
                },
              }}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
    </div>
  );
}
