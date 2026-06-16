const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const TILE = 32;

let map = null;

const player = {
    x: 0,
    y: 0
};

document.getElementById("file").addEventListener("change", function(e){

    const file = e.target.files[0];
    if(!file) return;

    const reader = new FileReader();

    reader.onload = function(){

        map = JSON.parse(reader.result);

        // Spawn auf erstem Gras
        for(let y=0;y<map.height;y++){
            for(let x=0;x<map.width;x++){

                if(map.tiles[y][x] === 2){
                    player.x = x;
                    player.y = y;
                    draw();
                    return;
                }

            }
        }

    };

    reader.readAsText(file);

});

function draw(){

    if(!map) return;

    ctx.clearRect(0,0,canvas.width,canvas.height);

    // MAP
    for(let y=0;y<map.height;y++){

        for(let x=0;x<map.width;x++){

            const tile = map.tiles[y][x];

            if(tile === 1){
                ctx.fillStyle = "gray";
            }else if(tile === 2){
                ctx.fillStyle = "green";
            }else{
                ctx.fillStyle = "black";
            }

            ctx.fillRect(x*TILE,y*TILE,TILE,TILE);

            ctx.strokeStyle="black";
            ctx.strokeRect(x*TILE,y*TILE,TILE,TILE);

        }

    }

    // Kisten
    if(map.objects){

        for(const obj of map.objects){

            if(obj.type === "chest"){

                ctx.fillStyle="#8B4513";
                ctx.fillRect(
                    obj.x*TILE+4,
                    obj.y*TILE+4,
                    24,
                    24
                );

                ctx.fillStyle="gold";
                ctx.fillRect(
                    obj.x*TILE+8,
                    obj.y*TILE+8,
                    16,
                    6
                );

            }

        }

    }

    // Spieler
    ctx.fillStyle="yellow";
    ctx.beginPath();
    ctx.arc(
        player.x*TILE+16,
        player.y*TILE+16,
        10,
        0,
        Math.PI*2
    );
    ctx.fill();

}

document.addEventListener("keydown",function(e){

    if(!map) return;

    let dx = 0;
    let dy = 0;

    switch(e.key.toLowerCase()){

        case "w":
            dy=-1;
            break;

        case "s":
            dy=1;
            break;

        case "a":
            dx=-1;
            break;

        case "d":
            dx=1;
            break;

        default:
            return;

    }

    const nx = player.x + dx;
    const ny = player.y + dy;

    if(nx<0 || ny<0 || nx>=map.width || ny>=map.height)
        return;

    if(map.tiles[ny][nx] !== 2)
        return;

    player.x = nx;
    player.y = ny;

    draw();

});
