import AuthForm from "../components/Auth/AuthForm";
import MainHeader from "../components/Header/MainHeader";
import { Fragment, useContext } from "react";
import Box from "@mui/material/Box";
import NotifyContext from "../contexts/notify-context";
import AlertSnackBar from "../components/UIcomponents/Alert/AlertSnackBar";

const AuthPage = () => {
  const notifyCtx = useContext(NotifyContext);

  return (
    <Fragment>
      <MainHeader />
      <Box sx={{ width: "90%", mx: "auto" }}>
        {notifyCtx.isNotifying && <AlertSnackBar sx={{ width: "100%" }} />}
      </Box>
      <AuthForm btnLabel="SIGN IN" title="Sign In" isSignUp={false} />
    </Fragment>
  );
};

export default AuthPage;
