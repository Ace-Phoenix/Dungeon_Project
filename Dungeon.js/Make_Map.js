// this is going to be the dungeon and is going to be passed to the person and
// enemies
// this si going to be the grid to pit the dungeon on

function grid(){
<<<<<<< HEAD
=======
=======
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
<<<<<<< HEAD
=======
=======
>>>>>>> f37f72891b2b16c9af4df2524bb405114e4775ff
>>>>>>> 952039a4671ad3a75f33ecc7010caf73869635c9
var make = [];
for (var i = 0; i < make.length; i++) {
  make[i]

}
for (var j = 0; j < make.length; j++) {
  make[j]
}
return make[i][j];
}

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
<<<<<<< HEAD
=======
>>>>>>> a00a89e1018b1119ccf60be493d3594b080b1b44
>>>>>>> e41b4ce2c7fda9ed1948d82411f5666b819b0556
>>>>>>> 952039a4671ad3a75f33ecc7010caf73869635c9
