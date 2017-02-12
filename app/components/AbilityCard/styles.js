'use strict'

import { StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  wrapper: {
    flex: 1
  },
  main: {
    backgroundColor: '#333',
    minHeight: 75,
    margin: 5,
    paddingRight: 10,
    elevation: 5,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  header: {
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    borderRightWidth: 2,
    borderRightColor: '#292929',
    marginRight: 10
  },
  title: {
    color: '#ccc'
  },
  score: {
    color: '#ccc',
    fontSize: 50
  },
  modifier: {
    backgroundColor: '#77f',
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modifierText: {
    color: '#333',
    fontSize: 25
  },
  spacer: {
    flex: 1
  },
  modal: {
    justifyContent: 'flex-start'
  },
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
