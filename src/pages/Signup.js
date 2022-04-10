import { Fragment } from "react";
import AuthForm from "../components/Auth/AuthForm";
import MainHeader from "../components/Header/MainHeader";

const Signup = () => {
  return (
    <Fragment>
      <MainHeader />
      <AuthForm
        btnLabel="CREATE ACCOUNT"
        title="Create Account"
        isSignUp={true}
      />
    </Fragment>
  );
};

export default Signup;
