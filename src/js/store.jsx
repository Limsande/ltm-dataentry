import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk';
import { reducer as api, setAxiosConfig } from 'redux-json-api';

const reducer = combineReducers({
    api
});

const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch(setAxiosConfig({
    baseURL: 'http://localhost:3000'
}));

export default store;