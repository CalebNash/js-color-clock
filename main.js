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
 console.log(percent.toFixed(2));

  const clockDisplay = document.querySelector('.clock-display').textContent = `${hours}:${minutes}:${seconds}`;
  console.log(clockDisplay);
}

// function progressBar()
// {
//   var numSeconds = parseInt(seconds);
//    var percent = 1000/60*numSeconds;
//    console.log(percent);
//
//    const barDisplay = document.querySelector('.clock-progress-bar').textContent = `${percent}`;
// }

const currentClock = setInterval(displayTime, 1000);
