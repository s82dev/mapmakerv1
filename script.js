const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const tileSize = 32;

let currentMap = null;

const player = {
    x: 1,
    y: 1
};

document.getElementById("file").addEventListener("change", loadMap);

function loadMap(event){

    const file = event.target.files[0];

    if(!file) return;

    const reader = new FileReader();

    reader.onload = function(){

        currentMap = JSON.parse(reader.result);

        findSpawn();

        draw();

    }

    reader.readAsText(file);

}

function findSpawn(){

    for(let y=0;y<currentMap.height;y++){

        for(let x=0;x<currentMap.width;x++){

            if(currentMap.tiles[y][x] == 2){

                player.x = x;
                player.y = y;

                return;

            }

        }

    }

}

function draw(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    for(let y=0;y<currentMap.height;y++){

        for(let x=0;x<currentMap.width;x++){

            const tile = currentMap.tiles[y][x];

            switch(tile){

                case 0:
                    ctx.fillStyle="#111";
                    break;

                case 1:
                    ctx.fillStyle="gray";
                    break;

                case 2:
                    ctx.fillStyle="green";
                    break;

                case 3:
                    ctx.fillStyle="blue";
                    break;

                default:
                    ctx.fillStyle="red";

            }

            ctx.fillRect(
                x*tileSize,
                y*tileSize,
                tileSize,
                tileSize
            );

            ctx.strokeStyle="#000";
            ctx.strokeRect(
                x*tileSize,
                y*tileSize,
                tileSize,
                tileSize
            );

        }

    }

    drawPlayer();

}

function drawPlayer(){

    ctx.fillStyle="yellow";

    ctx.beginPath();

    ctx.arc(
        player.x*tileSize+tileSize/2,
        player.y*tileSize+tileSize/2,
        tileSize/3,
        0,
        Math.PI*2
    );

    ctx.fill();

}

document.addEventListener("keydown",function(e){

    if(currentMap==null) return;

    let dx=0;
    let dy=0;

    if(e.key=="ArrowUp") dy=-1;
    if(e.key=="ArrowDown") dy=1;
    if(e.key=="ArrowLeft") dx=-1;
    if(e.key=="ArrowRight") dx=1;

    const newX=player.x+dx;
    const newY=player.y+dy;

    if(newX<0) return;
    if(newY<0) return;
    if(newX>=currentMap.width) return;
    if(newY>=currentMap.height) return;

    // Nur Gras (2) ist begehbar
    if(currentMap.tiles[newY][newX]!=2) return;

    player.x=newX;
    player.y=newY;

    draw();

});
    
