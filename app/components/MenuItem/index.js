'use strict'

import React, { Component } from 'react';
import { TouchableNativeFeedback, View, Text } from 'react-native';

import styles from './styles';

export default class MenuItem extends Component {

  render() {
    return (
      <TouchableNativeFeedback onPress={this.props.action}>
        <View style={styles.menuItem}>
          <View style={this.props.active ? styles.activeIndicatorActive : styles.activeIndicatorInactive} />
          <Text style={styles.text}>{this.props.text}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

MenuItem.propTypes = {
  text: React.PropTypes.string.isRequired,
  action: React.PropTypes.func,
  active: React.PropTypes.bool
}