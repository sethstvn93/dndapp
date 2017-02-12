'use strict'

import React, { Component } from 'react';
import { TouchableNativeFeedback, View, Text } from 'react-native';

import styles from './styles';

export default class AbilityCard extends Component {

  render() {
    const Icon = this.props.icon;
    const bonus = this.props.ability.bonus
    const modifier = (bonus > 0) ? `+${bonus}` : `${bonus}`

    return (
      <TouchableNativeFeedback>
        <View style={styles.main} >
          <TouchableNativeFeedback>
            <View style={styles.header} >
              <Icon scale={.5} fill="#77f" />
              <Text style={styles.title} >{this.props.abilityName}</Text>
            </View>
          </TouchableNativeFeedback>
          <Text style={styles.score} >{this.props.ability.score}</Text>
          <View style={styles.spacer} />
          <View style={styles.modifier} >
            <Text style={styles.modifierText} >
              {modifier}
            </Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

AbilityCard.propTypes = {
  icon: React.PropTypes.func.isRequired,
  abilityName: React.PropTypes.string.isRequired,
  ability: React.PropTypes.object.isRequired
}
