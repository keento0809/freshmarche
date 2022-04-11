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
          [theme.breakpoints.up(900)]: {
            maxWidth: "md",
          },
          [theme.breakpoints.up(1300)]: {
            maxWidth: "lg",
          },
        }}
        className="ここここれですかい"
        // sx={{ paddingBottom: "64px" }}
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
