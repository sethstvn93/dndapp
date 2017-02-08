'use strict'

import React, { Component } from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { connect } from 'react-redux';

import CustomTabBar from '../../components/CustomTabBar';
import AbilitiesView from '../../components/AbilitiesView';
import styles from './styles';

class CharacterView extends Component {

  render() {
    return (
      <ScrollableTabView
          tabBarBackgroundColor="#333"
          tabBarActiveTextColor="#77f"
          tabBarInactiveTextColor="#ccc"
          tabBarUnderlineStyle={styles.underline}
          tabsContainerStyle={styles.test} >
        <AbilitiesView tabLabel="Abilities" abilities={this.props.character.abilities} />
      </ScrollableTabView>
    );
  }
}

function mapStateToProps(state) {
  return { character: state.character };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterView);