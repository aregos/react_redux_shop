import * as R from 'ramda'
import {
    ADD_GOOD_TO_CART,
    CLEAR_CART,
    REMOVE_ONE_GOOD_FROM_CART,
    REMOVE_GOOD_FROM_CART,
} from '../actionTypes'

const initialState = {
    addedIds : [],
    quantityById : [],
}

const addedIds = (state = initialState.addedIds, {type, payload}) => {
    switch (type) {
        case ADD_GOOD_TO_CART:
            return R.append(payload, state)
        case REMOVE_GOOD_FROM_CART:
            return R.without(R.of(payload), state)
        case CLEAR_CART:
            return []
        default:
            return state
    }
}

const quantityById = (state = initialState.quantityById, {type, payload}) => {
    switch (type) {
        case ADD_GOOD_TO_CART:
            const id = payload
            return {
                ...state,
                [id]: (state[id] || 0) + 1
            }
        case REMOVE_ONE_GOOD_FROM_CART:
            return {
                ...state,
                [payload] : (state[payload] || 0) - 1
            }
        case REMOVE_GOOD_FROM_CART:
            return {
                ...state,
                [payload]: 0
            }
        case CLEAR_CART:
            return []
        default:
            return state
    }
}

export const getAddedIds = state => state.addedIds

export const getQuantityById = (state,id) => state.quantityById[id] || 0

export default (state = initialState, action) =>{
    switch (action) {
        default:
            return {
                addedIds: addedIds(state.addedIds, action),
                quantityById: quantityById(state.quantityById, action)
            }
    }
}
