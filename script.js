function updatetime(){
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const session = document.getElementById("session")
  if (session < 12){
    session.innerHTML = "AM";
  }else{
    session.innerHTML = "PM";
  }
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}
setInterval(updatetime,1000)