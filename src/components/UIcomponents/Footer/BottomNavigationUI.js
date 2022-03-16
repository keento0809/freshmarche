import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
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
        color: "text.primary",
      }}
      value={value}
      onChange={handleChange}
      className="AAAAAAAAAAAAAAAA"
    >
      <BottomNavigationAction
        label="MyPage"
        value="MyPage"
        icon={<AccountCircleIcon />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon />}
      />
      {/* <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon />}
      /> */}
      <BottomNavigationAction
        label="Folder"
        value="folder"
        icon={<ShoppingCartIcon />}
      />
    </BottomNavigation>
  );
};

export default BottomNavigationUI;
