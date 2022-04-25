import { Fragment } from "react";
import MainHeader from "../components/Header/MainHeader";
import MainFooter from "../components/Footer/MainFooter";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CircularProgressUI from "../components/UIcomponents/Progress/CircularProgressUI";

const Loading = (props) => {
  return (
    <Fragment>
      <MainHeader isHome={false} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          paddingBottom: "120px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            component="h4"
            sx={{ color: "primary.main" }}
          >
            Loading...
          </Typography>
          <Box sx={{ paddingTop: "1.5rem" }}>
            <CircularProgressUI />
          </Box>
        </Box>
      </Box>
      <MainFooter />
    </Fragment>
  );
};

export default Loading;
