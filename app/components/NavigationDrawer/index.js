'use strict'

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Drawer from 'react-native-drawer';
import { DefaultRenderer } from 'react-native-router-flux';

import NavigationDrawerContent from '../NavigationDrawerContent';
import styles from './styles';

export default class NavigationDrawer extends Component {

  render() {
    const state = this.props.navigationState;
    const children = state.children;
    return (
      <Drawer ref="navigation"
          open={state.open}
          content={<NavigationDrawerContent />}
          type="overlay"
          openDrawerOffset={0.2}
          captureGestures={true}
          panOpenMask={0.05}
          styles={StyleSheet.flatten(styles)} >
        <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
      </Drawer>
    );
  }
}

NavigationDrawer.propTypes = {
  navigationState: React.PropTypes.object,
  onNavigate: React.PropTypes.func
}

