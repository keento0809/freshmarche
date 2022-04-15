import AuthForm from "../components/Auth/AuthForm";
import MainHeader from "../components/Header/MainHeader";
import { Fragment, useContext } from "react";
import Box from "@mui/material/Box";
import NotifyContext from "../contexts/notify-context";
import AlertSnackBar from "../components/UIcomponents/Alert/AlertSnackBar";
import { useTheme } from "@mui/material/styles";

const AuthPage = () => {
  const notifyCtx = useContext(NotifyContext);

  const theme = useTheme();

  return (
    <Fragment>
      <MainHeader />
      <AuthForm btnLabel="SIGN IN" title="Sign In" isSignUp={false} />
      <Box
        sx={{
          width: "90%",
          mx: "auto",
          fontWeight: "bold",
          width: "95%",
          mx: "auto",
          position: "fixed",
          bottom: "90px",
          [theme.breakpoints.up("md")]: {
            bottom: "20px",
          },
          left: "2%",
        }}
      >
        {notifyCtx.isNotifying && <AlertSnackBar sx={{ width: "100%" }} />}
      </Box>
    </Fragment>
  );
};

export default AuthPage;
