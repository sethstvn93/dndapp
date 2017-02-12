'use strict'

import React, { Component } from 'react';
import { View } from 'react-native';

import AbilityCard from '../AbilityCard';
import {
  StrengthIcon,
  DexterityIcon,
  ConstitutionIcon,
  IntelligenceIcon,
  WisdomIcon,
  CharismaIcon
} from '../Icons';
import styles from './styles';

export default class AbilitiesView extends Component {

  render() {
    return (
      <View style={styles.main} >
        <AbilityCard icon={StrengthIcon} abilityName="STR" ability={this.props.abilities.strength} />
        <AbilityCard icon={DexterityIcon} abilityName="DEX" ability={this.props.abilities.dexterity} />
        <AbilityCard icon={ConstitutionIcon} abilityName="CON" ability={this.props.abilities.constitution} />
        <AbilityCard icon={IntelligenceIcon} abilityName="INT" ability={this.props.abilities.intelligence} />
        <AbilityCard icon={WisdomIcon} abilityName="WIS" ability={this.props.abilities.wisdom} />
        <AbilityCard icon={CharismaIcon} abilityName="CHA" ability={this.props.abilities.charisma} />
      </View>
    );
  }
}

AbilitiesView.propTypes = {
  abilities: React.PropTypes.object
}
