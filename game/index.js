//const gameboard = document.getElementById('game-board')

const SNAKE_SPEED = 5;

let lastTimeRender = 0;

function main(currentTime) {

    window.requestAnimationFrame(main);
   
    const sencondsSinceLastRender = (currentTime - lastTimeRender) / 1000;

    if (sencondsSinceLastRender < 1 / SNAKE_SPEED) return;
    
    lastTimeRender = currentTime;
    
    console.log(lastTimeRender);

    
    
    
}

window.requestAnimationFrame(main)