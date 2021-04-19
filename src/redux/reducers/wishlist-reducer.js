import {
    ADD_PRODUCT_TO_WISHLIST,
    REMOVE_PRODUCT_FROM_WISHLIST,
} from '../action-types';


const initFromLs = localStorage.getItem('wishlist')

const initialState = initFromLs ? JSON.parse(initFromLs) : {
    productsInWishlist: [],

}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_WISHLIST : {
            return {
                ...state,
                productsInWishlist: [...state.productsInWishlist, action.payload]

            }
        }

        case REMOVE_PRODUCT_FROM_WISHLIST : {
            return {
                ...state,
                productsInWishlist: [...state.productsInWishlist.filter (el => action.payload !== el)]
                
            }
        }
        default:
            return state;

    }
}

export default reducer