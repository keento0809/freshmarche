const UserReducer = (state, action) => {
  switch (action.type) {
    case "REGISTER": {
      const newUserInfo = {
        id: action.payload.id,
        username: action.payload.username,
        address: action.payload.address,
        email: action.payload.email,
        password: action.payload.password,
      };
      return newUserInfo;
    }
    case "UPDATE": {
      return state;
    }
  }
};

export default UserReducer;
