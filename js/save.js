export function saveGame(data){
localStorage.setItem("pokemonrpg_save",JSON.stringify(data));
}
export function loadGame(){
const s=localStorage.getItem("pokemonrpg_save");
return s?JSON.parse(s):null;
}