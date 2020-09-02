
  const $clock = document.querySelector(".clock");
  const $display = document.querySelector('.clock-display');
  const $progressBar = document.querySelector('.clock-progress-bar');

  let isHovering = false;
  $clock.addEventListener('mouseover', function()
  {
    console.log(event.bubbles);
    isHovering = true;
  });
  $clock.addEventListener('mouseout', function()
  {
    console.log(event.bubbles);
    isHovering = false;
  });

  function setTime()
  {
    const now = new Date();
    console.log(now);
    let hours, minutes, seconds;


      hexHours = ('0' + now.getHours().toString(16)).slice(-2)
      hexMinutes = ('0' + now.getMinutes().toString(16)).slice(-2)
      hexSeconds = ('0' + now.getSeconds().toString(16)).slice(-2)

      hours = ('0' + now.getHours()).slice(-2)
      minutes = ('0' + now.getMinutes()).slice(-2)
      seconds = ('0' + now.getSeconds()).slice(-2)

      if(isHovering)
      {
        const currentTime = `${hexHours}:${hexMinutes}:${hexSeconds}`;
        $display.innerHTML = currentTime;
      }
      else
      {
        const currentTime = `${hours}:${minutes}:${seconds}`;
        $display.innerHTML = currentTime;
      }
      const width = `${seconds / 60 * 14}rem`
      $progressBar.style.width = width;

      currentWidth = seconds / 60;
      console.log(currentWidth.toFixed(2));

       console.log(`${hexHours}${hexMinutes}${hexSeconds}`);

      document.querySelector(".clock").style.background = `#${hexHours}${hexMinutes}${hexSeconds}`;

  }

var currentClock = setInterval(setTime, 1000);
