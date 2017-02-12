'use strict'

import React, { Component } from 'react';
import { TouchableNativeFeedback, View, Text } from 'react-native';

import ModalTemplate from '../ModalTemplate';

import styles from './styles';

export default class AbilityCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };

    this.showDescriptionModal = this.showDescriptionModal.bind(this);
  }

  render() {
    const Icon = this.props.icon;
    const DescriptionModal = this.props.descriptionModal;
    const bonus = this.props.ability.bonus
    const modifier = (bonus > 0) ? `+${bonus}` : `${bonus}`

    return (
      <View style={styles.wrapper}>
        <TouchableNativeFeedback>
          <View style={styles.main}>
            <TouchableNativeFeedback onPress={this.showDescriptionModal}>
              <View style={styles.header}>
                <Icon scale={.5} fill="#77f" />
                <Text style={styles.title}>{this.props.abilityName}</Text>
              </View>
            </TouchableNativeFeedback>
            <Text style={styles.score}>{this.props.ability.score}</Text>
            <View style={styles.spacer} />
            <View style={styles.modifier}>
              <Text style={styles.modifierText}>
                {modifier}
              </Text>
            </View>
          </View>
        </TouchableNativeFeedback>
        <ModalTemplate ref="descriptionModal" visible={this.state.modalVisible}>
          <DescriptionModal />
        </ModalTemplate>
      </View>
    );
  }

  showDescriptionModal() {
    this.refs.descriptionModal.showModal();
  }
}

AbilityCard.propTypes = {
  icon: React.PropTypes.func.isRequired,
  abilityName: React.PropTypes.string.isRequired,
  ability: React.PropTypes.object.isRequired,
  descriptionModal: React.PropTypes.func
}
