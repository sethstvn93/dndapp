'use strict'

import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback, BackAndroid } from 'react-native';
import Modal from 'react-native-root-modal';

import styles from './styles';

export default class ModalTemplate extends Component {

  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false
    }

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  render() {
    return (
      <Modal visible={this.state.modalVisible}>
        <View style={styles.modalContent}>
          {this.props.children}
          <TouchableNativeFeedback onPress={this.hideModal}>
            <View style={styles.modalFooter}>
              <Text style={styles.footerText}>Close</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </Modal>
    );
  }

  componentDidMount() {
    BackAndroid.addEventListener('exitModal', () => {
      if (this.state.modalVisible) {
        this.hideModal();
        return true;
      }
    });
  }

  showModal() {
    this.setState({ modalVisible: true });
  }

  hideModal() {
    this.setState({ modalVisible: false });
  }
}

ModalTemplate.propTypes = {
  children: React.PropTypes.element.isRequired
}
