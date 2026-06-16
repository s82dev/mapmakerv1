export class UI{
constructor(){
this.goldElement=document.getElementById("gold");
}
update(inv){
if(this.goldElement)this.goldElement.textContent=inv.gold;
}
}