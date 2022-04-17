import * as React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import Stack from "@mui/material/Stack";

const LoadingButtonUI = () => {
  return (
    <div>
      <LoadingButton
        loading
        variant="outlined"
        sx={{ color: "primary", bgcolor: "transparent", border: "none" }}
      >
        S
      </LoadingButton>
    </div>
  );
};

export default LoadingButtonUI;
