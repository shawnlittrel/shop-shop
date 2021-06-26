import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";
import categoryReducer from "./categoryReducer";
import cartOpenReducer from './cartOpenReducer';
import currentCategoryReducer from './currentCategoryReducer';


const rootReducer = combineReducers({
  //each reducer only sees and manages its own chunk of the whole global state
  //value of state.cart is whatever cartReducer returns
  cart: cartReducer,
  //state.cartOpen comes from cartOpenReducer
  cartOpen: cartOpenReducer,
  //value of state.product is whatever productReducer returns
  product: productReducer,
  //value of state.category is whatever categoryReducer returns
  category: categoryReducer,
  //state.currentCategory comes from currentCategoryReducer
  currentCategory: currentCategoryReducer
});


export default rootReducer;