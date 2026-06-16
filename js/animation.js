export class Animation{
constructor(){
this.frame=0;
this.timer=0;
}
update(dt){
this.timer+=dt;
if(this.timer>150){
this.timer=0;
this.frame=(this.frame+1)%4;
}
}
}