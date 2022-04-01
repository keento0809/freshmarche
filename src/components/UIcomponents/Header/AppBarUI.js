import * as React from "react";
import { useState, useEffect } from "react";
import { useHistory, NavLink } from "react-router-dom";
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

const pages = [`FAVORITES`, `CART`, `LOGOUT`];
const iconsArray = [<HomeIcon />, <FavoriteIcon />, <ShoppingCartIcon />];
console.log(iconsArray[0]);

const AppBarUI = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isHomePage, setIsHomePage] = useState(true);

  const history = useHistory();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    isHomePage && props.onOpen();
    !isHomePage && history.push("/");
  };
  const handleOpenSearchBar = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseSearchBar = () => {
    setAnchorElUser(null);
  };

  const handleOpenUserInfo = () => {
    // test code
    history.push("/mypage");
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
              {isHomePage && <MenuIcon color="primary" />}
              {!isHomePage && <ArrowBackIcon color="primary" />}
              {/* <MenuIcon color="primary" /> */}
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
            {pages.map((page, index) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontSize: "0.8rem",
                  fontWeight: "600",
                }}
              >
                {page}
                {/* {index} */}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton size="large" onClick={handleOpenUserInfo}>
              <AccountCircleIcon color="primary" cursor="pointer" />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AppBarUI;
