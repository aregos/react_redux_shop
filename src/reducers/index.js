import {combineReducers} from 'redux'
import goods from './goods'
import goodsPage from './goodsPage'
import cart from './cart'

export default combineReducers({
    goods,
    goodsPage,
    cart
})

