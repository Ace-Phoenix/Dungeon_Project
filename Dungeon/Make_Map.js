// this is going to be the dungeon and is going to be passed to the person and
// enemies
// this si going to be the grid to put the dungeon on

function grid(number, element, name = "&#9926"){
  // this is going to be the empty array that we can pcuh and pull from
    var number = number;
    var make = [];
  for (var i = 0; i < number; i++) {
    make[i] = [];
  for (var j = 0; j < number; j++) {
    make[i][j] = new element(name,[i,j]);
    }
  }
// this is going to be the grid[i][j
    return make;
  }
// this is going to be the fucntion thats draws the grid
function draw(grid){
  // this is going to be the text variable
  var text = "";
// thSis the variable for the grid length so we can store it
  var lengt = grid.length;
  // this is going to be the legth of the gird times 2
  var top = lengt *2;
  // this is so text knows what to use for the grid
  text += "&#8943";
    text += "&#8943";
  // this makes the top border
  for (var i = 0; i < grid.length; i++) {
    top = text += "&#8943";
  }
  // this is so the grid is square for now
  // thats why theres a brake <BR>
  text += "&#8943<BR>";

// this for satement is for the sides of the grid usaing pipes
  for (var i = 0; i < grid.length; i++) {
    text += "&#8942";

  for (var j = 0; j < grid.length; j++) {
    text += "" + grid[i][j];

  }
  text += "&#9926";
text += "&#8942<BR>";
}
text += "&#8943";

for (var i = 0; i < grid.length; i++) {
  top = text += "&#8943";
}
text += "&#8943";
text += "&#8943";

// return the text strings so its appears on the screen
return text;

}


var grid = grid(30, Dungeon);
// this is what physiaclly draws the grid
document.getElementById("blah").innerHTML = draw(grid);
// this is is calling the grid to the html
// this is my automatic update variable
  document.getElementById("button").onclick = function(){
    // this calls the update function
}
