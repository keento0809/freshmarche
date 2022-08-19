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
          paddingTop: props.isProductDetail ? "56px" : "",
          minHeight: props.isProductDetail ? "100vh" : "",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          [theme.breakpoints.up(900)]: {
            maxWidth: "md",
            paddingTop: 0,
            minHeight: 0,
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
