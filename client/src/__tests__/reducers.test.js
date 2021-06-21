//import actions -> possible actions we can use to update state
import {
     UPDATE_PRODUCTS,
     UPDATE_CATEGORIES,
     UPDATE_CURRENT_CATEGORY,
     ADD_TO_CART,
     ADD_MULTIPLE_TO_CART,
     REMOVE_FROM_CART,
     UPDATE_CART_QUANTITY,
     CLEAR_CART,
     TOGGLE_CART
} from '../utils/actions';

//import reducer functions -> functions that will update state given a set of switch cases
import { reducer } from '../utils/reducers';


//create sameple of what global state will look like -> how global state is structured
const initialState = {
     products: [],
     categories: [{ name: 'Food' }],
     currentCategory: '1',
     cart: [
          {
               _id: '1',
               name: 'Soup',
               purchaseQuantity: 1
          },
          {
               _id: '2',
               name: 'Bread',
               purchaseQuantity: 2
          }
     ],
     cartOpen: false
   };
   


//create a new state object with reducer function
test('UPDATE_PRODUCTS', () => {
     let newState = reducer(initialState, {
       type: UPDATE_PRODUCTS,
       products: [{}, {}]
     });
   
     //we added 2 new objects to products, so new length should be 2
     expect(newState.products.length).toBe(2);

     //initial object should remain the same
     expect(initialState.products.length).toBe(0);
   });

//create new state object by updating categories
test('UPDATE_CATEGORIES', () => {
     //add a new category to whats in initial state
     let newState = reducer(initialState, {
          type: UPDATE_CATEGORIES,
          categories: [{}, {}]
     });

     //new state object should have 2 categories
     expect(newState.categories.length).toBe(2);
     //old state object should still have 1 category
     expect(initialState.categories.length).toBe(1);
});

//create new state object by changing current category
test('UPDATE_CURRENT_CATEGORY', () => {
     let newState = reducer(initialState, {
          type: UPDATE_CURRENT_CATEGORY,
          currentCategory: '2'
     });

     //new state should have moved to category #2
     expect(newState.currentCategory).toBe('2');
     //old state  should have stayed at category #1
     expect(initialState.currentCategory).toBe('1');
});

test('ADD_TO_CART', () => {
     let newState = reducer(initialState, {
          type: ADD_TO_CART,
          product: { purchaseQuantity: 1 }
     });

     expect(newState.cart.length).toBe(3);
     expect(initialState.cart.length).toBe(2)
});

test('ADD_MULTIPLE_TO_CART', () => {
     let newState = reducer(initialState, {
          type: ADD_MULTIPLE_TO_CART,
          products: [{}, {}]
     });

     expect(newState.cart.length).toBe(4);
     expect(initialState.cart.length).toBe(2);
});

test('REMOVE_FROM_CART', () => {
     let newState1 = reducer(initialState, {
          type: REMOVE_FROM_CART,
          _id: '1'
     });

     //cart is still open
     expect(newState1.cartOpen).toBe(true);

     //the second item shoudl now be the first
     expect(newState1.cart.length).toBe(1);
     expect(newState1.cart[0]._id).toBe('2');

     let newState2 = reducer(newState1, {
          type: REMOVE_FROM_CART,
          _id: '2'
     });

     //cart is empty and closed
     expect(newState2.cartOpen).toBe(false);
     expect(newState2.cart.length).toBe(0);

     expect(initialState.cart.length).toBe(2);
});

test('UPDATE_CART_QUANTITY', () => {
     let newState = reducer(initialState, {
          type: UPDATE_CART_QUANTITY,
          _id: '1',
          purchaseQuantity: 3
     });

     expect(newState.cartOpen).toBe(true);
     expect(newState.cart[0].purchaseQuantity).toBe(3);
     expect(newState.cart[1].purchaseQuantity).toBe(2);

     expect(initialState.cartOpen).toBe(false);
});

test('CLEAR_CART', () => {
     let newState = reducer(initialState, {
          type: CLEAR_CART
     });

     expect(newState.cartOpen).toBe(false);
     expect(newState.cart.length).toBe(0);
     expect(initialState.cart.length).toBe(2);
});

test('TOGGLE_CART', () => {
     let newState = reducer(initialState, {
          type: TOGGLE_CART
     });

     expect(newState.cartOpen).toBe(true);
     expect(initialState.cartOpen).toBe(false);

     let newState2 = reducer(newState, {
          type: TOGGLE_CART
     });

     expect(newState2.cartOpen).toBe(false);
});

