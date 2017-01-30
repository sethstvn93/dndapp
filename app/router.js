'use strict'

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { Actions, Router, Scene } from 'react-native-router-flux';

import Navigator from './components/navigator';
import CombatActionsView from './components/combat-actions-view';
import DevTools from './components/dev-tools';

const scenes = Actions.create(
    <Scene key="drawer" component={Navigator} open={false}>
      <Scene key="main" tabs={true}>
        <Scene key="combatActions" component={CombatActionsView} title="Combat Actions" initial={true} />
      </Scene>
      {//<Scene key="devTools" component={DevTools} />}
    </Scene>
)

export default class AppRouter extends Component {

    render() {
        return (
            <Router scenes={scenes} />
        );
    }
}
