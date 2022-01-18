var secs, now, timer,
mins = 0, hours = 0

const button = document.querySelector('.counter__button');

const time = () => {

const timeHours = document.querySelector('.counter__time-hour');
const timeMin = document.querySelector('.counter__time-min');
const timeSec = document.querySelector('.counter__time-sec');

secs = Math.floor((Date.now() - now)/1000)

  if(secs === 60 ) {
    now = Date.now()
    mins++
  }
  if(mins === 60 ) {
    now = Date.now()
    hours++
    mins = 0
  }
  if(secs < 0) {
  secs = 0
  }

timeHours.textContent = hours
timeMin.textContent = mins
timeSec.textContent = secs
}

const forvardCount = (ev) => {
ev.preventDefault()
now = Date.now()
mins = 0
timer = setInterval(time)
}

const getCountdown = (target_date) => {

const timeHours = document.querySelector('.counter__time-hour');
const timeMin = document.querySelector('.counter__time-min');
const timeSec = document.querySelector('.counter__time-sec');

var current_date = new Date().getTime();

if (current_date >= target_date) {
document.querySelector('.counter__time').style.color = 'red'
return
}

else {
var seconds_left = (target_date - current_date) / 1000;

seconds_left = seconds_left % 86400;

hours = pad( parseInt(seconds_left / 3600) );
seconds_left = seconds_left % 3600;

mins = pad( parseInt(seconds_left / 60) );
secs = pad( parseInt( seconds_left % 60 ) );

timeHours.textContent = hours
timeMin.textContent = mins
timeSec.textContent = secs
}
}

const pad = (n) => {
return (n < 10 ? '0' : '') + n
}

const getTime = (ev) => {
ev.preventDefault()

let h = document.querySelector('.counter__input-hour').value;
let m = document.querySelector('.counter__input-min').value;
let s = document.querySelector('.counter__input-sec').value;

var target_date = new Date().getTime() + (h*3600000 + m*60000 + s*1000);

setInterval(function () { getCountdown(target_date); }, 1000)
}

const funcSwitch = (ev) => {
ev.preventDefault()
const hours_value = document.querySelector('.counter__input-hour').value;
const min_value = document.querySelector('.counter__input-min').value;
const sec_value = document.querySelector('.counter__input-sec').value;

((hours_value || min_value || sec_value) > 0) ? getTime(ev) : forvardCount(ev)
}

button.addEventListener('click', funcSwitch)

