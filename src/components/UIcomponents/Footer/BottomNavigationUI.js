import * as React from "react";
import { useContext } from "react";
import CartContext from "../../../contexts/cart-context";
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
        py: 1,
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
        sx={{ padding: "0.5rem 0", color: "primary.main" }}
      />
      {/* <NavLink to="/mypage"> */}
      {/* </NavLink> */}
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        component={RouterLink}
        to="/favorites"
        icon={<FavoriteIcon />}
        sx={{ padding: "0.5rem 0", color: "primary.main" }}
      />
      <BottomNavigationAction
        label={`Cart ${cartCtx.totalQuantity}`}
        value="MyCart"
        component={RouterLink}
        to="/mycart"
        icon={<ShoppingCartIcon />}
        sx={{ padding: "0.5rem 0", color: "primary.main" }}
      />
    </BottomNavigation>
  );
};

export default BottomNavigationUI;
