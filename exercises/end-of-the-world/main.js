// 1) clicking a button begins a countdown
// 2) while the time is counting down the numbers are displayed
// 3) Once the timer hits 0 it displays the message "All your base are belong to us"

var timeLeft = 20;
var finalCountdown = function(){setInterval(function(){
if (timeLeft > 0) {
  document.getElementById('message').innerHTML = --timeLeft;
} else {
  document.getElementById('message').innerHTML = "All your base are belong to us";
  }
}, 1000);}
