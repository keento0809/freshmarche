import { useState, useContext } from "react";
import UserContext from "./user-context";
import AuthContext from "./auth-context";

const AuthProvider = (props) => {
  const [token, setToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const userCtx = useContext(UserContext);

  const handleLogin = (idToken) => {
    console.log("Set !! ", idToken);
    setToken(idToken);
    setIsLoggedIn(true);
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
