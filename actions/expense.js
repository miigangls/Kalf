import {saveFile, getFileInfo, readFile, deleteFiles} from '../utils/file';
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
      let memo = await readFile('expenses', `${moment().format('MMMM')}`)
      await deleteFiles('expenses', `${moment().format('MMMM')}`)
      memo.data.push({
        value: valor,
        name: expenses,
        note: notas,
        icon: 'home'
      })
      await saveFile('expenses', `${moment().format('MMMM')}`, memo)
    }
    let memo = await readFile('expenses', `${moment().format('MMMM')}`)
    await dispatch({ type: 'CONFIGURATION-EXPENSE-GET', expenses: memo.data})
    await dispatch({ type: 'CONFIGURATION-EXPENSE-MODAL', modal: !true})
  }
}
//arr.splice(i, 1);
export function delete(value) {
  let FilesInfo = await getFileInfo('expenses', `${moment().format('MMMM')}`)
  if (FilesInfo.exists) {
    let memo = await readFile('expenses', `${moment().format('MMMM')}`)
    memo.data.forEach(({name}, i)=> {
      if (name == value) memo.data.splice(i, 1);
    })
  }
}

export function setModalVisible(state) {
  return (dispatch) => {dispatch({type: 'CONFIGURATION-EXPENSE-MODAL', modal: !state})}
}
