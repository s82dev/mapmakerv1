export function checkTeleport(game){
const obj=game.map.objects.find(o=>o.type==="teleporter"&&o.x===game.player.x&&o.y===game.player.y);
if(!obj)return;
const target=game.data.maps[obj.target];
if(!target)return;
game.map.load(target);
game.player.x=target.spawn.x;
game.player.y=target.spawn.y;
}