export const addAction = (product) => {
  return {
    type: "ADD",
    payload: product,
  };
};

export const subtractAction = (product) => {
  return {
    type: "SUBTRACT",
    payload: product,
  };
};

export const removeAction = (id) => {
  return {
    type: "REMOVE",
    payload: id,
  };
};

export const resetAction = () => {
  return {
    type: "RESET",
  };
};
