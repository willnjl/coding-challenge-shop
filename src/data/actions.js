export const addToCart = (item, quantity) => ({
  type: "ADD_TO_CART",
  payload: { item, quantity },
});
