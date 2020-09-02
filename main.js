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

var numSeconds = parseInt(seconds);
 var percent = 1/60*numSeconds;
 percent = percent.toFixed(2);
 console.log(percent);

  const clockDisplay = document.querySelector('.clock-display').textContent = `${hours}:${minutes}:${seconds}`;
  console.log(clockDisplay);

  var barLength = 224*percent;
  document.querySelector(".clock-progress-bar").style.width = `${barLength}px`;

var hexColor = Math.random().toString(16).substring(2,8);
console.log(hexColor);
document.querySelector(".clock").style.background = `#${hexColor}`;
}
const currentClock = setInterval(displayTime, 1000);
