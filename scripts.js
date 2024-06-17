function getTime(){
  const currentTime = new Date();
  let hours = currentTime.getHours();
  let meridium;
  if(hours == 0 && minutes == 0){
    meridium = "Midnight";
  }
  if(hours == 12 && minutes == 0){
    meridium = "noon";
  }
  if(hours > 12){
    meridium = "PM";
  }
  if(hours < 12){
    meridium = "AM";
  }
  hours = hours % 12 || 12;
  hours = hours.toString().padStart(2, 0);
  let minutes = currentTime.getMinutes().toString().padStart(2, 0);
  let seconds = currentTime.getSeconds().toString().padStart(2, 0);
  let clockText = document.getElementById('clockText');

  clockText.textContent = `${hours}:${minutes}:${seconds}${meridium}`;
}

setInterval(getTime, 1000);
