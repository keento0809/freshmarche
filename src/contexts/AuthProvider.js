import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "./user-context";
import AuthContext from "./auth-context";

const AuthProvider = (props) => {
  const [token, setToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const history = useHistory();

  // const userCtx = useContext(UserContext);

  const handleLogin = (idToken) => {
    console.log("Set !! ", idToken);
    setToken(idToken);
    setIsLoggedIn(true);
    history.replace("/");
    // userCtx.registerNewUser(userInfo);
  };

  const handleLogout = () => {
    setToken(null);
    setIsLoggedIn(false);
  };

  const authContext = {
    token: token,
    isLoggedIn: isLoggedIn,
    login: handleLogin,
    logout: handleLogout,
  };

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
