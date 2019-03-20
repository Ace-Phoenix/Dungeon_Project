
//[:ToDo:]//In Make_Map at least.
//Make hallways.// game machanic
//Make grid a object.//for easier use of the grid

//Function grid takes name from class Dungeon from Master.js
//This will be an object and it has size to change the
//hight and width of the grid
  function grid(size, element, name = "x"){
  //Creating an empty array to make the grid made of array
  //[:Posible future:][:Fix:] Make grid an object to make it easier for use
  var make = [];
  //This for statement makes it so that the grid meets the size
  //requirements/ set numbers
  for (var i = 0; i < size.x; i++) {
    make.push([]);//makes it a double array so that it is a box and not a line
  for (var j = 0; j < size.y; j++) {
   //This pushes the new element into the
   //array so it has the name and grid locations
    make[i].push(new element(name,[i],[j]));
      }
    }
 // This is going to be the grid[i][j]
 return make;
  }

//Function draw uses grid to make a border and draw the grid itself
function draw(grid){
  var top_type = "&#8943";// This is the text that is used for the top and bottom

  var walls_type = "&#8942";// This is the text that is used for the sides

  var text = "";  // This is going to be the text variable

  // This var is for the grid.length to be able to store it
  var boarderlength = grid.length;

  // This is the length of the grid to put the text in
  var top_text = boarderlength;

  //fixes is to make the top text fit with
  //larger grids and smaller grids it dose not work as well
  var fixes = grid[0].length/1.58;

  text += top_type;//text is used to determin the text type for border

    // This makes the top border
    for (var i = 0; i < fixes; i++) {
  top_text = text += top_type;
  }

  text += top_type + "<BR>";//the "<BR>" is to make it a square boarder

  // This for satement is for the sides of the grid useing pipes
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

  //Function randomnumbers gives us just random numbers.
  function randomnumbers(number){
    var random = Math.random() *number;
    var num = Math.floor(random);
    return num;
  }

  //Function oddnums gives us random odd numbers
  function oddnums(number){
    //calling randomnumbers in a var to store it
    var num = randomnumbers(number);

    //This wile loop make it so that if it is a
    //odd number it will rerandomize the number
    while (num % 2 == 0) {
        num = randomnumbers(number);//This recales the randomnum function
        }
      return num;//returning the number so that it can be used in other places
  }

  //Numbers makes the random numbers for the rooms to be
  //able to draw it in random lengths and random places
  function numbers(grid, number = 200){
  //These variables are tomake it so that the rooms get random numbers.
  var oddnum = oddnums(number);//first random number for y.
  var oddnumx = oddnums(number);//sencond for x.

    //room is an object so that we can use the lengths in different places.
    var room = {
      lengthy: oddnum /5,// Length y.
      lengthx: oddnumx /5 // Length x.
    }
    // console.log(oddnum + " odd nums");
    // These are the random locations.
    room.y = oddnum;// y.
    room.x = oddnumx;// x.

    // These are the floors so it rounds down so we get whole numbers.
    // Length y floor and the Length x floor.
    room.lengthy = Math.floor(room.lengthy);//y.
    room.lengthx = Math.floor(room.lengthx);//x.

    //These if statement make it so that the number will...
    //always be negative so that we can get the absolute center a...
    //whole number.
    if(room.lengthy %2 == 0){//y if statement.
      room.lengthy++;//y.
    }
    if(room.lengthx %2 == 0){//x if statment.
      room.lengthx++;//x.
    }
    console.log(room.lengthy + " lengthy");
    console.log(room.lengthx + " lengthx");

    // y floor & x floor for whole numbers.
    room.x = Math.floor(room.x);//x.
    room.y = Math.floor(room.y);//y.

    //Math for center to  make it so it gets the center of the room.
    room.centerx = room.x + (room.lengthx/2);//x.
    room.centery = room.y + (room.lengthy/2);//y.

    //Center y and x to whole numbers rounding up.
    room.centerx = Math.ceil(room.centerx);//x.
    room.centery = Math.ceil(room.centery);//y.

    console.log(room.centery + " centery");
    console.log(room.centerx + " centerx");

    //Makeing an array so that we can get the exact...
    //location of the center and not just the number.
    // these are going to be the centery & centerx for the y & x length
    if(room.lengthy %2 == 0){
      room.lengthy ++;
    }
    if(room.lengthx %2 == 0){
      room.lengthx ++;
    }
    room.centerx = Math.ceil(room.lengthx/2);
    room.centery = Math.ceil(room.lengthy/2);
    // this is a empty array so i can get locations in an array
    console.log(room.y + " room.y")
    console.log(room.x + " room.x")
    console.log(room.lengthy + " room.lengthy")
    console.log(room.lengthx + " room.lengthx")
    console.log(room.centerx + " room.centerx")
    console.log(room.centery + " room.centery")
    centerr = [];

    //Pushing the room center to the empty array...
    //to make it so that we will be able to use it.
    room.center = centerr.push([room.centerx, room.centery]);
    //Returning room so that we can use it in other functions.
    return room;
}

  //Function room uses numbers, grid, element and name to make rooms randomly
  function room(numbers, grid, element , name = " "){
    //This gives room from function numbers to function room
    var room = numbers(grid, number = 200);
    //This is what makes it so that they do not overlap
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
    //These next for statements will !only! happen if the first two statement
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
        console.log("made");//this is just to tell us if a room has actually been made
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

  //These variables are to set the numbers and sizes for the grid and num
//Function drawborder is going to make the rooms
//have a boarder using room, numbers and grid
  var grid = grid({x:100,y:200}, Dungeon);
  var num = numbers(grid, 150)
  // This is what physiaclly draws the grid
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
