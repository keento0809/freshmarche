import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const ProductPaper = (props) => {
  return (
    <Box
      sx={{
        width: 120,
        "& > :not(style)": {
          m: 1,
          width: "100%",
          height: 200,
        },
        border: "1px solid transparent",
        borderRadius: "12px",
        bgcolor: "transparent",
        // For checking
        // bgcolor: "white",
      }}
    >
      <Paper sx={{ bgcolor: "white" }} elevation={6}>
        {props.children}
      </Paper>
    </Box>
  );
};

export default ProductPaper;
