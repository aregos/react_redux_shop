import * as R from 'ramda'
import * as fromCart from './reducers/cart'


export const getGoodById = (state, id) => R.prop(id, state.goods)

export const getGoods = state => {
    const goods = state.goodsPage.ids.map(id=>({
        ...getGoodById(state,id),
        quantity : getQuantity(state, id)
    }))
    return goods
}


export const getQuantity = (state, id) => fromCart.getQuantityById(state.cart, id)

const getAddedIds = state => fromCart.getAddedIds(state.cart)

const getPriceOfGood = (state, id) => getGoodById(state,id).price * getQuantity(state,id)

export const getPriceOfAllGoods = (state) => R.sum(
                                                R.values(
                                                    R.uniq(getAddedIds(state).map(id=>getPriceOfGood(state,id)))))

export const getCartGoodsWithQuantity = state =>
    R.uniq(getAddedIds(state).map(id => ({
            ...getGoodById(state, id),
            quantity: getQuantity(state, id),
            priceOfGood : getPriceOfGood(state,id)
        }))
    )
