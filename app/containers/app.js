'use strict'

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { routerReducer } from 'react-native-redux-router';

const store = createStore(combineReducers({ routerReducer }));

export default class App extends Component {

    render() {
        return (
            <View>
                <Text>Test</Text>
            </View>
        )
    }
}