'use strict'

import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import { Text } from 'react-native';
import { Actions, DefaultRenderer } from 'react-native-router-flux';



export default class Navigator extends Component {

    render() {
        const state = this.props.navigationState;
        const children = state.children;
        return (
            <Drawer ref="navigation" open={state.open} content={<Text>Navigation Menu</Text>} >
              <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
            </Drawer>
        );
    }
}

