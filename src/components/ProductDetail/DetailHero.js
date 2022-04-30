import { useEffect, useContext, useState } from "react";
import NotifyContext from "../../contexts/notify-context";
import TitleUI from "../UIcomponents/Title/TitleUI";
import Box from "@mui/material/Box";
import AlertSnackBar from "../UIcomponents/Alert/AlertSnackBar";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material";

const imageDivStyle = {
  width: "100%",
  height: "100%",
  text: "center",
};

const DetailHero = (props) => {
  const notifyCtx = useContext(NotifyContext);

  const theme = useTheme();

  const ImageComponent = styled("img")({
    width: "302px",
    height: "248px",
    padding: "0.5rem",
    margin: "0.5rem auto",
    objectFit: "cover",
    [theme.breakpoints.up("sm")]: {
      width: "372px",
      height: "318px",
    },
    [theme.breakpoints.up(1300)]: {
      width: "382px",
      height: "328px",
    },
  });

  useEffect(() => {
    notifyCtx.resetNotification();
    if (window.innerWidth > 1023) {
      props.setIs1024up(true);
    }
  }, []);

  return (
    <Box
      sx={{
        flexGrow: "2",
        [theme.breakpoints.up(1023)]: {
          maxWidth: "372px",
        },
      }}
    >
      {/* {!props.is1024up && <TitleUI title={props.name} className="わけわかめ" />} */}
      <Box textAlign="center">
        <ImageComponent src={props.imageUrl} alt="product" />
      </Box>
    </Box>
  );
};

export default DetailHero;
