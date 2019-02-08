// this is going to be the dungeon and is going to be passed to the person and
// enemies
// this si going to be the grid to put the dungeon on

function grid(size, element, name = "&#9926"){
  // this is going to be the empty array that we can pcuh and pull from
    //var number = number;
    // this is the empty array that u push and pull from
    var make = [];
    // this is to push into the make array
  for (var i = 0; i < size.x; i++) {
    // this is array.push
    make.push([]);
  for (var j = 0; j < size.y; j++) {
    // this si to push the new element into the array so it has the name and
    // grid locations
    make[i].push(new element(name,[i,j]));

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

  var fixtop = grid[0].length;
  // this is so text knows what to use for the grid
  text += "&#8943";
  // this makes the top border
  for (var i = 0; i < fixtop; i++) {
    top = text += "&#8943";
  }
  // this is so the grid is square for now
  // thats why theres a brake <BR>
  text += "&#8943<BR>";

// this for satement is for the sides of the grid usaing pipes
  for (var i = 0; i < lengt; i++) {
    text += "&#8942";

  for (var j = 0; j < grid[0].length; j++) {
    text += "" + grid[i][j];

  }
text += "&#8942<BR>";
}
text += "&#8943";

for (var i = 0; i < fixtop; i++) {
  top = text += "&#8943";
}
text += "&#8943";



// return the text strings so its appears on the screen
return text;

}

var grid = grid({x:30,y:40}, Dungeon);
// this is what physiaclly draws the grid
document.getElementById("blah").innerHTML = draw(grid);
// this is is calling the grid to the html
// this is my automatic update variable
  document.getElementById("button").onclick = function(){
    // this calls the update function
}
