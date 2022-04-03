const UserReducer = (state, action) => {
  switch (action.type) {
    case "REGISTER": {
      console.log(action.payload);
      return state;
    }
    case "UPDATE": {
      return state;
    }
  }
};

export default UserReducer;
