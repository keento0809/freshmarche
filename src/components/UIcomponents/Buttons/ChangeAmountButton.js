import * as React from "react";
import Button from "@mui/material/Button";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const ChangeAmountButton = () => {
  return (
    <Button
      startIcon={<RemoveIcon />}
      endIcon={<AddIcon />}
      sx={{
        width: "50%",
        borderRadius: "50px",
        justifyContent: "space-around",
        bgcolor: "background.secondary",
        color: "text.primary",
      }}
    >
      1
    </Button>
  );
};

export default ChangeAmountButton;
