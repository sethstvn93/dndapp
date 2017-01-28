'use strict'

import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import { Text } from 'react-native';
import { Actions } from 'react-native-router-flux';



export default class Navigator extends Component {
    closeControlPanel = () => {
        this.drawer.close()
    };
    openControlPanel = () => {
        this.drawer.open()
    };

    render() {
        return (
            <Drawer ref={(ref) => this.drawer = ref} content={<Text>Navigation Menu</Text>} >
                <Text onPress={Actions.combatActions}>Combat Actions</Text>
            </Drawer>
        );
    }
}

