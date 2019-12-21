import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, combineReducers} from 'redux'

import * as reducers from "./model/reducer.js"
import {data} from "./model/data/initialState.js"

import App from './App'
import * as serviceWorker from './serviceWorker'

import './index.css'

const reducer = combineReducers(reducers, data)
const store = createStore(reducer, loadState())

const saveState = () => {
	let saved = JSON.stringify(store.getState())
	if(!localStorage.templater){
		localStorage.setItem("templater", saved)
	} else {
		localStorage.templater = saved
	}
}

function loadState() {
	let loaded = data

	if(localStorage.templater !== undefined){
		loaded = JSON.parse(localStorage.templater)
	}

	return loaded
}

store.subscribe(saveState)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
// serviceWorker.unregister();
