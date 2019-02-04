// this is going to be the dungeon and is going to be passed to the person and
// enemies
// this si going to be the grid to pit the dungeon on

function grid(){
var make = [];
for (var i = 0; i < make.length; i++) {
  make[i]

}
for (var j = 0; j < make.length; j++) {
  make[j]
}
return make[i][j];
}

function draw(grid){
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
