import { useContext, useEffect } from "react";
import NotifyContext from "../../contexts/notify-context";
import ContainerUI from "../UIcomponents/Container/ContainerUI";
import TitleUI from "../UIcomponents/Title/TitleUI";
import FavoritesList from "./FavoritesList";
import Box from "@mui/material/Box";
import MoveNextButton from "../UIcomponents/Buttons/MoveNextButton";
import AlertSnackBar from "../UIcomponents/Alert/AlertSnackBar";
import { useTheme } from "@mui/material";

const MyFavorites = () => {
  const notifyCtx = useContext(NotifyContext);

  const theme = useTheme();

  useEffect(() => {
    notifyCtx.resetNotification();
  }, []);

  return (
    <ContainerUI>
      <TitleUI title="Favorites" />
      <Box
        sx={{
          padding: "0.5rem 0",
          [theme.breakpoints.up(900)]: { width: "70%", mx: "auto" },
          [theme.breakpoints.up(1300)]: { width: "58%", mx: "auto" },
        }}
      >
        <FavoritesList />
        <Box textAlign="center" marginTop={4}>
          <MoveNextButton label="ADDMORE" link="/" />
        </Box>
      </Box>
      <Box
        sx={{
          fontWeight: "bold",
          width: "95%",
          mx: "auto",
          position: "fixed",
          bottom: "100px",
          left: "2%",
        }}
      >
        {notifyCtx.isNotifying && <AlertSnackBar sx={{ width: "100%" }} />}
      </Box>
    </ContainerUI>
  );
};

export default MyFavorites;
