import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers/index'
import {Provider} from 'react-redux'
import Goods from './containers/goods'

export const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
))


ReactDOM.render(
    <Provider store = {store}>
       <Goods/>
    </Provider>,
    document.getElementById('root')
)