// this is going to be the dungeon and is going to be passed to the person and
// enemies
// this si going to be the grid to put the dungeon on

function grid(number, element, name = "o"){
  // this is going to be the empty array that we can pcuh and pull from
    var number = number;
    var make = [];
  for (var i = 0; i < make.length; i++) {
    make.push([]);
  for (var j = 0; j < make.length; j++) {
    make[i].push(new element(name,[i,j]));
    }
    var num = number.toString()
  }
// this is going to be the grid[i][j
    return make;
  }
// this is going to be the fucntion thats draws the grid
function draw(grid){
  // this is going to be the text variable
  var text = "";
// this is the variable for the grid length so we can store it
  var lengt = grid.length;
  // this is going to be the legth of the gird times 2
  var top = lengt *2;
  // this is so text knows what to use for the grid
  text += "+";
  // this makes the top border
  for (var i = 0; i < lengt; i++) {
    top = text += "--";
  }
  // this is so the grid is square for now
  // thats why theres a brake <BR>
  text += "+<BR>";

// this for satement is for the sides of the grid usaing pipes
  for (var i = 0; i < lengt; i++) {
    text += "| ";

  for (var j = 0; j < array.length; j++) {
    grid[i][j];
    text += " " + grid[i][j];
  }
text += "|<BR>";
}
text += "+";

for (var i = 0; i < lengt; i++) {
  top = text += "--";
}
text += "+";
// return the text strings so its appears on the screen
return text;

}
<<<<<<< HEAD
var grid = grid(30);
=======

var grid = grid(30, Dungeon);
>>>>>>> 4201d9156c1398a97015c897aec1640bfc937f0e
// this is what physiaclly draws the grid
document.getElementById("blah").innerHTML = draw(grid);
// this is is calling the grid to the html
// this is my automatic update variable
  document.getElementById("button").onclick = function(){
    // this calls the update function
}
