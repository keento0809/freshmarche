import AuthForm from "../components/Auth/AuthForm";
import MainHeader from "../components/Header/MainHeader";
import { Fragment } from "react";

const AuthPage = () => {
  return (
    <Fragment>
      <MainHeader />
      <AuthForm />
      {/* <MainFooter /> */}
    </Fragment>
  );
};

export default AuthPage;
