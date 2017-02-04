'use strict'

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  menuItem: {
    flexDirection: 'row',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#292929'
  },
  activeIndicatorInactive: {
    width: 6
  },
  activeIndicatorActive: {
    width: 6,
    backgroundColor: '#77f'
  },
  text: {
    fontSize: 15,
    color: '#ccc',
    textAlignVertical: 'center',
    paddingLeft: 15
  }
});