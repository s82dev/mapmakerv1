document.addEventListener("keydown", (e) => {

    if (!currentMap) return;

    let dx = 0;
    let dy = 0;

    switch (e.key.toLowerCase()) {
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

    if (nx < 0 || ny < 0 || nx >= currentMap.width || ny >= currentMap.height)
        return;

    if (currentMap.tiles[ny][nx] !== 2)
        return;

    player.x = nx;
    player.y = ny;

    draw();

});
