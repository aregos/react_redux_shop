import {
    FETCH_GOODS_START,
    FETCH_GOODS_SUCCESS,
    FETCH_GOODS_FAIL,
    FILTER_GOODS,
    ADD_GOOD_TO_CART,
    REMOVE_ONE_GOOD_FROM_CART,
    REMOVE_GOOD_FROM_CART,
    CLEAR_CART
} from '../actionTypes'

import {fetchGoods as fetchGoodsApi} from '../api/index'

export const fetchGoods = () => async dispatch => {
    dispatch({type : FETCH_GOODS_START})

    try {
        const goods = await fetchGoodsApi()
        dispatch({
            type : FETCH_GOODS_SUCCESS,
            payload : goods
        })
    }
    catch (err){
        dispatch({
            type : FETCH_GOODS_FAIL,
            payload : err,
            error : true
        })
    }
}

export const addFilter = filter => dispatch => {
    dispatch({
        type : FILTER_GOODS,
        payload : filter
    })
}

export const addGoodToCart = id => dispatch => {
    dispatch({
        type : ADD_GOOD_TO_CART,
        payload : id
    })
}
export const removeOneGoodFromCart = id => dispatch => {
    dispatch({
        type : REMOVE_ONE_GOOD_FROM_CART,
        payload : id
    })
}
export const removeGoodFromCart = id => dispatch => {
    dispatch({
        type : REMOVE_GOOD_FROM_CART,
        payload: id
    })
}

export const clearCart = () => dispatch => {
    dispatch({
        type: CLEAR_CART,
    })
}