function displayTime()
{
  var time = new Date();
  var hour = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();

  const clockDisplay = document.querySelector('.clock-display').textContent = `${hour}:${minutes}:${seconds}`;
  console.log(clockDisplay);
}
const currentClock = setInterval(displayTime, 1000);
