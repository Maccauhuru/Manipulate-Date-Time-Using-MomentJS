const moment = require('moment');
const doomsDay = moment().endOf('day').fromNow();
const currentAge = moment('1982-08-30').fromNow();
const today = moment().format('YYYY-MM-DD');
const startWeek = moment().startOf('week');
const currentYear = moment().format('YYYY');
const isLeapYear = moment(currentYear, "YYYY").isLeapYear();


console.log(`The date is ${today}`);
console.log(`The day is ending ${doomsDay}`);
console.log(`I came to planet earth ${currentAge}`);
console.log(`Start of current week is: ${startWeek}`);
console.log(`${currentYear} a leap year?: ${isLeapYear}`);