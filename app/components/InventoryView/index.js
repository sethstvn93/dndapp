'use strict'

import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default class InventoryView extends Component {

  render() {
    return (
      <View style={styles.main} >
        <Text>
          {JSON.stringify(this.props.inventory)}
        </Text>
      </View>
    );
  }
}

InventoryView.propTypes = {
  inventory: React.PropTypes.object
}