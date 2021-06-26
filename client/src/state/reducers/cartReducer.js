const initialState = {

}

export default function cartReducer(state = initialState, action) {
     //look at the action that happened and determine how to update status

     switch (action.type) {
          case 'ADD_TO_CART':
               return {
                    ...state,
                    cartOpen: true,
                    cart: [...state.cart, action.product]
               };
          case 'ADD_MULTIPLE_TO_CART':
               return {
                    ...state,
                    cart: [state.cart, ...action.products]
               };
          case 'UPDATE_CART_QUANTITY':
               return {
                    ...state,
                    cartOpen: true,
                    cart: state.cart.map(product => {
                         if(action._id === product._id) {
                              product.purchaseQuantity = action.purchaseQuantity
                         }
                         return product
                    })
               };
          case 'REMOVE_FROM_CART':
               let newState = state.cart.filter(product => {
                    return product._id !== action._id;
               });

               return {
                    ...state,
                    cartOpen: newState.length > 0,
                    cart: newState
               };
          case 'CLEAR_CART':
               return {
                    ...state,
                    cartOpen: false,
                    cart: []
               };
          case 'TOGGLE_CART':
               return{
                    ...state,
                    cartOpen: !state.cartOpen
               };
          default:
               return{
                    ...state
               };
     }
};