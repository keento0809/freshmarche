export const addAction = (value) => {
  return { type: "ADD", payload: value };
};

export const removeAction = (id) => {
  return { type: "REMOVE", payload: id };
};
