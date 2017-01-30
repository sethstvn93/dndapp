'use strict'

import React, { Component } from 'react';
import { View } from 'react-native';
import { Router  } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import Navigator from './components/navigator';
import reducers from './reducers';
//import AppRouter from './router';

const RouterWithRedux = connect()(Router);


const store = createStore(reducers);

export default class App extends Component {

  render() {
    return (
        <Provider store={store}>
          <RouterWithRedux>
            <Scene key="drawer" component={Navigator} open={false}>
              <Scene key="main" tabs={true}>
                <Scene key="combatActions" component={CombatActionsView} title="Combat Actions" initial={true} />
              </Scene>
            </Scene>
            {//<Scene key="devTools" component={DevTools} />}
          </RouterWithRedux>
          </Provider>
        );
  }
}
