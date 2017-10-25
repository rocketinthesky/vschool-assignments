var totalCost = function (goombas, bobombs, cheepCheeps) {
  var goombas = document.getElementById('goomba').value;
  var bobombs = document.getElementById('bobombs').value;
  var cheepCheeps = document.getElementById('cheepCheeps').value;

  document.getElementById('output').innerHTML = ((goombas * 5) + (bobombs * 7) + (cheepCheeps * 11));
}
