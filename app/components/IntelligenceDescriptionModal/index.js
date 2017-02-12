'use strict'

import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default class IntelligenceDescriptionModal extends Component {

  render() {
    return (
      <View style={styles.main}>
        <Text>Description of Intelligence ability</Text>
      </View>
    );
  }
}
