export const registerNewUser = (user) => {
  return {
    type: "REGISTER",
    payload: user,
  };
};

export const updateUserInfo = (userId) => {
  return {
    type: "UPDATE",
    payload: userId,
  };
};
