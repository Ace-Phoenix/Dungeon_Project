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
fucntion draw(grid){
  var text = " ";
  var lengt = grid.length;
  var top = lengt*2;
  text += "+";
  // this makes the top border
  for (var i = 0; i < lengt; i++) {
    top = text += "--"
  }
  text += "+<BR>";

  for (var i = 0; i < lengt; i++) {
    text += "| "

  for (var j = 0; j < array.length; j++) {
    grid[i][j];
    text += " " + grid[i][j];
  }
text += "<BR>";
}
text += "+";

for (var i = 0; i < lengt; i++) {
  top = text += "--";
}
text += "+"
return text;

}
