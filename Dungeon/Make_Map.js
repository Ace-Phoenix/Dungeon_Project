
//ClassGrid is a class so we can utilize our grid
//alot more than without it being a class
<<<<<<< HEAD
  class ClassGrid{
    constructor (name = "x", sizex = 150, sizey = 200, centerx = "ur mum", centery = "ur mum"){
      this._sizex = sizex;
       this._sizey = sizey;
       this._name = name;
       this.centerx = centerx;
       this.centery = centery;
    }
    get sizex(){//getter
      return  this._sizex;
    }
    get sizey(){
      return  this._sizey;
    }
    get centery(){
      return this._centerx;
    }
    get centerx(){
      return this._centerx;
    }
    set sizex(sizex){
      this._sizex = sizex;
    }
    set sizey(sizey){
=======
  class ClassGrid extends Dungeon{
    constructor (name = "x", sizey = 200, sizex = 150, number = 200, grid){
      super(name)
      this._name = name;
       this._sizey = sizey;
       this._sizex = sizex;
       this._grid = grid;
       this._number = number;
    }

    get sizey(){//getter
      return  this._sizey;
    }

    set sizey(sizey){//setter
>>>>>>> 67e11ef3efd87940a1d292d323d6c9391b9fedd3
      this._sizey = sizey;
    }

    get sizex(){//getter
      return  this._sizex;
    }
<<<<<<< HEAD
    set centerx(centerx){
      this._centerx = centerx;
    }
    gridObject(sizex, sizey, size){
     var grid = {
       sizex : 100,
       sizey : 200,
     }
     return grid;
=======

    set sizex(sizex){//setter
      this._sizex = sizex;
    }

    get grid(){//getter
      return this._grid;
    }

    set grid(grid){//setter
      this._grid = grid;
>>>>>>> 67e11ef3efd87940a1d292d323d6c9391b9fedd3
    }
    // This is going to be the empty array that we can pcuh and pull from
    //var number = number;
    // This is the empty array that u push and pull from
    // This is to push into the make, array
<<<<<<< HEAD
  grid(element, name, sizex, sizey){
  var made = this.gridObject(sizex, sizey)
  var make = [];
   for (var i = 0; i < made.sizex; i++) {
    make.push([]);
   for (var j = 0; j < made.sizey; j++) {
=======
  grid(element, name, sizey = 200, sizex = 150, grid){
    console.log(this._sizey + " thissizey");
    console.log(this._sizex + " this.sizex");
    this._sizey = 200;
    this._sizex = 150;
    var grid = []
   for (var i = 0; i < this._sizey; i++) {
    grid.push([]);
    // console.log(grid);
  for (var j = 0; j < this._sizex; j++) {
>>>>>>> 67e11ef3efd87940a1d292d323d6c9391b9fedd3
   //This is to push the new element into the
   //array so it has the name and grid locations
    grid[i].push(new element(this._name,[i][j]));
      }
    }
 // This is going to be the grid[i][j]
 // console.log(grid);
 this._grid = grid
 return this._grid;
  }


//Function draw uses grid to make a border and draw the grid itself
<<<<<<< HEAD
  draw(grid, sizex, sizey){
var gridNum = this.gridObject(sizex, sizey);
   // grid.size = 300
   // grid.sizex = 100
   // grid.sizey = 200
   var grid = this.grid(Dungeon, sizex, sizey);
=======
  draw(grid,name, sizey, sizex){
   // grid.size = 300
   // grid.sizex = 100
   // grid.sizey = 200
   var grid = this.grid(Dungeon,name , sizey, sizex, grid);
   console.log(this._grid);
>>>>>>> 67e11ef3efd87940a1d292d323d6c9391b9fedd3
  var top_type = "&#8943";// This is the text that is used for the top and bottom

  var walls_type = "&#8942";// This is the text that is used for the sides

  var text = "";  // This is going to be the text variable

  // This var is for the grid.length to be able to store it
  var boarderlength = grid.length;

  // This is the length of the grid to put the text in
  var top_text = boarderlength;

  //Fixes is to make the top text fit with
  //larger grids and smaller grids it dose not work as well
  var fixes = grid.length ; console.log(grid.length + " ?");

  text += top_type;//Text is used to determin the text type for border


    // This makes the top border
    for (var i = 0; i < fixes; i++) {
  top_text = text += top_type;
  }

  text += top_type + "<BR>";//The "<BR>" is to make it a square boarder

  // This for satement is for the sides of the grid useing pipes
  for (var i = 0; i < boarderlength; i++) {
    text += walls_type;//Makeing the text to the walls text
  for (var j = 0; j < grid[0].length; j++) {
    text += "" + grid[i][j];//Setting the grid text in the middle with no space
  }
    text += walls_type + "<BR>";//Setting wall text again
  }
  text += top_type;//Setting the top and bottom text again
  for (var i = 0; i < fixes; i++) {
    top_text = text += top_type;//Setting the text to the grid length
  }
  text += top_type;//Setting it again

  return text;//Returning the text so that when the grid is drawn it is a grid
}

  //Function randomnumbers creates random numbers using number.
    randomnumbers(number = 200){
    var random = Math.random() *number;
    var num = Math.floor(random);
    // console.log(num);
    return num;
  }

  //Function oddnums uses randomnumbers and creates only odd numbers
    oddnums(number = 200){
    var num = this.randomnumbers(number);
    while (num % 2 == 0) {
        num =  this.randomnumbers(number);
        }
         // console.log(num);
      return num;
  }

//stil do not knoiw why it dose not go through that second for statement for the rooms

    /*-Numbers makes the random numbers for the rooms to be
       able to draw it in random lengths and random places. */
    numbers(grid, number = 200){
  //Storing random numbers from oddnums in varriables using different
  //variables to get different random odd numbers for different uses.
  var oddnumx =  this.oddnums(number);//This is the x odd number

  var oddnumy =  this.oddnums(number);//This is the y odd number

  var oddnumlengthx =  this.oddnums(number);//This is the length x odd number

  var oddnumlengthy =  this.oddnums(number);//This is the length y odd number

    var room = {//room is an object that makes lengthx and y
      lengthx: oddnumlengthx/15 +8, // Length x
      lengthy: oddnumlengthy/15 +8,// Length y
    }

    // these are the random locations
    // These are the random locations
    room.y = oddnumy // y
    room.x = oddnumx// x

    //These two are floors to get whole numbers
    room.lengthy = Math.floor(room.lengthy);//y
    room.lengthx = Math.floor(room.lengthx);//x

    //These are floors to get whole numbers
    room.y = Math.floor(room.y);//y
    room.x = Math.floor(room.x);//x

    //This if statement is to get odd numbers for lengthy
    //after being changed into a non odd number.
    if(room.lengthy %2 == 0){
      room.lengthy ++;//This is making it a odd number again by adding one.
    }
    //This if statement is the same as the
    //last just for lengthx instead.
    if(room.lengthx %2 == 0){
      room.lengthx ++;//This is makeing it a odd number again by adding one.
    }

    //These first four lines here create centers parts x and y
    room.centerx = (room.lengthx/2);//This is center x.

    room.centery = (room.lengthy/2);//This is center y.

    room.centerx = Math.ceil(room.centerx);//This makes it a rounded up #.

    room.centery = Math.ceil(room.centery);//This makes it a rounded up #.

    var centerr = [];//Making an array to push the centers into.

    // console.log(room.y + " room.y" + " . " + room.x + " room.x");
    // console.log(room.lengthy + " room.lengthy" + " . " + room.lengthy + " room.lengthx");
    // console.log(room.centerx + " room.centerx" + " . " + room.centery + " room.cenetry");

    //Making center the absolute ceneter of the room
    room.centerr = centerr.push([room.centerx, room.centery]);
    return room;//Returning room so that we can use it in other functionss
}


  //Function room uses numbers, grid, element and name to make rooms randomly
<<<<<<< HEAD
    room(grid, element, name){
    var number = 200;
    var room =  this.numbers(grid, number);
    var grid = this.grid(Dungeon, name = "x");
=======
    room(element , name = " ", sizex, sizey, grid){
      var number = 200;
    var room =  this.numbers(grid, number);
    var grid = this.grid(Dungeon, name, sizey, sizex, grid);
    // console.log(typeof(grid) +" this.grid")

>>>>>>> 67e11ef3efd87940a1d292d323d6c9391b9fedd3
    //This gives room from function numbers to function room
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
<<<<<<< HEAD
          //  console.log(grid[i][j] + " grid IJ")
       //Returns draw so nothhing happens because is is an overlap
       //If its not an overlap it will go threw the next set of for statements.
       return this.draw(grid) + console.log("true");;
=======
            // console.log(grid[i][j]._name);
            // console.log(name);
       //Returns draw so nothhing happens because is is an overlap
       //If its not an overlap it will go threw the next set of for statements.
       return this.draw(grid) + console.log("true");
>>>>>>> 67e11ef3efd87940a1d292d323d6c9391b9fedd3
            }
          }
        }
      }
  /*-These next for statements will !only! happen if the first two statement
    are true and they will not overlap.
    -These two for statements are for drawing the the rooms.

    -These if statement checks for the room.length to generate the room.
    -The outer for statement is to check for the y value of grid.*/
<<<<<<< HEAD
    console.log(" begining of second part");
=======
    // console.log(grid.length + " lengtth");
>>>>>>> 67e11ef3efd87940a1d292d323d6c9391b9fedd3
    for (var i = 0; i < grid.length; i++) {
      //These if statments are to check if the room is on the grid.

      // console.log("hello");

      if(i >= room.y && i <= (room.y + room.lengthy)){//y
        //The inner for statement is to check for x values of the grid.
      //???it looks right on all logs yet still noe effect after hear??
        for (var j = 0; j < grid[0].length; j++) {
<<<<<<< HEAD
=======
          // console.log(j + " j")

>>>>>>> 67e11ef3efd87940a1d292d323d6c9391b9fedd3
            //This uses the rooms length and position of x & y and use
            if(j >= room.x && j <= (room.x + room.lengthx)){//
            //it to put it on the grid not draw it just make it part of it.
<<<<<<< HEAD
            grid[i][j] =  new element(name = " ");
            console.log(grid[i][j] + " jirqwemo[kl]")
=======
            grid[i][j] = new element(name = " ");
            console.log(grid[i][j]);
            console.log(i + " i");
            console.log(j + " j");
>>>>>>> 67e11ef3efd87940a1d292d323d6c9391b9fedd3
            }
          }
        }
      }
//This is just to tell us if a room has actually been made
      // This returns the updated grid... yay
      return  this.draw(grid);
    }
    //Function reset, resets the grid back to its original state/stage.
/*
This function is going to make verticalhalls than get connected to the
horizontal halls
*/
     verthalls(grid, numbers, element, name = " "){
      var room = this.numbers(grid, number);
      var oldroom = room.x;
        for (var i = 0; i < room.y - oldroom; i++) {
        if (grid[i] == "x") {
          grid[i] = new element(name);
        }
      }
      console.log(i + " i");
      return  draw(grid);
    }
/*
This function is going to make horizontal lines that
connect to the vertical lines by useing the center array
*/
      horizhalls(grid, numbers, element, name = " "){
      var room = this.numbers(grid, number = 200);
      var oldroom = room.y;
        for (var j = 0; j < room.x - oldroom; j++) {
          if (grid[j] == "x") {
            grid[j] = new element(name);
          }
      }
      console.log(j + " j");
      return  this.draw(grid)
    }

      reset(element, name = "x", sizex, sizey){
<<<<<<< HEAD
        var gridNum = this.gridObject( sizex, sizey);
        var grid = this.grid(Dungeon, name = "x", sizex, sizey)
=======
        var gridNum = this.gridObject(size, sizex, sizey);
        var grid = this.grid(ClassGrid, name = "x", size, sizex, sizey)
>>>>>>> 67e11ef3efd87940a1d292d323d6c9391b9fedd3
      //These for statementjust make it so it gose over the entire grid.
        for (var i = 0; i < gridNum.sizex; i++) {
        for (var j = 0; j < gridNum.sizey; j++) {
          //This make it so that it makes the
          //entire grid "x"(or any text) again.
          grid[i][j] = new element(name = " ");
        }
      }
      //Returns draw so it makes it so that the
      //grid is all one text after being changed.
      return  this.draw(grid);
    }

//Function drawborder is going to make the rooms
//have a boarder using room, numbers and grid
  // This is what physiaclly draws the grid
  //Rooms button make sthe rooms
<<<<<<< HEAD
  }
=======
}
var classs = new ClassGrid(name = "x", sizey = 200,sizex = 150);
var grids = classs.grid(element = Dungeon, name);
classes = new ClassGrid(name, sizey = 200, sizex = 150, this._number = 200, grids)
console.log(classes);
    document.getElementById("blah").innerHTML = classs.draw(grids);
>>>>>>> 67e11ef3efd87940a1d292d323d6c9391b9fedd3

  var classs = new ClassGrid(name);
  document.getElementById("blah").innerHTML = classs.draw(classs.grid, name = "x");
      document.getElementById("Rooms").onclick = function(){
      for (var i = 0; i < 10; i++) {

<<<<<<< HEAD
      document.getElementById("blah").innerHTML = classs.room(classs.grid, Dungeon, name = " " );
    }
=======
      document.getElementById("blah").innerHTML = classes.room(Dungeon, name=" ");
}
>>>>>>> 67e11ef3efd87940a1d292d323d6c9391b9fedd3
    //Just telling total clicks so that we will know it is useing the right
    //number for the ammount of clicks and even if it does.
    //End of the rooms beeing made so we know its done clicking

        }
  //Reset button resets the grid back to normal state
<<<<<<< HEAD
      document.getElementById("Reset").onclick = function(){
      document.getElementById("blah").innerHTML =  classs.reset(Dungeon, name = "x")
        }
=======
  document.getElementById("Reset").onclick = function(){
  document.getElementById("blah").innerHTML =  classes.reset(ClassGrid, name = "x")
    }
>>>>>>> 67e11ef3efd87940a1d292d323d6c9391b9fedd3
//     document.getElementById("hallways").onclick = function(){
//         document.getElementById("blah").innerHTML = classGrid.verthalls(grid, numbers, Dungeon);
//         document.getElementById("blah").innerHTML = classGrid.horizhalls(grid, numbers, Dungeon);
//
// }
