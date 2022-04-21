import * as React from "react";
import { useContext } from "react";
import CartContext from "../../../contexts/cart-context";
import FavoriteContext from "../../../contexts/favorite-context";
import { Link as RouterLink } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const BottomNavigationUI = () => {
  const cartCtx = useContext(CartContext);
  const favoriteCtx = useContext(FavoriteContext);
  const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.up("xl"));

  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      showLabels
      sx={{
        width: "100%",
        height: "auto",
        position: "fixed",
        bottom: 0,
        backgroundColor: "background.default",
        [theme.breakpoints.up("md")]: {
          display: "none",
        },
      }}
      // {`theme.breakpoints.up('xl') matches: display:none;`}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Home"
        value="Home"
        component={RouterLink}
        to="/"
        icon={<HomeIcon />}
        sx={{ color: "primary.main" }}
      />
      {/* <NavLink to="/mypage"> */}
      {/* </NavLink> */}
      <BottomNavigationAction
        // original code
        // label="Favorites"
        label={`Favorites ${favoriteCtx.totalQuantity}`}
        value="favorites"
        component={RouterLink}
        to="/favorites"
        icon={<FavoriteIcon />}
        sx={{ color: "primary.main" }}
      />
      <BottomNavigationAction
        label={`Cart ${cartCtx.totalQuantity}`}
        value="MyCart"
        component={RouterLink}
        to="/mycart"
        icon={<ShoppingCartIcon />}
        sx={{ color: "primary.main" }}
      />
    </BottomNavigation>
  );
};

export default BottomNavigationUI;
