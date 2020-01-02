import moment from 'moment'

// create id
export function makeid(length) {
   let result           = '';
   let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   let charactersLength = characters.length;
   for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

// create name files.
export function getTodayDate() {
  let date = moment()
  return { year: date.year(), week: date.week(), day: date.day() }
}
