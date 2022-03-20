import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const BottomNavigationUI = () => {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{
        width: "100%",
        height: "auto",
        position: "fixed",
        bottom: 0,
        backgroundColor: "primary.main",
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label=""
        value="MyPage"
        icon={<AccountCircleIcon />}
        sx={{ padding: "0.8rem 0" }}
      />
      <BottomNavigationAction
        label=""
        value="favorites"
        icon={<FavoriteIcon />}
        sx={{ padding: "0.8rem 0" }}
      />
      {/* <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon />}
      /> */}
      <BottomNavigationAction
        label=""
        value="folder"
        icon={<ShoppingCartIcon />}
        sx={{ padding: "0.8rem 0" }}
      />
    </BottomNavigation>
  );
};

export default BottomNavigationUI;
