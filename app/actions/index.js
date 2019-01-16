import Meteor from 'react-native-meteor';
import {AsyncStorage} from 'react-native'
import realm from '../realm.js';
import {T9n} from '../config.js'
import { Alert } from 'react-native';
import moment from 'moment';


let stateUsers = false;

const actions = {
  init: function () {
    return dispatch => {
      let configs = realm.objects('State').slice(0, 1)[0]
      return dispatch({ type: 'INIT', configs })
    }
  }
}

export default actions;
