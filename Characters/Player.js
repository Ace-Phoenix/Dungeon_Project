// this is going tot be
class Player extends Dungeon{
constructor(grid){

}

//playerHealth base : 75
//playerHealth goes up by 75 every level compleate
playerHealth(){
//P references Player(not the file but the player on the grid)
var health_P_base = 75;
var new_P_health = health_P_base
}
//playerDamage base : 5
//playerDamage goes up by 5 every enemy kiled compleate
playerDamage(){
var damage_P_base = 5;
var new_P_damage = damage_P_base

}
//gives the player hp total and damage total
currentPlayerStats(){
  //health
var total_P_health = health_P_base + dungeon_room_cleared;
//damage
var total_P_damage = damage_P_base + kills;
}
}
