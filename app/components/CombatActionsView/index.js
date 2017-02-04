'use strict'

import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default class CombatActionsView extends Component {

    render() {
        return (
            <View style={styles.main} >
                <Text>This is the 'CombatActions' view.</Text>
            </View>
        );
    }
}
