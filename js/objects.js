export function interact(game){
const obj=game.map.objects.find(o=>o.x===game.player.x&&o.y===game.player.y);
if(!obj)return;
if(obj.type==="chest"&&!obj.opened){
obj.opened=true;
const gold=Math.floor(Math.random()*33)+1;
game.inventory.addGold(gold);
alert("Du hast "+gold+" Gold gefunden!");
}
}