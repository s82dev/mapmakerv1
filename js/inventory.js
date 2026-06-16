export class Inventory{
constructor(){this.gold=0;this.items=[];}
addGold(amount){this.gold+=amount;}
addItem(item){this.items.push(item);}
}