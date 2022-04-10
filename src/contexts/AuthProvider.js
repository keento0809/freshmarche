import { useState, useContext } from "react";
import UserContext from "./user-context";
import AuthContext from "./auth-context";

const AuthProvider = (props) => {
  const [token, setToken] = useState(null);
  // original code
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // test
  // const userIsLoggedIn = !!token;

  const handleLogin = (idToken) => {
    setToken(idToken);
    // setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setToken(null);
    setIsLoggedIn(false);
  };

  const authContext = {
    token: token,
    // original code
    isLoggedIn: isLoggedIn,
    // test
    // isLoggedIn: userIsLoggedIn,
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
