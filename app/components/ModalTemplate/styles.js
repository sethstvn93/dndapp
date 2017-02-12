'use strict'

import { StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  modalContent: {
    height: height * .75,
    width: width * .9,
    backgroundColor: '#333',
    elevation: 10
  },
  modalFooter: {
    borderTopWidth: 1,
    borderTopColor: '#292929',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10
  },
  footerText: {
    color: '#ccc',
    fontSize: 30
  }
});
