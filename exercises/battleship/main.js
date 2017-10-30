function Location(isShip, hit, display){
  this.isShip = isShip;
  this.hit = hit;
  this.display = display;
}

// For the grid I just copy/pasted what we had before for the 10x10 grid and changed the 0 to the new Location constructor because that's what we'll be pushing out instead of 0.
var grid = [];
for (var i = 0; i < 2; i++){
    grid.push([]);
    for (var j = 0; j < 2; j++){
        grid[i].push(new Location);
    }
}

// For the function I used a randon number generator that generates a number between 0 and 5. If it's a 1 it's a direct hit and should return a message and a create a new Location object. If it's any other number it's a miss and should return a message and create a new Location object.
var fire = function() {
  var shotsFired = Math.floor(Math.random() * 5);
  if (shotsFired === 1){
    console.log('Direct hit!');
    new Location(true, true, 'X');
  } else {
    console.log('Miss!');
    new Location(false, false, 'M');
  }
}

console.log(grid);

fire();
