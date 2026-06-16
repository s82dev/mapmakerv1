export class GameMap{
constructor(data){this.load(data);}
load(data){
this.width=data.width;this.height=data.height;
this.tiles=data.tiles;this.objects=data.objects||[];
}
isWalkable(x,y){
if(x<0||y<0||x>=this.width||y>=this.height)return false;
return this.tiles[y][x]!=="wall";
}
}