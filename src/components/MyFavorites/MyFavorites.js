import { useContext, useEffect } from "react";
import NotifyContext from "../../contexts/notify-context";
import ContainerUI from "../UIcomponents/Container/ContainerUI";
import TitleUI from "../UIcomponents/Title/TitleUI";
import FavoritesList from "./FavoritesList";
import Box from "@mui/material/Box";
import MoveNextButton from "../UIcomponents/Buttons/MoveNextButton";
import AlertSnackBar from "../UIcomponents/Alert/AlertSnackBar";

const MyFavorites = () => {
  const notifyCtx = useContext(NotifyContext);

  useEffect(() => {
    notifyCtx.resetNotification();
  }, []);

  return (
    <ContainerUI>
      <TitleUI title="Favorites" />
      <Box padding="0.5rem 0">
        <FavoritesList />
      </Box>
      <Box textAlign="center" marginTop={2}>
        <MoveNextButton label="ADDMORE" link="/" />
      </Box>
      {/* {notifyCtx.isNotifying && <AlertSnackBar sx={{ width: "100%" }} />} */}
    </ContainerUI>
  );
};

export default MyFavorites;
