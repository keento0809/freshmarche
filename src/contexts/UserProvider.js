import React, { useReducer } from "react";
import UserContext from "./user-context";
import { registerNewUser, updateUserInfo } from "../actions/user-action";
import UserReducer from "../reducers/UserReducer";

const initialState = {
  userInfo: {
    id: "u1",
    username: "Dummy John",
    address: "816 Granville St. Vancouver BC",
    email: "sample@sample.com",
    password: "***********",
  },
};

const UserProvider = (props) => {
  const [userState, dispatchAction] = useReducer(UserReducer, initialState);

  const handleRegisterNewUser = (user) => {
    dispatchAction(registerNewUser(user));
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
