//import actions -> possible actions we can use to update state
import {
     UPDATE_PRODUCTS,
     UPDATE_CATEGORIES,
     UPDATE_CURRENT_CATEGORY
} from '../utils/actions';

//import reducer functions -> functions that will update state given a set of switch cases
import { reducer } from '../utils/reducers';


//create sameple of what global state will look like -> how global state is structured
const initialState = {
     products: [],
     categories: [{ name: 'Food' }],
     currentCategory: '1',
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