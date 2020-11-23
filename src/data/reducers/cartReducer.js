import { initCart } from "./initial";
import updateCart from "./functions/updateCart";
import checkForOffers from "./functions/checkForOffers";

const cartReducer = (state = initCart, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return checkForOffers(updateCart(state, action.payload));

    default:
      return state;
  }
};

export default cartReducer;
