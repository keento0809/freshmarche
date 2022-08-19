import React from "react";
import TextField from "@mui/material/Typography";
import { InputAdornment } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const AuthInput = () => {
  return (
    <>
      <TextField
        variant="standard"
        margin="normal"
        required
        fullWidth
        id="email"
        name="email"
        placeholder="Email"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailOutlinedIcon />
            </InputAdornment>
          ),
          disableUnderline: true,
        }}
        sx={{
          borderRadius: "50px",
          backgroundColor: "background.grey",
          padding: "0.6rem 1.5rem",
          mt: 1.5,
        }}
      />
    </>
  );
};

export default AuthInput;
