import {saveFile, getFileInfo} from '../utils/file';
import * as SecureStore from 'expo-secure-store';
import {route } from './route'
import {makeid, getTodayDate} from '../utils/ui';
import moment from 'moment'

export function addAndUpdate(expensesData) {
  return  async (dispatch) => {
    console.log(expensesData);
    let date  =  getTodayDate(),
    FilesInfo = await getFileInfo('expenses', `${date.year}-${date.week}-${date.day}`)
    if (!FilesInfo.exists) {
      console.log('create Files');
      let expense = {
        _id: makeid(50),
        date: moment().format('DD-MM-YYYY'),
        year: date.year,
        week: date.week,
        day: [],
      }
     await saveFile('expenses', `${date.year}-${date.week}-${date.day}`, expense)
     await dispatch({ type: 'CONFIGURATION-EXPENSE-GET', expense })
    } else {
      console.log('update Files');

    }
  };
}

export function Delete() {

}
