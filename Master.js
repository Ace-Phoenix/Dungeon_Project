//Class Dungeon is going obe the universal variables and getters and setters like name.
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

get name(){
return this._name;
  }
set name(name){
  this._name = name;
  }
toString(){
  return this._name + "";
  }
 }
