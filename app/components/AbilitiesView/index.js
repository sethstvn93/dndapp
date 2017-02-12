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
import StrengthDescriptionModal from '../StrengthDescriptionModal';
import DexterityDescriptionModal from '../DexterityDescriptionModal';
import ConstitutionDescriptionModal from '../ConstitutionDescriptionModal';
import IntelligenceDescriptionModal from '../IntelligenceDescriptionModal';
import WisdomDescriptionModal from '../WisdomDescriptionModal';
import CharismaDescriptionModal from '../CharismaDescriptionModal';

import styles from './styles';

export default class AbilitiesView extends Component {

  render() {
    return (
      <View style={styles.main} >
        <AbilityCard
            icon={StrengthIcon}
            abilityName="STR"
            ability={this.props.abilities.strength}
            descriptionModal={StrengthDescriptionModal} />
        <AbilityCard
            icon={DexterityIcon}
            abilityName="DEX"
            ability={this.props.abilities.dexterity}
            descriptionModal={DexterityDescriptionModal} />
        <AbilityCard
            icon={ConstitutionIcon}
            abilityName="CON"
            ability={this.props.abilities.constitution}
            descriptionModal={ConstitutionDescriptionModal} />
        <AbilityCard
          icon={IntelligenceIcon}
          abilityName="INT"
          ability={this.props.abilities.intelligence}
          descriptionModal={IntelligenceDescriptionModal} />
        <AbilityCard
          icon={WisdomIcon}
          abilityName="WIS"
          ability={this.props.abilities.wisdom}
          descriptionModal={WisdomDescriptionModal} />
        <AbilityCard
          icon={CharismaIcon}
          abilityName="CHA"
          ability={this.props.abilities.charisma}
          descriptionModal={CharismaDescriptionModal} />
      </View>
    );
  }
}

AbilitiesView.propTypes = {
  abilities: React.PropTypes.object
}
