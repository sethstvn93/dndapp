'use strict'

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  menuItem: {
    flexDirection: 'row',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#292929'
  },
  activeIndicator: {
    backgroundColor: '#77f',
    width: 6
  },
  text: {
    fontSize: 15,
    color: '#ccc',
    textAlignVertical: 'center',
    paddingLeft: 15
  }
});