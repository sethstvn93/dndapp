'use strict'

import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-native-redux-router';

import Navigator from './components/navigator';
import AppRouter from './router';

const store = createStore(combineReducers({ routerReducer }));

export default class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <AppRouter />
            </Provider>
        );
    }
}