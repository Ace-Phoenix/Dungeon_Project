// this is going to be the dungeon and is going to be passed to the person and
// enemies
// this si going to be the grid to put the dungeon on

function grid(size, element, name = "x"){
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
    make[i].push(new element(name,[i],[j]));

    }
  }
// this is going to be the grid[i][j
    return make;
  }
// this is going to be the fucntion thats draws the grid
function draw(grid){
  var design = "&#8943";
  var background = "&#8942";
  // this is going to be the text variable
  var text = "";
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
    text += "" + grid[i][j] ;

  }
text += background + "<BR>";

}
text += design ;

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
//  drawpath(c, space, grid){
// const pattern = c.create pattern('reapeat')
// c.beginpath()
// c.lineWidth = TILE;
// c.strokeStyle = pattern;
// c.moveTo(this.center.x *TILE, this.center.y *TILE)
// c.lineTo(space.center.x *TILE, space.center.y *TILE)
// c.stroke()
//  }
//  }
// // }
// //
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

  function roomx(grid){
    var room = {
      x : Math.random() *grid.length,
    }
    var roomxfloor = Math.floor(room.x);
    if(grid.length >= roomxfloor && grid.length <= roomxfloor + roomxfloor){
            grid[roomxfloor] = " ";
            console.log(grid[roomxfloor] + " this is grid roomx floor")
    }
    return draw(grid[roomxfloor]), draw(grid);
  }


  function roomy(grid){
    var room = {
      y : Math.random() *grid.length,
    }
    var roomyfloor = Math.floor(room.y);
    if(grid.length >= roomyfloor && grid.length <= roomyfloor + roomyfloor){
            grid[roomyfloor] = " ";
            console.log(grid[roomyfloor] + " this is grid roomy floor")
    }
    return draw(grid[roomyfloor]), draw(grid);
  }

  function drawroom(roomx, roomy, grid){
    return roomx(grid), roomy(grid);
  }

var grid = grid({x:60,y:100}, Dungeon);
// this is what physiaclly draws the grid
document.getElementById("blah").innerHTML = draw(grid);
// this is is calling the grid to the html
// this is my automatic update variable
document.getElementById("path").onclick = function(){
document.getElementById("blah").innerHTML = draw(grid);

console.log("Clicky");
  // this calls the update function
}

    // this calls the update function
document.getElementById("button").onclick = function(){
document.getElementById("blah").innerHTML = drawroom(roomx, roomy, grid);

console.log("Clicky");
  // this calls the update function
}
