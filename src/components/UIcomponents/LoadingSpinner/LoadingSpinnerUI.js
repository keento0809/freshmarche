import * as React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import Stack from "@mui/material/Stack";

// Doesn't work !!!!
const LoadingSpinner = () => {
  return (
    <Stack className="ローディングスピナー" direction="row" spacing={2}>
      <LoadingButton loading variant="outlined" color="red">
        Submit
      </LoadingButton>
      <LoadingButton
        loading
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="outlined"
      >
        Save
      </LoadingButton>
    </Stack>
  );
};

export default LoadingSpinner;
