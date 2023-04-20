import * as React from "react";
import { useState } from "react";
import { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import EtransferLogo from "../eTransferLogo/ETransferLogo";
import Select from ".././select/Select";
import "./navbar.css";
import { ScreenContext } from "../../App";
import { useTheme } from "@mui/material/styles";

const pages = ["My Accounts", "Solutions"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const muiTheme = useTheme();
  const { matches, matchesSmallScreen } = useContext(ScreenContext);
  const [appBarHeight, setAppBarHeight] = useState("4.375rem");
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const getSize = () => {
    if (matches) {
      return muiTheme.eTransferLogoWidths.eTransferLogoWidthMd;
    } else {
      return muiTheme.eTransferLogoWidths.eTransferLogoWidthLg;
    }
  };

  return (
    <AppBar
      position="static"
      sx={{
        fontFamily: "WeblySleek_UI_Normal",
        fontSize: "1rem",
        height: {
          xs: muiTheme.drawerHeights.drawerHeightXs,
          sm: muiTheme.drawerHeights.drawerHeightSm,
          md: muiTheme.drawerHeights.drawerHeightLg,
          lg: muiTheme.drawerHeights.drawerHeightLg,
          xl: muiTheme.drawerHeights.drawerHeightLg,
        },
      }}
      style={{ background: muiTheme.appBarBackground.color, boxShadow: "none" }}
    >
      <Container
        sx={{
          maxWidth: {
            xs: "100%",
            sm: "100%",
            md: "1240px",
            lg: "1240px",
            xl: "1240px",
          },
          height: "100%",
          paddingLeft: {
            xs: "0px",
            sm: "0px",
            md: "15px",
            lg: "15px",
            xl: "15px",
          },
          paddingRight: {
            xs: "15px",
            sm: "15px",
            md: "0px",
            lg: "15px",
            xl: "15px",
          },
        }}
        maxWidth={false}
      >
        <Toolbar
          disableGutters
          style={{
            alignItems: "stretch",
          }}
          sx={{
            minHeight: {
              xs: muiTheme.drawerHeights.drawerHeightXs,
              sm: muiTheme.drawerHeights.drawerHeightSm,
              md: muiTheme.drawerHeights.drawerHeightLg,
              lg: muiTheme.drawerHeights.drawerHeightLg,
              xl: muiTheme.drawerHeights.drawerHeightLg,
            },
            height: "100%",
          }}
        >
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGOss
          </Typography> */}

          {/* <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="small"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" fontSize="1rem">
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}

          <Select position="left" listTwo={[...pages]} />

          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <a
              className="nav-link"
              href="#"
              style={{ width: "3.5rem", marginRight: "33px" }}
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            >
              <EtransferLogo logoWidth={getSize()} />
            </a>
          </div>

          {matches && <div style={{ flexGrow: "1" }}></div>}

          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGOs
          </Typography> */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  textTransform: "capitalize",
                  fontSize: "1rem",
                  marginRight: "12px",
                  paddingTop: 0,
                  paddingBottom: 0,
                  marginTop: 0,
                  marginBottom: 0,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {page}
                </div>
              </Button>
            ))}
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
          <Select position="right" />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
