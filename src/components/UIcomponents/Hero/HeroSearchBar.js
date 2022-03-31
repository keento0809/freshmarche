import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  margin: "0 8px",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "100%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      // width: "12ch",
      width: "100%",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const HeroSearchBar = (props) => {
  const handleCheckInputValue = (e) => {
    props.onChange(e.target.value);
  };

  return (
    <Toolbar
      paddingLeft={0}
      paddingRight={0}
      sx={{
        paddingLeft: 0,
        paddingRight: 0,
        bgcolor: "background.secondary",
        borderRadius: "12px",
        width: "90%",
        margin: "0 auto",
      }}
      className="ツールバー"
    >
      <Search className="どれ？">
        <SearchIconWrapper className="これか？">
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          sx={{ width: "100%" }}
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          // value={props.value}
          onChange={handleCheckInputValue}
        />
      </Search>
    </Toolbar>
  );
};

export default HeroSearchBar;
