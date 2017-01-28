'use strict'

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { Actions, Router, Scene } from 'react-native-router-flux';

import Navigator from './components/navigator';
import CombatActionsView from './components/combat-actions-view';
import DevTools from './components/dev-tools';

const scenes = Actions.create(
    <Scene key="root">
        <Scene key="navigator" component={Navigator} open={true}>
            <Scene key="combatActions" component={CombatActionsView} title="Combat Actions" tabs={true} />
            <Scene key="devTools" component={DevTools} initial={true} />
        </Scene>
    </Scene>
)

export default class AppRouter extends Component {

    render() {
        return (
            <Router scenes={scenes} />
        );
    }
}