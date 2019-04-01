
//ClassGrid is a class so we can utilize our grid
//alot more than without it being a class
  class ClassGrid extends Dungeon{
    constructor (name = "x", sizey = 200, sizex = 150,number = 200 ,centerx = 0, centery = 0){
      super(name = "x")
      this._name = name;
       this._sizey = sizey;
       this._sizex = sizex;
       this._centery = centery;
       this._centerx = centerx;
       this._grid = grid;
       this._number = number;
    }

    get sizex(){//getter
      return  this._sizex;
    }

    set sizex(sizex){//setter
      this._sizex = sizex;
    }

    get sizey(){//getter
      return  this._sizey;
    }

    set sizey(sizey){//setter
      this._sizey = sizey;
    }

    get centerx(){//getter
    return this._centerx;
    }

    set centerx(centerx){//setter
    this._centerx = centerx;
    }

    get centerx(){//getter
    return this._centery;
    }

    set centerx(centery){//setter
    this._centery = centery;
    }

    get number(){//getter
      return this._number;
    }

    set number(number){//setter
      this._number = number;
    }

    get grid(){//getter
      return this._grid;
    }

    set grid(grid){//setter
      this._grid = grid;
    }

    //gridObject is to create an object for the sizes
    gridObject(sizex, sizey){
      sizex = this._sizex;
      sizey = this._sizey;
      name = this.name;
    var grids = {
      sizex : sizex,
      sizey : sizey,
      name : name
    };
    return grids;
    }
  //Grid creates the inside of the grid when you make the map
  grid(element, name = "x", sizex, sizey){
    //passing gridObject so we can use the sizes as an object
    var made = this.gridObject(sizex, sizey)
    //make is an empty array so we can push to it
  var make = [];
  //for loops to create the map later
   for (var i = 0; i < made.sizey; i++) {
    make.push([]);
  for (var j = 0; j < made.sizex; j++) {
   //This is to push the new element into the
   //array so it has the name and grid locations
    make[i].push(new element(name,[i],[j]));
      }
    }
 // This is going to be the grid[i][j]
 return make;
  }


//Function draw uses grid to make a border and draw the grid itself
  draw(grid, sizex, sizey){
    //passing grid so we can also use that
    grid = this.grid(ClassGrid, name = "x", sizex, sizey)
    console.log(grid)
  var top_type = "&#8943";// This is the text that is used for the top and bottom

  var walls_type = "&#8942";// This is the text that is used for the sides

  var text = "";  // This is going to be the text variable

  // This var is for the grid.length to be able to store it
  var boarderlength = grid[0].length;

  // This is the length of the grid to put the text in
  var top_text = boarderlength;

  //Fixes is to make the top text fit with
  //larger grids and smaller grids it dose not work as well
  var fixes = grid[0].length;

  text += top_type;//Text is used to determin the text type for border

    // This makes the top border
    for (var i = 0; i < fixes; i++) {
  top_text = text += top_type;
  }

  text += top_type + "<BR>";//The "<BR>" is to make it a square boarder

  // This for satement is for the sides of the grid useing pipes
  for (var i = 0; i < boarderlength; i++) {
    text += walls_type;//Makeing the text to the walls text
  for (var j = 0; j < grid[i].length; j++) {//
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
    randomnumbers(number){
    var random = Math.random() *number;
    var num = Math.floor(random);
    // console.log(num);
    return num;
  }

  //Function oddnums uses randomnumbers and creates only odd numbers
    oddnums(number){
    var num = this.randomnumbers(number);
    while (num % 2 == 0) {
        num =  this.randomnumbers(number);
        }
         // console.log(num);
      return num;
  }


    /*-Numbers makes the random numbers for the rooms to be
       able to draw it in random lengths and random places. */
    numbers(grid, number){
  //Storing random numbers from oddnums in varriables using different
  //variables to get different random odd numbers for different uses.
  var oddnumx =  this.oddnums(this._number);//This is the x odd number

  var oddnumy =  this.oddnums(this._number);//This is the y odd number

  var oddnumlengthx =  this.oddnums(this._number);//This is the length x odd number

  var oddnumlengthy =  this.oddnums(this._number);//This is the length y odd number
console.log(oddnumx + " hello");
    var room = {//room is an object that makes lengthx and y
      lengthx: oddnumlengthx/15 +4, // Length x
      lengthy: oddnumlengthy/15 +4,// Length y
    }

    // these are the random locations
    // These are the random locations
    room.y = oddnumy/2 // y
    room.x = oddnumx/2// x

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
    room.centerr = centerr.push([room.centerx,room.centery]);
    // console.log(room.center + " center");
    // console.log(room.centerr + " centerr");
    // console.log(room.centery + " centery");
    // console.log(room.centerx + " centerx");
    return room;//Returning room so that we can use it in other functionss
}


  //Function room uses numbers, grid, element and name to make rooms randomly
    room(element , name = " ",grid , sizex, sizey, number){
    var room =  this.numbers(grid, number);
    console.log(room);
    // console.log(number + " num");
    // var grid = this.grid(ClassGrid, name = "x", sizex, sizey)
    // console.log(grid);
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
          if(grid[i][j] == (name =" ")){
       //Returns draw so nothhing happens because is is an overlap
       console.log(grid[i][j]);
       console.log("hellollolol");
       return this.draw(grid)
       //If its not an overlap it will go threw the next set of for statements.
          }
        }
      }
    }

  /*-These next for statements will !only! happen if the first two statement
    are true and they will not overlap.

    -These two for statements are for drawing the the rooms.

    -These if statement checks for the room.length to generate the room.
    -The outer for statement is to check for the y value of grid.            */
    for (var i = 0; i < grid.length; i++) {
      //These if statments are to check if the room is on the grid.
      if(i >= room.y && i <= (room.y + room.lengthy - 1)){//y
        // console.log("first if")
        //The inner for statement is to check for x values of the grid.
        for (var j = 0; j < grid[0].length; j++) {
          if(j >= room.x && j <= (room.x + room.lengthx - 1)){//x
            // console.log("second if statement")
            //This uses the rooms length and position of x & y and use
            //it to put it on the grid not draw it just make it part of it.
            grid[i][j] = new element(this._name = " ");
            // console.log(grid[i][j]);
            console.log(i + " , " + j + ";" + "name " + this._name);
            }
          }
        console.log("made");//This is just to tell us if a room has actually been made
        }
      }
      // This returns the updated grid... yay
      // console.log("grid[0][0]");
      // console.log("grid[0][0]");

      return this.draw(grid)
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
        var gridNum = this.gridObject(sizex, sizey);
        var grid = this.grid(ClassGrid, name = "x", sizex, sizey)
      //These for statementjust make it so it gose over the entire grid.
      for (var i = 0; i < gridNum.sizex; i++) {
        for (var j = 0; j < gridNum.sizey; j++) {
          //This make it so that it makes the
          //entire grid "x"(or any text) again.
          grid[i][j] = new element(name);
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
}
var classs = new ClassGrid(this._sizey, this._sizex, this._number)
var grid = (this._grid = classs.grid(ClassGrid, name = "x"))
document.getElementById("blah").innerHTML = classs.draw(grid)

  document.getElementById("Rooms").onclick = function(){
    for (var i = 0; i < 1; i++) {
      document.getElementById("blah").innerHTML = classs.room(ClassGrid, name = " ", grid)


    }
    //Just telling total clicks so that we will know it is useing the right
    //number for the ammount of clicks and even if it does.
    console.log("clicked " + i + " times");
    //End of the rooms beeing made so we know its done clicking
    console.log("Rooms Made");
  }
  //Reset button resets the grid back to normal state
  document.getElementById("Reset").onclick = function(){
  document.getElementById("blah").innerHTML =  classs.reset(ClassGrid, name = "x")
    }
//     document.getElementById("hallways").onclick = function(){
//         document.getElementById("blah").innerHTML = classGrid.verthalls(grid, numbers, Dungeon);
//         document.getElementById("blah").innerHTML = classGrid.horizhalls(grid, numbers, Dungeon);
//
// }
