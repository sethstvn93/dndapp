'use strict'

import React, { Component } from 'react';
import { Platform } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import { createStore, combineReducers, compose } from 'redux';
//import devTools from 'remote-redux-devtools';

import CombatActionsView from './components/CombatActionsView';
import NavigationDrawer from './components/NavigationDrawer';
import reducers from './reducers';

const RouterWithRedux = connect()(Router);

//const enhancer = devTools({
//  name: Platform.OS,
//  hostname: '192.168.0.6',
//  port: 8000
//});
const store = createStore(reducers);

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="drawer" component={NavigationDrawer} open={false}>
            <Scene key="main" tabs={true}>
              <Scene key="combatActions" component={CombatActionsView} title="Combat Actions" initial={true} />
            </Scene>
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}
