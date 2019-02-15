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
<<<<<<< HEAD
    // console.log(make)
    make[i].push(new element(name));
=======
    make[i].push(new element(name,[i],[j]));

>>>>>>> cb558141862c7beb00ffd4d5c7f488fbecf9d5d7
    }
  }
<<<<<<< HEAD
// this is going to be the grid[i][j
console.log(make);
=======
// this is going to be the grid[i][j]
>>>>>>> 97f0abbbadcf5ec564d5dc3f251b203eac720b77
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
  var fixtop = grid[0].length;
  // this is so text knows what to use for the grid
  text += design;
  // this makes the top border

  for (var i = 0; i < fixtop; i++) {
    top = text += design;

  }
  // this is so the grid is square for now
  // thats why theres a brake <BR>

  text += design + "<BR>";

// this for satement is for the sides of the grid usaing pipes

  for (var i = 0; i < lengt; i++) {
    text += background;


  for (var j = 0; j < grid[0].length; j++) {
    text += "" + grid[i][j];

  }

text += background + "<BR>";

}
text += design;

for (var i = 0; i < fixtop; i++) {
  top = text += design;

}
text += design;





// return the text strings so its appears on the screen
return text;

}

// class Space{
//   constructor(x, y, w, h){
//     this.x = x;
//     this.y = y;
//     this.w = w;
//     this.h = h;
//     this.center = {
//       x:Math.floor(x + (w / 2)),
//       y:Math.floor(y + (h / 2)),
//     }
//   }
//   // drawpath(c, space, grid){
//   //   //const pattern = c.create pattern('reapeat')
//   //   c.beginpath()
//   //   c.lineWidth = TILE;
//   //   c.strokeStyle = pattern;
//   //   c.moveTo(this.center.x *TILE, this.center.y *TILE)
//   //   c.lineTo(space.center.x *TILE, space.center.y *TILE)
//   //   c.stroke()
//   //   }
//   // }
// }
//
// class Room extends Space {
//   consturctor(space, name = " "){
//     //super();
//     this.x = space.x + random(1, Math.floor(space.w/3))
//     this.y = space.y + random(1, Math.floor(space.h/3))
//     this.w = space.w - (this.x - space.x)
//     this.h = space.h - (this.y - space.y)
//     this.w -= random(0, this.w/4)
//     this.h -= random(0, this.h/4)
//     }
//   }
//
//   function makeroom(grid, name = " "){
//     var txt = " ";
//     var square = [];
//     var room = new Room;
//     room.x = Math.random(room.x) * grid.length/2;
//     room.y = Math.random(room.y) * grid.length/2;
//     // room.h = Math.random(room.h) * grid.length/2;
//     // room.w = Math.random(room.w) * grid.length/2;
//     for (var i = 0; i < room.x; i++) {
//       txt += " ";
//       for (var j = 0; j < room.y; j++) {
//         square[i,j] = " ";
//         grid[i,j] = square[i,j] + txt;
//       }
//     }
// //    console.log(room)
// //    console.log(grid)
//     return grid;
//   }

function room(grid){

for (var i = 0; i < .length; i++) {

  for (var j = 0; j < array.length; j++) {
    array[i]
    }
  }
}
var grid = grid({x:60,y:100}, Dungeon);
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
