import {
    START_PRODUCTS_LOADING,
    END_PRODUCTS_LOADING,
    SET_PRODUCTS
} from '../action-types'

const initialState = {
    products: [],
    isLoading: false,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS : {
            return {
                ...state,
                products: action.payload
            }
        }

        case START_PRODUCTS_LOADING : {
            return {
                ...state,
                isLoading: true
            }
        }
        case END_PRODUCTS_LOADING : {
            return {
                ...state,
                isLoading: false
            }
        }

        default: return state;
    }
}

export default reducer