// this is going to be the dungeon and is going to be passed to the person and
// enemies
// this si going to be the grid to pit the dungeon on

function grid(number, element, name){
var make = [];
for (var i = 0; i < make.length; i++) {
  make[i] = []

}
for (var j = 0; j < make.length; j++) {
  make[i][j] = new element()
}
return make;
}
