'use strict'

import React, { Component } from 'react';
import { View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import CombatActionsView from './components/combat-actions-view';
import NavigationDrawer from './components/navigation-drawer';
import DevTools from './components/dev-tools';
import reducers from './reducers';
//import AppRouter from './router';

const RouterWithRedux = connect()(Router);


const store = createStore(reducers);

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="drawer" component={NavigationDrawer} open={false}>
            <Scene key="main" tabs={true}>
              <Scene key="combatActions" component={CombatActionsView} title="Combat Actions" initial={true} />
              <Scene key="devTools" component={DevTools} />
            </Scene>
          </Scene>
        </RouterWithRedux>
       </Provider>
    );
  }
}
