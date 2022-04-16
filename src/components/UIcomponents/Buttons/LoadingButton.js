import * as React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import Stack from "@mui/material/Stack";

const LoadingButtonUI = () => {
  return (
    <div>
      <LoadingButton
        loading
        // loadingPosition="start"
        variant="outlined"
        sx={{ color: "primary" }}
      >
        S
      </LoadingButton>
      {/* <LoadingButton loading loadingIndicator="Loading..." variant="outlined">
        Fetch data
      </LoadingButton>
      <LoadingButton
        loading
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="outlined"
      >
        Save
      </LoadingButton> */}
    </div>
  );
};

export default LoadingButtonUI;
