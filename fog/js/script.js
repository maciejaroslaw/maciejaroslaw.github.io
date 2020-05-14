var container = document.querySelector('.container');

var chilDiv = document.createElement('div');
chilDiv.classList.add('chilDiv');

var circle = document.createElement('div');
circle.classList.add('circle')

container.appendChild(circle);

function createDiv(){
    console.log(chilDiv);
    const maxW = window.innerWidth;
    const maxH = window.innerHeight - 100;
    const x = Math.floor(Math.random() * (maxW - 1)) + 1;
    const y = Math.floor(Math.random() * (maxH - 1)) + 1;

    chilDiv.style.left = `${x}px`;
    chilDiv.style.top = `${y}px`;
    
    container.appendChild(chilDiv);
}

function getDistance(mouseX, mouseY){

    let chilDivX = chilDiv.offsetLeft;
    let chilDivY = chilDiv.offsetTop;

    let xDistance = mouseX - chilDivX - 20;
    let yDistance = mouseY - chilDivY - 20;

    return Math.sqrt((xDistance * xDistance) + (yDistance * yDistance));
}

function moveCamera(mouseX, mouseY){
    circle.style.top = `${mouseY}px`;
    circle.style.left = `${mouseX}px`;
}

document.addEventListener('mousemove', e =>{

    let mouseX = e.pageX;
    let mouseY = e.pageY;
    let distance = getDistance(mouseX, mouseY);

    moveCamera(mouseX, mouseY);

    console.log(distance);
    if(distance<20){createDiv()};
})

chilDiv.addEventListener('mouseover', e =>{
    console.log(e);
})

createDiv();


