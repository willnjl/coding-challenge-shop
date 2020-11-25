import { initItems } from "./initial";
import updateItems from "./functions/updateItems";

const itemsReducer = (state = initItems, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return updateItems(state, action.payload);
    case "RESTART":
      return initItems;
    default:
      return state;
  }
};

export default itemsReducer;
