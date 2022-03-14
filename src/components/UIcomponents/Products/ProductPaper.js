import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const ProductPaper = (props) => {
  return (
    <Box
      sx={{
        width: 120,
        // display: "flex",
        // flexDirection: "row",
        // flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 100,
          height: 100,
        },
        bgcolor: "transparent",
        // For checking
        // bgcolor: "white",
      }}
    >
      <Paper sx={{ bgcolor: "transparent" }} elevation={6}>
        {props.children}
      </Paper>
    </Box>
  );
};

export default ProductPaper;
