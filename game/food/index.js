import {} from '../board/index.js'

export function update () {};

export function draw () {
        //create element
        const foodElement = document.createElement('div');
        //creat css
        foodElement.classList.add('snake')
        //position
        foodElement.style.gridRowStart = 5;
        foodElement.style.gridColumnStart = 5;
        //append on DOM
        gameboard.appendChild(foodElement)
        
   
};