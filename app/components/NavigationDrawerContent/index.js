'use strict'

import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import MenuItem from '../MenuItem';

export default class NavigationDrawerContent extends Component {

  render() {
    const activeTab = this.props.activeTab;

    return (
      <View>
        <MenuItem action={Actions.characterSheet}
            text='Character'
            active={activeTab.sceneKey === 'characterSheet'} />
        <MenuItem action={Actions.combatActions}
            text='Combat Actions'
            active={activeTab.sceneKey === 'combatActions'} />
        <MenuItem action={Actions.dummyItem1}
            text='Dummy Item 1'
            active={activeTab.sceneKey === 'dummyItem1'} />
        <MenuItem action={Actions.dummyItem2}
            text='Dummy Item 2'
            active={activeTab.sceneKey === 'dummyItem2'} />
      </View>
    );
  }
}

NavigationDrawerContent.propTypes = {
  activeTab: React.PropTypes.object.isRequired
}