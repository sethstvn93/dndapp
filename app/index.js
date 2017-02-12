'use strict'

import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';

import NavigationDrawer from './components/NavigationDrawer';
import CharacterView from './containers/CharacterView';
import StrengthDescriptionModal from './components/StrengthDescriptionModal';
import CombatActionsView from './components/CombatActionsView';
import api from './lib/api';
import configureStore from './store/configureStore';

const RouterWithRedux = connect()(Router);

const initialState = {
  character: api.getCharacterById(1)
}
const store = configureStore(initialState);

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux hideNavBar>
          <Scene key="drawer" component={NavigationDrawer} open={false}>
            <Scene key="main" tabs={true}>
              <Scene key="characterSheet" component={CharacterView} initial={true} />
              <Scene key="combatActions" component={CombatActionsView} title="Combat Actions" type="modal" />
            </Scene>
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}
