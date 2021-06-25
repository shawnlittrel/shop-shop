
import cartReducer from '../state/reducers/cartReducer';
import categoryReducer from '../state/reducers/categoryReducer';
import productReducer from '../state/reducers/productReducer';

const initialState = {
  products: [],
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
  cartOpen: false,
  categories: [{ name: 'Food' }],
  currentCategory: '1',
};

test('UPDATE_PRODUCTS', () => {
  const action = { 
    type: 'UPDATE_PRODUCTS', 
    products: [{},{}]
  }

  const newState = productReducer(initialState, action)

  expect(newState.products.length).toBe(2);
  expect(initialState.products.length).toBe(0);
  });




test('ADD_TO_CART', () => {
  const action = {
    type: 'ADD_TO_CART',
    product: {
      _id: '3',
      name: 'Soup',
      purchaseQuantity: 1
    },
  }
  
  let newState = cartReducer(initialState, action)

  expect(newState.cart.length).toBe(3);
  expect(initialState.cart.length).toBe(2);
});

test('UPDATE_CART_QUANTITY', () => {
  const action = {
    type: 'UPDATE_CART_QUANTITY',
    _id: '1', 
    purchaseQuantity: 3
  }

  const newState = cartReducer(initialState, action)

  expect(newState.cartOpen).toBe(true);
  expect(newState.cart[0].purchaseQuantity).toBe(3);
  expect(newState.cart[1].purchaseQuantity).toBe(2);
  expect(initialState.cartOpen).toBe(false);
});

test('REMOVE_FROM_CART', () => {
  const action1 = {
    type: 'REMOVE_FROM_CART',
    _id: '1'
  }

  let newState1 = cartReducer(initialState, action1)

  expect(newState1.cartOpen).toBe(true);
  expect(newState1.cart.length).toBe(1);
  expect(newState1.cart[0]._id).toBe('2');

  const action2 = {
    type: 'REMOVE_FROM_CART',
    _id: '2'
  }

  let newState2 = cartReducer(newState1, action2)

  expect(newState2.cartOpen).toBe(false);
  expect(newState2.cart.length).toBe(0);

  expect(initialState.cart.length).toBe(2);
});

test('ADD_MULTIPLE_TO_CART', () => {
  const action = {
    type: 'ADD_MULTIPLE_TO_CART',
    products: [{}, {}]
  }

  let newState = cartReducer(initialState, action)

  expect(newState.cart.length).toBe(4);
  expect(initialState.cart.length).toBe(2);
});

test('UPDATE_CATEGORIES', () => {
  const action = {
    type: 'UPDATE_CATEGORIES',
    categories: [{}, {}]
  }

  let newState = categoryReducer(initialState, action)

  expect(newState.categories.length).toBe(2);
  expect(initialState.categories.length).toBe(1);
});

test('UPDATE_CURRENT_CATEGORY', () => {
  const action = {
    type: 'UPDATE_CURRENT_CATEGORY',
    currentCategory: '2'
  }

  let newState = categoryReducer(initialState, action)

  expect(newState.currentCategory).toBe('2');
  expect(initialState.currentCategory).toBe('1');
});

test('CLEAR_CART', () => {
  const action = {
    type: 'CLEAR_CART'
  }

  let newState = cartReducer(initialState, action)

  expect(newState.cartOpen).toBe(false);
  expect(newState.cart.length).toBe(0);
  expect(initialState.cart.length).toBe(2);
});

test('TOGGLE_CART', () => {
const action = {
    type: 'TOGGLE_CART'
  }

  let newState1 = cartReducer(initialState, action)

  expect(newState1.cartOpen).toBe(true);
  expect(initialState.cartOpen).toBe(false);
  
  let newState2 = cartReducer(newState1, action)

  expect(newState2.cartOpen).toBe(false);
});