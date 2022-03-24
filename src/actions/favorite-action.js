export const addAction = (value) => {
  console.log("Dispatching action.....");
  return { type: "ADD", payload: value };
};

export const removeAction = (id) => {
  return { type: "REMOVE", payload: id };
};
