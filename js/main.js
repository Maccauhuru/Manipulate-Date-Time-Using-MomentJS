//constants
const currentTime = moment();
const doomsDay = moment().endOf('day').fromNow();
const currentAge = moment('1982-08-30').fromNow();
const today = moment().format('YYYY-MM-DD');
const startWeek = moment().startOf('week');
const currentYear = moment().format('YYYY');
const isLeapYear = moment(currentYear, "YYYY").isLeapYear();


//target divs
const displayTime = document.getElementById('time');
const timeLeft = document.getElementById('timeLeft');


//populate the  Elemets
displayTime.innerHTML = currentTime;
timeLeft.innerHTML = "The day is ending " + doomsDay;