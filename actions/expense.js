import {saveFile, getFileInfo, readFile} from '../utils/file';
import * as SecureStore from 'expo-secure-store';
import {route } from './route'
import {makeid, getTodayDate} from '../utils/ui';
import moment from 'moment'

export function loadData() {
  return async (dispatch)=>{
    let FilesInfo = await getFileInfo('expenses', `${moment().format('MMMM')}`)
    , expenses = []
    if (FilesInfo.exists) {
      let memo = await readFile('expenses', `${moment().format('MMMM')}`)
      expenses = memo.data
    }
    console.log(expenses);
    await dispatch({ type: 'CONFIGURATION-EXPENSE-GET', expenses})
  }
}


export function addAndUpdate(expensesData) {
  return  async (dispatch) => {
    let FilesInfo = await getFileInfo('expenses', `${moment().format('MMMM')}`)
    , {expenses, notas, valor} = expensesData
    , date  =  getTodayDate()
    if (!FilesInfo.exists) {

      let expense = {
        _id: makeid(50),
        date: moment().format('DD-MM-YYYY'),
        year: date.year,
        week: date.week,
        data: [{
          value: valor,
          name: expenses,
          note: notas,
          icon: 'home'
        }],
      }
     await saveFile('expenses', `${moment().format('MMMM')}`, expense)

    } else {
      console.log('update Files');
    }
    let memo = await readFile('expenses', `${moment().format('MMMM')}`)
    await dispatch({ type: 'CONFIGURATION-EXPENSE-GET', expenses: memo.data})
  }
}

/*export function Delete() {

}*/
