import { createStore } from 'redux';
//import reducers
import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
import productReducer from "./reducers/productReducer";
import categoryReducer from "./reducers/categoryReducer";
import currentCategoryReducer from './reducers/currentCategoryReducer';
import cartOpenReducer from './reducers/cartOpenReducer';


const preloadedState = {
  cart: [],
  cartOpen: false,
  categories: [],
  currentCategory: "",
  products: [],
};

const rootReducer = combineReducers({
  //each reducer only sees and manages its own chunk of the whole global state
  //value of state.cart is whatever cartReducer returns
  cart: cartReducer,
  //state.cartOpen comes from cartOpenReducer
  cartOpen: cartOpenReducer,
  //value of state.product is whatever productReducer returns
  products: productReducer,
  //value of state.category is whatever categoryReducer returns
  categories: categoryReducer,
  //state.currentCategory comes from currentCategoryReducer
  currentCategory: currentCategoryReducer
});


const store = createStore(rootReducer, preloadedState);

export default store;