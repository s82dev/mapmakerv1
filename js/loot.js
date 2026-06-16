export function randomGold(){
const r=Math.random();
if(r<0.50)return 1+Math.floor(Math.random()*5);
if(r<0.80)return 6+Math.floor(Math.random()*10);
if(r<0.95)return 16+Math.floor(Math.random()*10);
return 26+Math.floor(Math.random()*8);
}