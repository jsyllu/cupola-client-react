import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'jquery'
import "popper.js"
import './index.css'
import App from './App'
import {combineReducers, createStore} from "redux"
import {Provider} from "react-redux"
import saleListingReducer from "./reducers/sale-listing-reducer"
import rentalListingReducer from "./reducers/rental-listing-reducer"

const reducers = combineReducers({
    saleListingReducer,
    rentalListingReducer
})

const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
