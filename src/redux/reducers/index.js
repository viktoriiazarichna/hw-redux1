import {
    START_PRODUCTS_LOADING,
    END_PRODUCTS_LOADING,
    SET_PRODUCTS
} from '../action-types'

import {combineReducers} from 'redux';

import productsReducer from './products-reducer'


import cartReducer from './cart-reducer'
import wishlistReducer from './wishlist-reducer'






export const reducer = combineReducers({

    products: productsReducer,

    cart: cartReducer,
    wishlist: wishlistReducer,
})