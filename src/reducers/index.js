import {combineReducers} from 'redux'
import goods from './goods'
import goodsPage from './goodsPage'
import cart from './cart'
import filter from './filter'

export default combineReducers({
    goods,
    goodsPage,
    cart,
    filter
})