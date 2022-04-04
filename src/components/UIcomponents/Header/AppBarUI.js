import * as React from "react";
import { useState, useEffect, useContext } from "react";
import { useHistory, NavLink, Link as RouterLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import AuthContext from "../../../contexts/auth-context";

const pages = [`FAVORITES`, `CART`, `LOGOUT`];
const iconsArray = [<HomeIcon />, <FavoriteIcon />, <ShoppingCartIcon />];

const AppBarUI = (props) => {
  // declare useState
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isHomePage, setIsHomePage] = useState(true);
  const [navLink, setNavLink] = useState("");

  // declare useContext
  const authCtx = useContext(AuthContext);

  const history = useHistory();

  const handleOpenNavMenu = (event) => {
    // if (!authCtx.isLoggedIn) {
    //   alert("Please login.");
    //   return;
    // }
    setAnchorElNav(event.currentTarget);
    isHomePage && props.onOpen();
    !isHomePage && history.push("/");
  };
  // const handleOpenSearchBar = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  // const handleCloseSearchBar = () => {
  //   setAnchorElUser(null);
  // };

  const handleOpenUserInfo = () => {
    // test code
    if (!authCtx.isLoggedIn) history.push("/authentication");
    else history.push("/mypage");
  };

  const handleJumpToLink = (page) => {
    if (page === "FAVORITES") history.push("/favorites");
    if (page === "CART") history.push("/mycart");
    if (page === "LOGOUT") history.push("/authentication");
  };

  useEffect(() => {
    props.isHome ? setIsHomePage(true) : setIsHomePage(false);
  }, []);

  // const onClickHandle = isHomePage ? :

  return (
    // <AppBar position="static" sx={{ bgcolor: "background.default" }}>
    <AppBar position="sticky" sx={{ bgcolor: "background.default" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* test */}
          <Box>
            <NavLink to="/">
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                }}
                color="primary"
              >
                FreshMarche
              </Typography>
            </NavLink>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              cursor="pointer"
            >
              {/* !authCtx.isLoggedIn : icon is dummy */}
              {!authCtx.isLoggedIn && <MenuIcon color="primary" />}
              {authCtx.isLoggedIn && isHomePage && <MenuIcon color="primary" />}
              {authCtx.isLoggedIn && !isHomePage && (
                <ArrowBackIcon color="primary" />
              )}
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <NavLink
              to="/"
              display="block"
              color="inherit"
              style={{ textDecoration: "none" }}
            >
              <Typography
                variant="h5"
                noWrap
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "none" },
                }}
                color="primary"
              >
                FreshMarche
              </Typography>
            </NavLink>
          </Box>

          <Box sx={{ flexGrow: 24, display: { xs: "none", md: "flex" } }}>
            {!authCtx.isLoggedIn && (
              <Button
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontSize: "0.8rem",
                  fontWeight: "600",
                }}
              >
                LOG IN
              </Button>
            )}
            {authCtx.isLoggedIn &&
              pages.map((page, index) => (
                <Button
                  key={page}
                  onClick={() => handleJumpToLink(page)}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontSize: "0.8rem",
                    fontWeight: "600",
                  }}
                  // component={RouterLink}
                  // to="/favorites"
                >
                  {page}
                  {/* {index} */}
                </Button>
              ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {authCtx.isLoggedIn && (
              <IconButton size="large" onClick={handleOpenUserInfo}>
                <AccountCircleIcon color="primary" cursor="pointer" />
              </IconButton>
            )}
            {/* <IconButton size="large" onClick={handleOpenUserInfo}>
              <AccountCircleIcon color="primary" cursor="pointer" />
            </IconButton> */}
            {!authCtx.isLoggedIn && (
              <IconButton size="large" onClick={handleOpenUserInfo}>
                <LoginIcon color="primary" cursor="pointer" />
              </IconButton>
            )}
            {/* <IconButton size="large" onClick={handleOpenUserInfo}>
              <AccountCircleIcon color="primary" cursor="pointer" />
            </IconButton> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AppBarUI;
