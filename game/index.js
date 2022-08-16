import { gameboard } from './board/index.js';
import { SNAKE_SPEED, draw as snakeDraw,update as snakeUpdate } from './snake/index.js'
import {draw as foodDraw, update as foodUpdate} from './food/index.js'

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
    foodUpdate();
};

function draw() {
    snakeDraw();
    foodDraw();
};

window.requestAnimationFrame(main)