'use strict'

import character from './character.json';

class Api {

  getCharacterById(id) {
    return character;
  }
}

const api = new Api();
export default api;