export class Dialogue{
constructor(){
this.dialogues={};
}
add(id,lines){this.dialogues[id]=lines;}
show(id){
const d=this.dialogues[id];
if(!d)return;
alert(d.join("\n"));
}
}