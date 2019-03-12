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
    // this is to push the new element into the array so it has the name and
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
  // this the variable for the grid length so we can store it
    var lengt = grid.length;
  // this is going to be the legth of the gird times 2
  var top = lengt;
  var fixtop = grid[0].length/1.6;
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
//Numbers makes the random numbers for the rooms to be
//able to draw it in random lengths and random places

  function numbers(grid){
    var room = {
      //the random lengths of the rooms
      //Length y
      lengthy: Math.random() *grid.length/10 +4,
      //Length x
      lengthx: Math.random() *grid.length/10 +4
    }
    //these are the random locations
    //y
    room.y = Math.random() *(grid[1].length - room.lengthy),
    //x
    room.x = Math.random() *(grid[1].length - room.lengthx),
    //these are the floors so it rounds down so we get whole numbers
    //Length y floor
    room.lengthy = Math.floor(room.lengthy);
    //Length x floor
    room.lengthx = Math.floor(room.lengthx);
    //y floor
    room.y = Math.floor(room.y);
    //x floor
    room.x = Math.floor(room.x);
    return room;
}

  function room(numbers, grid, element , name = " "){
  // the function that draws the rooms randomly
    //this gives room from function numbers to function room
     var room = numbers(grid);
     //this is what makes it so that they do not overlap
     for (var i = 0; i < grid.length; i++) {
       // this outer for statement is to check the grid.x for room locations
       if(i >= room.y && i <= (room.y + room.lengthy)){
         // this if statement is if there is any rom locations
         for (var j = 0; j < grid[0].length; j++) {
           // this it to check the grid.y for anything
             if(j >= room.x && j <= (room.x + room.lengthx)){
               //this if satement is what check room locations on the grid
                 if(grid[i][j] == " "){
                   // this is to check overlap
                    return draw(grid);
                   }
                 }
               }
             }
           }
    //this draws the room after finding a location that makes it so they do not overlap
    for (var i = 0; i < grid.length; i++) {
      // this for statement is what chscks the grid length
      if(i >= room.y && i <= (room.y + room.lengthy)){
        //this if statement checks foe the room .length to generate the room
        for (var j = 0; j < grid[0].length; j++) {
            if(j >= room.x && j <= (room.x + room.lengthx)){
              // this check the length of the room and spwans the rooms
                grid[i][j] = new element(name);
            }
          }
        }
      }
      // this returns the updated grid... yay
      return draw(grid);
    }

  var grid = grid({x:100,y:200}, Dungeon);
  // this is what physiaclly draws the grid
  document.getElementById("blah").innerHTML = draw(grid);
  // this calls the update function
  // this calls the update function
  document.getElementById("Rooms").onclick = function(){
    for (var i = 0; i < 400; i++) {
  document.getElementById("blah").innerHTML = draw(grid);
  document.getElementById("blah").innerHTML = room(numbers, grid, Dungeon);
  console.log("Clicky");
  // this calls the update function
    }
  }
