import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const ProductPaper = (props) => {
  return (
    <Box
      sx={{
        width: 120,
        "& > :not(style)": {
          width: "100%",
          height: 200,
        },
        border: "1px solid transparent",
        borderRadius: "12px",
        bgcolor: "transparent",
        boxShadow: "1px 1px 5px #000",
        margin: "0.2rem",
      }}
    >
      <Paper
        sx={{
          bgcolor: "white",
          cursor: "pointer",
          transition: "all 0.4s ease",
          boxShadow: "0 0 6px 4px #000",
          "&.MuiPaper-root:hover": {
            transform: "scale(1.05)",
          },
        }}
        elevation={6}
      >
        {props.children}
      </Paper>
    </Box>
  );
};

export default ProductPaper;
