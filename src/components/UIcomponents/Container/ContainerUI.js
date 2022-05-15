import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material";

const ContainerUI = (props) => {
  const theme = useTheme();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="sm"
        sx={{
          // original
          // paddingTop: props.isProductDetail ? "56px" : "",
          // test
          paddingTop: props.isProductDetail ? "56px" : "",
          // py: "56px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          // alignItems: "stretch",
          height: "100%",
          [theme.breakpoints.up(900)]: {
            maxWidth: "md",
            // test
            paddingTop: 0,
          },
          [theme.breakpoints.up(1023)]: {
            minHeight: props.isProductDetail ? "100vh" : "",
          },
          [theme.breakpoints.up(1300)]: {
            maxWidth: "lg",
          },
        }}
      >
        <Box
          sx={{
            bgcolor: "background.default",
            height: "auto",
          }}
        />
        {props.children}
      </Container>
    </React.Fragment>
  );
};

export default ContainerUI;
