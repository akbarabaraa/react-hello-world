import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './container/Home/Home';
import {
    createStore
} from 'redux';
import {
    Provider
} from 'react-redux';

const globalState = {
    totalOrder: 0
}

//reducer
const rootReducer = (state = globalState, action) => {
    if (action.type === 'PLUS_ORDER') {
        return {
            ...state, //copy nilai sebelumnya
            totalOrder: state.totalOrder + 1
        }
    }
    if (action.type === 'MINUS_ORDER') {
        let totalOrder = 0;
        //jika nilai totalorder lebih besar dari 0 ,maka dapat melakukan operasi pengurangan
        if (state.totalOrder > 0) {
            totalOrder = state.totalOrder - 1
        }
        //jika nilainya lebih kecil dari 0, maka tidak bisa melakukan pengurangan dan nilai akan jadi default totalorder yaitu 0
        return {
            ...state, //copy nilai sebelumnya
            totalOrder: totalOrder
        }
    }
    return state;
}

//dispatching action

//store
const storeRedux = createStore(rootReducer);

ReactDOM.render( < Provider store = {
            storeRedux
        } > < Home / > < /Provider>, document.getElementById('root'));

        // If you want your app to work offline and load faster, you can change
        // unregister() to register() below. Note this comes with some pitfalls.
        // Learn more about service workers: https://bit.ly/CRA-PWA
        serviceWorker.unregister();