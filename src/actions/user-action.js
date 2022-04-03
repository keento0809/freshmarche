export const registerNewUser = (userInfo) => {
  return {
    type: "REGISTER",
    payload: userInfo,
  };
};

export const updateUserInfo = (userId) => {
  return {
    type: "UPDATE",
    payload: userId,
  };
};
