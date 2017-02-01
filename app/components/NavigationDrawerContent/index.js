'use strict'

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class NavigationDrawerContent extends Component {

  render() {
    return (
      <View>
        <Text onPress={Actions.combatActions}>Combat Actions</Text>
        <Text onPress={Actions.devTools}>Developer Tools</Text>
      </View>
    );
  }
}