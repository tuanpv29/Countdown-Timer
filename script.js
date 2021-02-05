// Set the date we're counting back to 1970
var countDownDate = new Date("Feb 12, 2021").getTime();
// Update the count down every 1 second buy setInerval() method
var x = setInterval(function() {
  // Get today
  var now = new Date();
  // Counting back to 1970
  now.getTime();
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Display the result
  document.getElementById("day").innerHTML = days;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;

  // Do something when it is finished
  if (distance <0) {
    clearInterval(x);
    document.getElementById('message').innerHTML = "<h1>Chúc mừng năm mới!</h1>";
  }
}, 1000);