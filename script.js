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

        // Ersten Gras-Block als Spawn finden
        for(let y=0;y<currentMap.height;y++){
            for(let x=0;x<currentMap.width;x++){
                if(currentMap.tiles[y][x] === 2){
                    player.x = x;
                    player.y = y;
                    draw();
                    return;
                }
            }
        }

    };

    reader.readAsText(file);

}

function draw(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    for(let y=0;y<currentMap.height;y++){

        for(let x=0;x<currentMap.width;x++){

            switch(currentMap.tiles[y][x]){

                case 1:
                    ctx.fillStyle = "gray";
                    break;

                case 2:
                    ctx.fillStyle = "green";
                    break;

                default:
                    ctx.fillStyle = "black";
            }

            ctx.fillRect(
                x*tileSize,
                y*tileSize,
                tileSize,
                tileSize
            );

            ctx.strokeStyle="black";
            ctx.strokeRect(
                x*tileSize,
                y*tileSize,
                tileSize,
                tileSize
            );

        }

    }

    // Spieler
    ctx.fillStyle="yellow";
    ctx.beginPath();
    ctx.arc(
        player.x*tileSize+16,
        player.y*tileSize+16,
        10,
        0,
        Math.PI*2
    );
    ctx.fill();

}

document.addEventListener("keydown", function(e){

    if(!currentMap) return;

    let dx = 0;
    let dy = 0;

    switch(e.key.toLowerCase()){

        case "w":
            dy = -1;
            break;

        case "s":
            dy = 1;
            break;

        case "a":
            dx = -1;
            break;

        case "d":
            dx = 1;
            break;

        default:
            return;

    }

    const nx = player.x + dx;
    const ny = player.y + dy;

    if(nx < 0 || ny < 0 || nx >= currentMap.width || ny >= currentMap.height)
        return;

    // Nur Gras (2) ist begehbar
    if(currentMap.tiles[ny][nx] !== 2)
        return;

    player.x = nx;
    player.y = ny;

    draw();

});
