import AuthForm from "../components/Auth/AuthForm";
import MainHeader from "../components/Header/MainHeader";
import { Fragment } from "react";

const AuthPage = () => {
  return (
    <Fragment>
      <MainHeader />
      <AuthForm btnLabel="SIGN IN" title="Sign In" isSignUp={false} />
    </Fragment>
  );
};

export default AuthPage;
