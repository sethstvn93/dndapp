'use strict'

import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import { Text } from 'react-native';
import { Actions, DefaultRenderer } from 'react-native-router-flux';

import DrawerContent from './drawer-content';

export default class NavigationDrawer extends Component {

    render() {
        const state = this.props.navigationState;
        const children = state.children;
        return (
            <Drawer ref="navigation"
                open={state.open}
                content={<DrawerContent />}
                openDrawerOffset={0.2}
                captureGestures={true}
                panOpenMask={0.05} >
              <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
            </Drawer>
        );
    }
}

