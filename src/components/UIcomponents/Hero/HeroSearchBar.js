import * as React from "react";
import { styled, alpha, useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import useMediaQuery from "@mui/material/useMediaQuery";

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
  const theme = useTheme();
  const matches = useMediaQuery("(min-width:600px)");

  const handleCheckInputValue = (e) => {
    props.onChange(e.target.value);
  };

  return (
    <Toolbar
      sx={{
        paddingLeft: 0,
        paddingRight: 0,
        bgcolor: "background.secondary",
        borderRadius: "8px",
        width: "90%",
        margin: "0 auto",
        boxShadow: "1px 1px 7px #000",
        bgcolor: "background.paper",
        [theme.breakpoints.up("sm")]: {
          paddingLeft: 0,
          paddingRight: 0,
        },
        [theme.breakpoints.up(900)]: {
          textAlign: "left",
          margin: 0,
          width: "65%",
          marginLeft: "0.5rem",
        },
      }}
      className="ツールバー"
    >
      <Search>
        <SearchIconWrapper>
          <SearchIcon
            sx={{
              color: "secondary",
              zIndex: 1,
            }}
          />
        </SearchIconWrapper>
        <StyledInputBase
          className="インプットです"
          sx={{ width: "100%", bgcolor: "white", borderRadius: "8px" }}
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          onChange={handleCheckInputValue}
        />
      </Search>
    </Toolbar>
  );
};

export default HeroSearchBar;
