// this is going to be the dungeon and is going to be passed to the person and
// enemies
// this si going to be the grid to pit the dungeon on

function grid(number, element, name){
var number = number
var make = [];
for (var i = 0; i < number; i++) {
  make[i] = []

}
for (var j = 0; j < number; j++) {
  make[i][j] = new element(name, [i,j])
}
return make;
}
var map = grid(50, Dungeon)
function draw(grid){
  var borders = "";
  var
}
