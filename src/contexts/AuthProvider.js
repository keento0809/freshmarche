import { useState, useContext } from "react";
import AuthContext from "./auth-context";

const AuthProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  // original code
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // test
  const userIsLoggedIn = !!token;

  const handleLogin = (idToken) => {
    setToken(idToken);
    localStorage.setItem("token", idToken);
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    // setIsLoggedIn(false);
  };

  const authContext = {
    token: token,
    // original code
    // isLoggedIn: isLoggedIn,
    // test
    isLoggedIn: userIsLoggedIn,
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
