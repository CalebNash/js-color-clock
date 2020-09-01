function displayTime()
{
  var time = new Date();
  var hours = time.getHours().toString();
  var minutes = time.getMinutes().toString();
  var seconds = time.getSeconds().toString();

if(hours.length < 2)
{
  hours = '0' + hours;
}

if(minutes.length < 2)
{
  minutes = '0' + minutes;
}

if(seconds.length < 2)
{
  seconds = '0' + seconds;
}

  const clockDisplay = document.querySelector('.clock-display').textContent = `${hours}:${minutes}:${seconds}`;
  console.log(clockDisplay);

var numSeconds = parseInt(seconds);
 var percent = 100/60*numSeconds;
 console.log(Math.ceil(percent))
}
const currentClock = setInterval(displayTime, 1000);
