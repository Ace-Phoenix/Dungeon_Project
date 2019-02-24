// this is going to be the dungeon and is going to be passed to the person and
// enemies
// this si going to be the grid to put the dungeon on

function grid(size, element, name = "&#9926"){
  // this is going to be the empty array that we can pcuh and pull from
    //var number = number;
    // this is the empty array that u push and pull from
    var make = [];
    // this is to push into the make array
    console.log(make)
  for (var i = 0; i < size.x; i++) {
    // this is array.push
    console.log(make)
    make.push([]);
  for (var j = 0; j < size.y; j++) {
    // this si to push the new element into the array so it has the name and
    // grid locations
    make.push(new element(name,[i,j]));
    }
  }
// this is going to be the grid[i][j
console.log(make);
    return make;
  }
// this is going to be the fucntion thats draws the grid
function draw(grid){
  var design = "&#8943";
  var background = "&#8942";
  // this is going to be the text variable
  var text = " ";
// thSis the variable for the grid length so we can store it
  var lengt = grid.length;
  // this is going to be the legth of the gird times 2
  var top = lengt *2;

  var fixtop = grid.length;
  console.log(fixtop + " plz1");
  // this is so text knows what to use for the grid
  text += design;
  // this makes the top border

  for (var i = 0; i < fixtop; i++) {
    console.log(fixtop + " plz1");

    top = text += design;

  }
  // this is so the grid is square for now
  // thats why theres a brake <BR>

  text += design + "<BR>";

// this for satement is for the sides of the grid usaing pipes

  for (var i = 0; i < lengt; i++) {
    text += background;

  for (var j = 0; j < grid.length; j++) {
    text += "" + grid[i,j];

  }

text += background + "<BR>";

}
text += design + "<BR>";

for (var i = 0; i < fixtop; i++) {
  top = text += design + "<BR>";
  console.log(fixtop + " plz1");

}
text += design + "<BR>";
console.log(background + "bg");
console.log(design + "design");
console.log(text + "text");
console.log(text.length + "     _text");





// return the text strings so its appears on the screen
return text;

}

class Space{
  constructor(x, y, w, h, grid){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  // drawpath(c, space, grid){
  //   //const pattern = c.create pattern('reapeat')
  //   c.beginpath()
  //   c.lineWidth = TILE;
  //   c.strokeStyle = pattern;
  //   c.moveTo(this.center.x *TILE, this.center.y *TILE)
  //   c.lineTo(space.center.x *TILE, space.center.y *TILE)
  //   c.stroke()
  //   }
  // }
}


class Room extends Space {
  consturctor(space){
    //super();
    this.x = space.x + random(1, Math.floor(space.w/3))
    this.y = space.y + random(1, Math.floor(space.h/3))
    this.w = space.w - (this.x - space.x)
    this.h = space.h - (this.y - space.y)
    this.w -= random(0, this.w/4)
    this.h -= random(0, this.h/4)
    }
  }

  // function makeroom(grid, name = ""){
  //   var txt = ""
  //   var square = [];
  //   var room = new Room;
  //   room.x = Math.random(room.x) * grid.length;
  //   room.y = Math.random(room.y) * grid.length;
  //   room.h = Math.random(room.h) * 10;
  //   room.w = Math.random(room.w) * 10;
  //   for (var i = 0; i < room.h; i++) {
  //     square[i] = []
  //     for (var j = 0; j < room.w; j++) {
  //       square[i][j] = grid[i][j];

  function makeroom(grid, name = " "){
    var txt = "";
    var square = [];
    var room = new Room;
    room.x = Math.random(room.x) * grid.length/2;
    room.y = Math.random(room.y) * grid.length/2;
    room.h = Math.random(room.h) * grid.length/2;
    room.w = Math.random(room.w) * grid.length/2;
    for (var i = 0; i < room.h; i++) {
      console.log(txt + " 1")
      grid[i] = []
      console.log(grid[i] + " _gri d?");

      txt += "";
      grid[i].push(txt)
      console.log(grid[i] + " _ grid?");

      for (var j = 0; j < room.w; j++) {
        console.log(txt + " 2")
        txt += "" + grid[i];
        console.log(grid[i] + " _g rid?");

        console.log(txt + " 3")

      }
    }
    console.log(j);
    console.log(i);
    console.log(room)
    console.log(square + "square");
    console.log(txt + " txt");
var grid =  String(grid({x:35,y:40}, Dungeon))
console.log(grid + " _grid?");

    return grid
  }
// this is what physiaclly draws the grid
var room = makeroom
document.getElementById("blah").innerHTML = draw(grid);
// this is is calling the grid to the html
// this is my automatic update variable
    // this calls the update function
document.getElementById("button").onclick = function(){
  document.getElementById("blah").innerHTML = makeroom(grid, name = " ");
console.log("Clicky");
  // this calls the update function
}
