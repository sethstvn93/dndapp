'use strict'

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

import MenuItem from '../MenuItem';

export default class NavigationDrawerContent extends Component {

  render() {
    return (
      <View>
        <MenuItem action={Actions.combatActions} text="Combat Actions" />
        <Text onPress={Actions.devTools}>Developer Tools</Text>
      </View>
    );
  }
}