import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { StayPrimaryLandscape } from "@mui/icons-material";

export default function BackdropUI({ backdropOpen, setBackdropOpen }) {
  return (
    <Box sx={{ position: "fixed", top: "30%" }}>
      <Backdrop
        sx={{
          color: "primary.main",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={backdropOpen}
        onClick={() => setBackdropOpen(false)}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  );
}
