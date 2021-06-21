import React, { createContext, useContext } from 'react';
import { useProductReducer } from './reducers';

//Any time we run createContext, create a new StoreContext object
const StoreContext = createContext();
//StoreContext has Provider and Consumer, we need Provider to store all state data and make it available as a prop to components
const { Provider } = StoreContext;


const StoreProvider = ({ value = [], ...props }) => {
     const [state, dispatch] = useProductReducer({
          products: [],
          categories: [],
          currentCategory: '',
     });

     //confirm reducer is working by logging most up to date version of global state object
     console.log(state);
     return <Provider value={[state, dispatch]} {...props} />;
};

//When this function is executed, we receive [state, dispatch] from StoreProvider
//Any component that has access to StoreProvider can read data in [state] and update it with [dispatch]
const useStoreContext = () => {
     return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };