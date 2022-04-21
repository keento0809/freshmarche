import { useEffect, useContext } from "react";
import NotifyContext from "../../contexts/notify-context";
import TitleUI from "../UIcomponents/Title/TitleUI";
import Box from "@mui/material/Box";
import AlertSnackBar from "../UIcomponents/Alert/AlertSnackBar";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material";

const imageDivStyle = {
  // display: "inline-block",
  width: "100%",
  height: "100%",
  text: "center",
};

const DetailHero = (props) => {
  const notifyCtx = useContext(NotifyContext);

  const theme = useTheme();

  const ImageComponent = styled("img")({
    // original code
    // width: "100%",
    // height: "100%",
    width: "302px",
    height: "248px",
    padding: "0.5rem",
    // original code
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
  }, []);

  return (
    <div>
      <TitleUI title={props.name} />
      <Box textAlign="center">
        <ImageComponent src={props.imageUrl} alt="product" />
      </Box>
    </div>
  );
};

export default DetailHero;
