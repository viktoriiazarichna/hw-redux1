import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {reducer} from './reducers';


const logger = (store) => (next) => (action) => {
    const result = next(action);
    console.log( result);

    console.log('next state', store.getState())

    return result
}


const persister = (store) => (next) => (action) => {
    next(action)

    const {wishlist, cart} = store.getState();

    localStorage.setItem('wishlist', JSON.stringify(wishlist) )
    localStorage.setItem('cart', JSON.stringify(cart) )
}

const middlewares = [thunk, persister];

export const store = createStore(

    reducer,
    applyMiddleware(...middlewares)

    )


