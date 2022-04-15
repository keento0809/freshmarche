import { useState, useContext, useEffect, useCallback } from "react";
import AuthContext from "./auth-context";

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjustExpirationTime = new Date(expirationTime).getTime();

  const remainingDuration = adjustExpirationTime - currentTime;
  return remainingDuration;
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpirationTime = localStorage.getItem("expirationTime");

  const remainingTime = calculateRemainingTime(storedExpirationTime);

  if (remainingTime <= 3600) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
  };
};

let logoutTimer;

const AuthProvider = (props) => {
  const tokenData = retrieveStoredToken();
  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }
  const [token, setToken] = useState(initialToken);
  // original code
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // test
  const userIsLoggedIn = !!token;

  const handleLogout = useCallback(() => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    localStorage.removeItem("expirationTime");
    // setIsLoggedIn(false);

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const handleLogin = (idToken, expirationTime) => {
    setToken(idToken);
    localStorage.setItem("token", idToken);
    localStorage.setItem("expirationTime", expirationTime);

    const remainingTime = calculateRemainingTime(expirationTime);

    logoutTimer = setTimeout(handleLogout, remainingTime);
    console.log("login complete");
  };

  useEffect(() => {
    if (tokenData) {
      console.log(tokenData.duration);
      logoutTimer = setTimeout(handleLogout, tokenData.duration);
    }
  }, [tokenData, handleLogout]);

  const authContext = {
    token: token,
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
