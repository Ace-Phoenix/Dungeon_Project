// this is going to be the functions and variables that will be used
// everything if it can be (anyhintg that reapets and can be put into a function)

class Dungeon {
  constructor(name) {
    this._name = name;

  }
  //kill counter for players total kills

// kills(grid){
//
// }
// dungeon_Math_Plus(){
//
// }
// dungeon_room_cleared(grid){
//
// }
// enemy_killed(grid){
//
// }
toString(){
  return this._name;
}
get name(){
return this._name;
}
set name(name){
  this._name = name;
}
}
