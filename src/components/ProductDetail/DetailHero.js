import { Fragment, useContext } from "react";
import NotifyContext from "../../contexts/notify-context";
import MainBoxUI from "../UIcomponents/Box/MainBox";
import TitleUI from "../UIcomponents/Title/TitleUI";
import AlertSnackBar from "../UIcomponents/Alert/AlertSnackBar";
import { styled } from "@mui/system";

const ImageComponent = styled("img")({
  width: "100%",
  height: "100%",
  minHeight: "200px",
  padding: "0.5rem",
  margin: "1.5rem 0",
});

const DetailHero = (props) => {
  const notifyCtx = useContext(NotifyContext);

  return (
    <div>
      {notifyCtx.isNotifying && <AlertSnackBar />}
      <TitleUI title={props.name} />
      <ImageComponent src={props.imageUrl} alt="product" />
    </div>
  );
};

export default DetailHero;
