export function isBlocked(map,x,y){
return !map.isWalkable(x,y);
}