import * as R from 'ramda'
import React from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {getCartGoodsWithQuantity, getPriceOfAllGoods} from "../../selectors"
import {
    removeOneGoodFromCart,
    removeGoodFromCart,
    clearCart
} from '../../actions'

const cart = ({goods, totalPrice, removeOneGoodFromCart, removeGoodFromCart, clearCart}) => {
    const isCartEmpty  = R.isEmpty(goods)

const renderContent = () => (
    <div>
        {isCartEmpty && <div>Ваша корзина пуста</div>}
        <div>
            <div className="row row-cart">
                <div className="col-md-1">Название</div>
                <div className="col-md-1">Стоимость</div>
                <div className="col-md-1">Количество</div>
            </div>
                {goods.map((good, index) => (
                    <div className="row row-cart" key={index}>
                        <div className="col-md-1">{good.title}</div>
                        <div className="col-md-1">${good.priceOfGood}</div>
                        <div className="col-md-1">{good.quantity}</div>
                        <div className="col-md-1">
                            <button onClick={() => removeOneGoodFromCart(good.id)}
                                    disabled={good.quantity < 1 ? "disabled" : ""}>
                            <span >
                                -
                            </span>
                            </button>
                        </div>
                        <div className="col-md-1">
                            <button onClick={() => removeGoodFromCart(good.id)}>
                            <span >
                                Удалить все
                            </span>
                            </button>
                        </div>
                    </div>
                ))
                }

        </div>
        {
            R.not(isCartEmpty) &&
                <div className="row">
                    <div className="col-md-4">
                        <b>Всего: </b>
                        ${totalPrice}
                    </div>
                </div>
        }
    </div>
)

    const renderSideBar = () => (
        <div className = "container-fluid">
            <div className="row">
                <div className="col-md-2">
            <button>
           <Link to="/">
               <span>Перейти в список товаров</span>
           </Link>
            </button>
                </div>
            {
                R.not(isCartEmpty) &&
                    <div className="col-md-2">
                        <button
                        onClick={clearCart}
                        className="btn btn-danger"
                        >
                        <span>
                            Очистить корзину
                        </span>
                        </button>
                    </div>
            }
            </div>
        </div>
)

    return(
        <div className="view-container offset-md-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {renderContent()}
                    </div>
                    </div>
                <div className="row">
                    <div className="col-md-12">
                        {renderSideBar()}
                    </div>
                 </div>
            </div>
        </div>
    )

}

const mapStateToProps = (state) => ({
    goods : getCartGoodsWithQuantity(state),
    totalPrice : getPriceOfAllGoods(state),
})

const mapDispatchToProps = {
    removeOneGoodFromCart,
    removeGoodFromCart,
    clearCart
}

export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(cart))