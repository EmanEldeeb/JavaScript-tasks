


var marbles = document.querySelectorAll("img");
var current = 0;
var start = 0;
var end = marbles.length;

marbles.forEach((marble)=>{
    marble.addEventListener("mouseenter",()=>{
clearInterval(onTimer)

    })
    marble.addEventListener("mouseleave",()=>{
       onTimer= setInterval(turnOn, 0);
    })
})

function turnOn() {

if (current == end) {
    current = 0;
  }
  marbles[current].src = "./images/marble3.jpg";
}

function turnOf() {
  
if (current == end) {
    current = 0;
  }
  marbles[current].src = "./images/marble1.jpg";
  current++;
}

var onTimer= setInterval(turnOn, 0);
setInterval(turnOf, 1000);