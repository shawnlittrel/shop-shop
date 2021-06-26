import { createStore } from 'redux';
//import reducers
import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
import productReducer from "./reducers/productReducer";
import categoryReducer from "./reducers/categoryReducer";


const rootReducer = combineReducers({
  //each reducer only sees and manages its own chunk of the whole global state
  //value of state.cart is whatever cartReducer returns
  cart: cartReducer,
  //value of state.product is whatever productReducer returns
  product: productReducer,
  //value of state.category is whatever categoryReducer returns
  category: categoryReducer,
});


const preloadedState = {
     products: [],
     cart: [],
     cartOpen: false,
     categories: [],
     currentCategory: ''
};

const store = createStore(rootReducer, preloadedState);

export default store;