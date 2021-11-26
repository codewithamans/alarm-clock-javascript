console.log("heys");



let settime = document.getElementById("setTime");
settime.addEventListener("click", (e) => {
    function bellring() {
        var audio = new Audio("audio.mp3");
        audio.play();
      }
  e.preventDefault();
  let hr = document.getElementById("hour").value;
  let min = document.getElementById("minute").value;
  let type;
  let AM = document.getElementById("am");
  let PM = document.getElementById("pm");

  if (AM.checked) {
    type = AM.value;
  } else if (PM.checked) {
    type = PM.value;
  }
  let date = new Date();
  date.setMinutes(min);
  date.setHours(hr);
  console.log(date);
  now = new Date();
  console.log(now);
  let alarm = date - now;
  console.log(alarm);

  if (alarm >= 0) {
    setTimeout(() => {
      bellring();
    }, alarm);
  }
});

