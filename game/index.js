import { gameboard } from './board/index.js';
import { SNAKE_SPEED, draw as snakeDraw,update as snakeUpdate } from './snake/index.js'

//const gameboard = document.getElementById('game-board')



let lastTimeRender = 0;

function main(currentTime) {

    window.requestAnimationFrame(main);
   
    const sencondsSinceLastRender = (currentTime - lastTimeRender) / 1000;

    if (sencondsSinceLastRender < 1 / SNAKE_SPEED) return;
    
    lastTimeRender = currentTime;

    update();

    draw();
    
    
}

function update() {
    gameboard.innerHTML = '';
    snakeUpdate();
};

function draw() {
    snakeDraw();
};

window.requestAnimationFrame(main)