'use strict'

import React, { Component } from 'react';
import { View } from 'react-native';

import CustomText from '../CustomText';
import styles from './styles';

export default class CombatActionsView extends Component {

    render() {
        return (
            <View style={styles.main} >
                <CustomText>This is the 'CombatActions' view.</CustomText>
            </View>
        );
    }
}
