import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";
import categoryReducer from "./categoryReducer";

const initialState = {
     products: [],
     cart: [],
     cartOpen: false,
     categories: [],
     currentCategory: '',
};

const rootReducer = combineReducers({
  //each reducer only sees and manages its own chunk of the whole global state
  //value of state.cart is whatever cartReducer returns
  cart: cartReducer,
  //value of state.product is whatever productReducer returns
  product: productReducer,
  //value of state.category is whatever categoryReducer returns
  category: categoryReducer,
});


export default rootReducer;