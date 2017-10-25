// document.getElementById("square").addEventListener("mouseover", mouseOver)


var square = document.getElementById('square');
var outside = document.getElementById('outside');

square.addEventListener("mouseover", function(){square.style.background = 'blue'});

square.addEventListener("mousedown", function(){square.style.background = 'red'});

square.addEventListener("mouseup", function(){square.style.background = 'yellow'});

square.addEventListener("dblclick", function(){square.style.background = 'green'});

outside.addEventListener("wheel", function(){square.style.background = 'orange'});

outside.addEventListener('keydown', function (key) {
  if (key.keyCode == '66') {
    square.style.background = 'blue';
  } else if (key.keyCode == '82') {
    square.style.background = 'red';
  } else if (key.keyCode == '71') {
    square.style.background = 'green';
  } else if (key.keyCode == '79') {
    square.style.background = 'orange';
  } else if (key.keyCode == '89') {
    square.style.background = 'yellow';
  }
});
