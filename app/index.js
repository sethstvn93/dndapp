'use strict'

import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';

import CombatActionsView from './components/CombatActionsView';
import NavigationDrawer from './components/NavigationDrawer';
import configureStore from './store/configureStore';

const RouterWithRedux = connect()(Router);

const store = configureStore();

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux hideNavBar>
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
