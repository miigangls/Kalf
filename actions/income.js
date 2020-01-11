import {saveFile, getFileInfo, readFile, deleteFiles} from '../utils/file';
import * as SecureStore from 'expo-secure-store';
import {route } from './route'
import {makeid, getTodayDate} from '../utils/ui';
import moment from 'moment'

export function loadData() {
  return async (dispatch)=>{
    let FilesInfo = await getFileInfo('income', `${moment().format('MMMM')}`)
    , income = []
    if (FilesInfo.exists) {
      let memo = await readFile('income', `${moment().format('MMMM')}`)
      income = memo.data
    }
    await dispatch({ type: 'CONFIGURATION-INCOME-GET', income})
  }
}


export function addAndUpdate(incomeData) {
  return  async (dispatch) => {
    let FilesInfo = await getFileInfo('income', `${moment().format('MMMM')}`)
    , {_id, income, notas, valor} = incomeData
    , date  =  getTodayDate()
    if (!FilesInfo.exists) {
      let income = {
        _id: makeid(50),
        date: moment().format('DD-MM-YYYY'),
        year: date.year,
        week: date.week,
        data: [{
          _id: makeid(50),
          value: valor,
          name: income,
          note: notas,
          icon: 'home'
        }],
      }
     await saveFile('income', `${moment().format('MMMM')}`, income)
    } else {
      let memo = await readFile('income', `${moment().format('MMMM')}`)
      await deleteFiles('income', `${moment().format('MMMM')}`)
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
        name: income,
        note: notas,
        icon: 'home'
      })
      await saveFile('income', `${moment().format('MMMM')}`, memo)
    }
    let memo = await readFile('income', `${moment().format('MMMM')}`)
    await dispatch({ type: 'CONFIGURATION-INCOME-GET', income: memo.data})
    await dispatch({ type: 'CONFIGURATION-INCOME-MODAL', modal: !true})
  }
}
//arr.splice(i, 1);
export function deleteIncome(value) {
  return  async (dispatch) => {
    let FilesInfo = await getFileInfo('income', `${moment().format('MMMM')}`)
    if (FilesInfo.exists) {
      let memo = await readFile('income', `${moment().format('MMMM')}`)
      await deleteFiles('income', `${moment().format('MMMM')}`)
      memo.data.forEach(({_id}, i)=> {
        if (_id == value) memo.data.splice(i, 1);
      })
      await saveFile('income', `${moment().format('MMMM')}`, memo)
      await dispatch({ type: 'CONFIGURATION-INCOME-GET', income: memo.data})
      await dispatch({ type: 'CONFIGURATION-INCOME-MODAL', modal: !true})
    }
  }
}

export function onRequestClose(state) {
  return (dispatch) => {dispatch({type: 'CONFIGURATION-INCOME-MODAL', modal: !state})}
}


export function setModal(state, botton) {
  return (dispatch) => {
    dispatch({type: 'CONFIGURATION-INCOME-MODAL', modal: !state})
    dispatch({type: 'CONFIGURATION-INCOME-FORM', form: botton})
  }
}
