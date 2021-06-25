import { configureStore } from '@reduxjs/toolkit';
//import reducers
import rootReducer from './reducers/rootReducer';


const preloadedState = {
     products: [],
     cart: [],
     cartOpen: false,
     categories: [],
     currentCategory: ''
};

const store = configureStore(rootReducer, preloadedState);

export default store;