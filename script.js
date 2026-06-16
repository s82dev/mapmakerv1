const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const SIZE = 32;

let map = null;

const player = {
    x:0,
    y:0
};

document.getElementById("file").addEventListener("change",function(e){

    const file = e.target.files[0];
    if(!file) return;

    const reader = new FileReader();

    reader.onload = function(){

        map = JSON.parse(reader.result);

        // Spawn auf erstes Gras
        for(let y=0;y<map.height;y++){
            for(let x=0;x<map.width;x++){

                if(map.tiles[y][x]===2){

                    player.x=x;
                    player.y=y;

                    draw();

                    return;

                }

            }
        }

    }

    reader.readAsText(file);

});

function draw(){

    if(!map) return;

    ctx.clearRect(0,0,640,640);

    for(let y=0;y<map.height;y++){

        for(let x=0;x<map.width;x++){

            let color="black";

            if(map.tiles[y][x]==1) color="gray";
            if(map.tiles[y][x]==2) color="green";

            ctx.fillStyle=color;

            ctx.fillRect(
                x*SIZE,
                y*SIZE,
                SIZE,
                SIZE
            );

            ctx.strokeStyle="black";
            ctx.strokeRect(
                x*SIZE,
                y*SIZE,
                SIZE,
                SIZE
            );

        }

    }

    ctx.fillStyle="yellow";

    ctx.beginPath();

    ctx.arc(
        player.x*SIZE+16,
        player.y*SIZE+16,
        10,
        0,
        Math.PI*2
    );

    ctx.fill();

}

document.addEventListener("keydown",function(e){

    if(!map) return;

    let dx=0;
    let dy=0;

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

    let nx=player.x+dx;
    let ny=player.y+dy;

    if(nx<0||ny<0||nx>=map.width||ny>=map.height)
        return;

    // Nur Gras
    if(map.tiles[ny][nx]!=2)
        return;

    player.x=nx;
    player.y=ny;

    draw();

});                    ctx.fillStyle = "black";
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
