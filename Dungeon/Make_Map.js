//Function grid takes name from element Dungeon from Master.js
//This will be an object and it has size to change the
//hight and width of the grid
  function grid(size, element, name = "x"){
    // this is going to be the empty array that we can pcuh and pull from
    //var number = number;
    // this is the empty array that u push and pull from
  var make = [];
    // this is to push into the make, array
  for (var i = 0; i < size.x; i++) {
    make.push([]);
  for (var j = 0; j < size.y; j++) {
   //this is to push the new element into the
   //array so it has the name and grid locations
    make[i].push(new element(name,[i],[j]));
      }
    }
 // this is going to be the grid[i][j]
 return make;
  }

//Function draw uses grid to make a border and draw the grid itself
function draw(grid){
  var top_type = "&#8943";// this is the text that is used for the top and bottom

  var walls_type = "&#8942";// this is the text that is used for the sides

  var text = "";  // this is going to be the text variable

  // this var is for the grid.length to be able to store it
  var boarderlength = grid.length;

  // this is the length of the grid to put the text in
  var top_text = boarderlength;

  //fixes is to make the top text fit with
  //larger grids and smaller grids it dose not work as well
  var fixes = grid[0].length/1.58;

  text += top_type;//text is used to determin the text type for border

    // this makes the top border
    for (var i = 0; i < fixes; i++) {
  top_text = text += top_type;
  }

  text += top_type + "<BR>";//the "<BR>" is to make it a square boarder

  // this for satement is for the sides of the grid useing pipes
  for (var i = 0; i < boarderlength; i++) {
    text += walls_type;//makeing the text to the walls text
  for (var j = 0; j < grid[0].length; j++) {
    text += "" + grid[i][j];//setting the grid text in the middle with no space
  }
    text += walls_type + "<BR>";//setting wall text again
  }
  text += top_type;//setting the top and bottom text again
  for (var i = 0; i < fixes; i++) {
    top_text = text += top_type;//setting the text to the grid length
  }
  text += top_type;//setting it again

  return text;//returning the text so that when the grid is drawn it is a grid
}

//   //Numbers makes the random numbers for the rooms to be
//   //able to draw it in random lengths and random places
//   function numbers(grid){
//   //room creates random numbers for the rooms
//     var room = {
//       lengthx: Math.random() *grid.length/10 +4, // Length x
//       lengthy: Math.random() *grid.length/10 +4  // Length y
//     }
//     // these are the random locations
//     room.x = Math.random() *(grid[1].length - room.lengthx);// x
//     room.y = Math.random() *(grid[1].length - room.lengthy);// y
//
//     // these are the floors so it rounds down so we get whole numbers
//     // Length y floor and the Length x floor
//     room.lengthx = Math.floor(room.lengthx);//x
//     room.lengthy = Math.floor(room.lengthy);//y
//
//     // y floor & x floor for whole numbers
//     room.x = Math.floor(room.x);//x
//     room.y = Math.floor(room.y);//y
//
//     // this is the center length x and y or (cenlengthx and cenlengthy)
//     room.cenlengthy = room.lengthy %2;//x
//     room.cenlengthx = room.lengthx %2;//y
//
//     // this is so it can get a 1 or a 0 to check if there even or not
//     // this is to % the room.x & y to see if it gets 1
//     room.locationx = room.x %2;//x
//     room.locationy = room.y %2;//y
//
//     // these are going to be the centery & centerx for the y & x length
//     room.centerx = room.x + (room.lengthx + 1)/2;//x
//     room.centery = room.y + (room.lengthy + 1)/2;//y
//
//     // this is a empty array so i can get locations in an array
//     centers = [];
//
//     // this is to push both locations into the empty array to get one location
//     // and not just one number
//     // this is the finale location
//     room.center = centers.push([room.centerx, room.centery]);
//
//     return room;//returning room so that it can randomize the numbers again
// }
  function randomnumbers(number){
    var random = Math.random() *number;
    var num = Math.floor(random);
    return num;
  }

  function oddnums(number){
    var num = randomnumbers(number);
    while (num %2 == 0) {
        num = randomnumbers(number);
        }
      return num;
  }

  //Numbers makes the random numbers for the rooms to be
  //able to draw it in random lengths and random places
  function numbers(grid, number){
  //room has random numbers
  var oddnum = oddnums(number);
  console.log(oddnum + " h");
    var room = {
      lengthy: oddnum/10 +4,// Length y
      lengthx: oddnum/10 +4 // Length x
    }
    // these are the random locations
    room.y = (oddnum/50)*(grid.length - room.lengthy);// y
    room.x = (oddnum/50)*(grid[0].length - room.lengthx);// x
    // these are the floors so it rounds down so we get whole numbers
    // Length y floor and the Length x floor
    room.lengthy = Math.floor(room.lengthy);
    room.lengthx = Math.floor(room.lengthx);

    // y floor & x floor for whole numbers
    room.x = Math.floor(room.x);//x
    room.y = Math.floor(room.y);//y
    console.log(room.y);
    console.log(room.x);

    // this is the center length x and y or (cenlengthx and cenlengthy)
    room.centerx = room.x + (room.lengthx + 1)/2;
    room.centery = room.y + (room.lengthy + 1)/2;

    // this is a empty array so i can get locations in an array
    centerr = [];
    // this is to push both locations into the empty array to get one location
    // and not just one number
    // this is the finale location
    room.center = centerr.push([room.centerx, room.centery]);
    return room;
}

  //Function room uses numbers, grid, element and name to make rooms randomly
  function room(numbers, grid, element , name = " "){
    var room = numbers(grid, number = 50);
    //this gives room from function numbers to function room
    //this is what makes it so that they do not overlap
    for (var i = 0; i < grid.length; i++) {
      // These if statement are to check if there is/are a(ny) room(s) in the location(s),
      if(i >= room.y && i <= (room.y + room.lengthy))//y if statement.
        //This inner for statement checks for grid.x for room locations.
        for (var j = 0; j < grid[0].length; j++) {
          //This if satement is what check room locations on the grid.
          if(j >= room.x && j <= (room.x + room.lengthx)){//x if statement.
          //This if statement checks for the " " or the rooms
          //because the rooms are made of " "/blanks.
          if(grid[i][j] == " "){
       //Returns draw so nothhing happens because is is an overlap
       return draw(grid);
       //If its not an overlap it will go threw the next set of for statements.
        }
       }
      }
     }
    //These for statements will only happen if the first two statement
    //are true and they will not overlap.
    //These two for statements are for drawing the the rooms.
    //These if statement checks for the room.length to generate the room.
    //The outer for statement is to check for the y value of grid.
    for (var i = 0; i < grid.length; i++) {
      //These if statments are to check if the room is on the grid.
      if(i >= room.y && i <= (room.y + room.lengthy)){//y
        //The inner for statement is to check for x values of the grid.
        for (var j = 0; j < grid[0].length; j++) {
          if(j >= room.x && j <= (room.x + room.lengthx)){//x
            //This uses the rooms length and position of x & y and use
            //it to put it on the grid not draw it just make it part of it.
            grid[i][j] = new element(name);
            }
          }
        console.log("made");
        }
      }
      //Returns the updated grid that has the rooms that dont overlap.
      return draw(grid);
    }
    //Function reset, resets the grid back to its original state/stage.
    function reset(grid, element, name = "x"){
      //These for statementjust make it so it gose over the entire grid.
      for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
          //This make it so that it makes the
          //entire grid "x"(or any text) again.
          grid[i][j] = new element(name);
        }
      }
      //Returns draw so it makes it so that the
      //grid is all one text after being changed.
     return draw(grid);
    }


  var grid = grid({x:100,y:200}, Dungeon);
  var num = numbers(grid, 50)
  // this is what physiaclly draws the grid
  document.getElementById("blah").innerHTML = draw(grid);
  //Rooms button make sthe rooms
  document.getElementById("Rooms").onclick = function(){
    for (var i = 0; i < 100; i++) {
      document.getElementById("blah").innerHTML = room(numbers, grid, Dungeon);
    }
    console.log("clicked " + i + " times");
    console.log("Rooms Made");
  }
  //Reset button resets the grid back to normal state
  document.getElementById("Reset").onclick = function(){
  document.getElementById("blah").innerHTML = reset(grid, Dungeon)
  console.log("Reset");
    }
