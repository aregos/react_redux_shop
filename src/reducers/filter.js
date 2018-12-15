import {
    FILTER_GOODS
} from '../actionTypes'

const initialState = {
    filter : ''
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FILTER_GOODS:
            return {
                ...state,
                filter: payload
            }
        default:
            return state
    }
}