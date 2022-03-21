import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

const userInfoBox = (props) => {
  const [icon, setIcon] = useState();

  const selectIconType = (val) => {
    if (val === "username") setIcon(<AccountCircleIcon />);
    if (val === "address") setIcon(<LocationOnIcon />);
    if (val === "email") setIcon(<EditIcon />);
    if (val === "password") setIcon(<LockIcon />);
  };

  useEffect(() => {
    userInfoBox(props.label);
  }, []);

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Box display="flex">
        <Box>{icon}</Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="h5" component="h5">
            {props.label}
          </Typography>
          <Typography variant="" component="">
            {props.username}
          </Typography>
        </Box>
      </Box>
      <Box>
        <EditIcon />
      </Box>
    </Box>
  );
};

export default UserInfoBox;
