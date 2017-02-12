'use strict'

import React, { Component } from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { connect } from 'react-redux';

import AbilitiesView from '../../components/AbilitiesView';
import InventoryView from '../../components/InventoryView';
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
        <InventoryView tabLabel="Inventory" inventory={this.props.character.inventory} />
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

CharacterView.propTypes = {
  character: React.PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterView);