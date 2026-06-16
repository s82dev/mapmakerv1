document.addEventListener("keydown", function(e){

    if(!currentMap) return;

    let dx = 0;
    let dy = 0;

    const key = e.key.toLowerCase();

    if(key === "w") dy = -1;
    else if(key === "s") dy = 1;
    else if(key === "a") dx = -1;
    else if(key === "d") dx = 1;
    else return;

    const newX = player.x + dx;
    const newY = player.y + dy;

    if(newX < 0 || newY < 0 || newX >= currentMap.width || newY >= currentMap.height)
        return;

    // Nur Gras (2)
    if(currentMap.tiles[newY][newX] !== 2)
        return;

    player.x = newX;
    player.y = newY;

    draw();
});
