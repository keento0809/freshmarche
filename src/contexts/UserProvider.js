import React, { useReducer } from "react";
import UserContext from "./user-context";
import { registerNewUser, updateUserInfo } from "../actions/user-action";
import UserReducer from "../reducers/UserReducer";

const initialState = {
  userInfo: {
    // default code
    id: "u1",
    username: "Dummy John",
    address: "816 Granville St. Vancouver BC",
    email: "sample@sample.com",
    password: "***********",

    // id: "u1",
    // username: "",
    // address: "",
    // email: "",
    // password: "",
  },
};

const UserProvider = (props) => {
  const [userState, dispatchAction] = useReducer(UserReducer, initialState);

  const handleRegisterNewUser = (userInfo) => {
    dispatchAction(registerNewUser(userInfo));
  };

  const handleUpdateUserInfo = (userId) => {
    dispatchAction(updateUserInfo(userId));
  };

  const userContext = {
    userInfo: userState.userInfo,
    registerNewUser: handleRegisterNewUser,
    updateUserInfo: handleUpdateUserInfo,
  };
  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
