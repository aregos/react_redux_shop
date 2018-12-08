import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchGoods, addGoodToCart} from '../../actions'
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
                    <h4>{good.title}</h4>
                    </div>
                    <div className="col-md-3">
                    <h4>${good.price}</h4>
                    </div>
                    <div className="col-md-3">
                    <h4>{good.quantity}</h4>
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
        const {goods} = this.props
        return(
            <Router>
        <div>
            <Route path="/" exact render={
                () => {
                    return (

                        <div className="align-content-center container-fluid offset-md-4">
                            <div className="row">
                                <div className="col-md-1"><h4>Название</h4></div>
                                <div className="col-md-1"><h4>Цена</h4></div>
                                <div className="col-md-1"><h4>Количество</h4></div>

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
    addGoodToCart
}
export default connect(mapStateToProps, mapDispatchToProps)(Goods)