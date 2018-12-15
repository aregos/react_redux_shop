import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchGoods, addGoodToCart, addFilter} from '../../actions'
import {getGoods} from '../../selectors'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import cart from '../cart'

class Goods extends Component{
    componentDidMount() {
        this.props.fetchGoods()
    }

renderGood(good, index){
    const {addGoodToCart} = this.props
    return (
        <div className="col-sm-4 col-lg-4 col-md-4 " key = {index}>
            <div className="thumbnail">
                <div className="row">
                    <div className="col-md-3">
                        <span className="text-sm-center font-weight-bold">{good.title}</span>
                    </div>
                    <div className="col-md-3">
                        <span className="text-sm-center font-weight-bold">${good.price}</span>
                    </div>
                    <div className="col-md-3">
                        <span className="text-sm-center font-weight-bold">{good.quantity}</span>
                    </div>
                    <div className="col-md-3">
                    <p>
                        <button
                        className="btn btn-primary"
                        onClick={() => addGoodToCart(good.id)}
                        >+
                        </button>
                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

render(){
    const {goods,addFilter} = this.props
    return(
        <Router>
    <div>
        <Route path="/" exact render={
            () => {
                return (
                    <div className="align-content-center container-fluid offset-md-4">
                        <div className="row">
                            <div className="col-md-6">
                                <input type = "text"
                                       className="form-control"
                                       placeholder="введите часть названия товара"
                                       onChange={(e) => addFilter(e.target.value)}  />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-1"><span className="text-sm-center font-weight-bold">Название</span></div>
                            <div className="col-md-1"><span className="text-sm-center font-weight-bold">Цена</span></div>
                            <div className="col-md-1"><span className="text-sm-center font-weight-bold">Количество</span></div>
                        </div>
                <div>
                    {goods.map((good, index) => this.renderGood(good, index))}
                </div>
                        <nav>
                            <button>
                            <Link to='/cart'>Корзина</Link>
                            </button>
                        </nav>
                    </div>
            )
            }
            }/>
        <Route path='/cart' component={cart} />
    </div>
        </Router>
)
}
}

const mapStateToProps = state => ({
      goods : getGoods(state)
})

const mapDispatchToProps = {
    fetchGoods,
    addGoodToCart,
    addFilter,
}
export default connect(mapStateToProps, mapDispatchToProps)(Goods)