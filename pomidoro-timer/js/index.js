var inprogress = false;
var breakInprogress = false;

var seconds = document.getElementById("s");
var minutes = document.getElementById("m");
var a;
var m = 25;
var s = "00";
minutes.innerHTML = m;
seconds.innerHTML = s;

function setValues() {
  seconds.innerHTML = s;
  minutes.innerHTML = m;
}

function doTimer() {
  if (!inprogress) {
    inprogress = true;
    startTimer();
  }
}

function startTimer() {

  function start() {
    if (m > 0 && s >= 0) {
      s--;
      if (m > 0 && s < 0) {
        m--;
        s = 59;
      }
    } else if (m === 0 && s > 0) {
      s--;
    } else if (m === 0 && s === 0) {
      var wav = 'http://www.oringz.com/oringz-uploads/sounds-917-communication-channel.mp3';
      var audio = new Audio(wav);
			audio.play();
      stopTimer();
      if(!breakInprogress){
        startBreak();
      } else {
        breakInprogress = false;
        resetTimer();
      }
    }
    setValues();
  }
  a = setInterval(start, 1000);
}

function stopTimer() {
  clearInterval(a);
  inprogress = false;
}

function resetTimer() {
  clearInterval(a);
  s = "00";
  m = 25;
  setValues();
  inprogress = false;
}

function startBreak(){
  breakInprogress = true;
  clearInterval(a);
  s = "00";
  m = 5;
  setValues();
  inprogress = false;
  doTimer();
}

$("#plus").click(function() {
  if (m < 5 && m >= 0) {
    m = m + 1;
  } else if (m >= 5) {
    m = m + 5;
  }
  setValues();
});

$("#minus").click(function() {
  if (m > 0 && m <= 5) {
    m = m - 1;
  } else if (m > 5) {
    m = m - 5;
  }
  setValues();
});