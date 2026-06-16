export class Player{
constructor(){this.x=1;this.y=1;this.speed=4;}
move(dx,dy,map){
const nx=this.x+dx, ny=this.y+dy;
if(map.isWalkable(nx,ny)){this.x=nx;this.y=ny;}
}
}