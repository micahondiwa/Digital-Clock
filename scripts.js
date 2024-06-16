function getTime(){
  const currentTime = new Date();
  let hours = currentTime.getHours().toString().padStart(2, 0);
  let minutes = currentTime.getMinutes().toString().padStart(2, 0);
  let seconds = currentTime.getSeconds();
  
  let clockText = document.getElementById('clockText');

  clockText.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(getTime, 1000);
