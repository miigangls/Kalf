import {saveFile, getFileInfo, readFile, deleteFiles} from '../utils/file';
import * as SecureStore from 'expo-secure-store';
import {route } from './route'
import {makeid, getTodayDate} from '../utils/ui';
import moment from 'moment'

export function loadData() {
  return async (dispatch)=>{
    let FilesInfo = await getFileInfo('configuration', `tcards`)
    , tCards = []
    if (FilesInfo.exists) {
      let memo = await readFile('configuration', `tcards`)
      tCards = memo.data
    }
    await dispatch({ type: 'CONFIGURATION-TCARDS-GET', tCards})
  }
}


export function addAndUpdate(values) {
  return  async (dispatch) => {
    let FilesInfo = await getFileInfo('configuration', `tcards`)
    , {_id, bank, type, number, cupo} = values
    , date  =  getTodayDate()

    if (!FilesInfo.exists) {
      let tCards = {
        _id: makeid(50),
        date: moment().format('DD-MM-YYYY'),
        bank,
        type,
        number,
        cupo
      }
     await saveFile('configuration', `tcards`, [tCards])
    } else {
      let memo = await readFile('configuration', `tcards`)
      /*await deleteFiles('configuration', `tcards`)
      let validRow = memo.data.filter(row => {
        let valid = false;
        if(row._id == _id) valid = true
        return valid
      })
      if(validRow) {
        memo.data.forEach((row, i)=> {
          if (row._id == _id) memo.data.splice(i, 1);
        })
      }
      memo.data.push({
        _id: makeid(50),
        value: valor,
        name: expenses,
        note: notas,
        icon: 'home'
      })*/
      //await saveFile('configuration', `tcards`, memo)
    }
    let memo = await readFile('configuration', `tcards`)


    await dispatch({ type: 'CONFIGURATION-TCARDS-GET', expenses: memo.data})
  }
}
//arr.splice(i, 1);
export function deleteExpenses(value) {
  return  async (dispatch) => {
    let FilesInfo = await getFileInfo('configuration', `tcards`)
    if (FilesInfo.exists) {
      let memo = await readFile('configuration', `tcards`)
      await deleteFiles('configuration', `tcards`)
      memo.data.forEach(({_id}, i)=> {
        if (_id == value) memo.data.splice(i, 1);
      })
      await saveFile('configuration', `tcards`, memo)
      await dispatch({ type: 'CONFIGURATION-TCARDS-GET', expenses: memo.data})
    }
  }
}
