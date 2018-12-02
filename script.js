
window.onload = function(){ typeWriter(); };

var i = 0;
var txt = 'Learn to Self Learn Web Development With Your Good Friends Jacob & Floyd';
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("words").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}