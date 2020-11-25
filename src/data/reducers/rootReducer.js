import { combineReducers } from "redux";
import itemsReducer from "./itemsReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  items: itemsReducer,
  cart: cartReducer,
});

// const rootReducer = (state, action) => {
//   if (action.type === "RESET") {
//     state = undefined;
//   }
//   return appReducer(state, action);
// };

export default rootReducer;
