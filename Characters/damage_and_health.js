// this is going to be to damage and health weapons and items for eneimes and
// for the heros
// this will need the person class and atributes for cetain things
//P = Player on the grid
//E = Enemy on the grid
class Health_And_Damage extends Dungeon{
constructor(){

}
//this will be what gets increased
//over how may kills the player gets
healthPlus_P(){
if(enemy_killed == true){
  new_P_health += 75

}
var enemy_killed = false
}
//damage will increase with each kill
//and stage / room compleate
damagePlus_P(){
  if(dungeon_room_cleared == true){
    new_P_damage += 5

  }
  var dungeon_room_cleared = false
}
//this will be what gets increased
//over how may rooms the player completes
healthPlus_E(){
  if(enemy_killed == true){
    new_P_health += 100

  }
  var enemy_killed = false
}
//damage will increase with each
// stage / room compleate
damagePlus_E(){
  if(dungeon_room_cleared == true){
    new_E_damage += 5

  }
  var dungeon_room_cleared = false

}
}
