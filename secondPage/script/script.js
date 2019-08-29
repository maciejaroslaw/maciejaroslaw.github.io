const startButton = document.querySelector('.startGame');

const input = document.querySelector('[name="result"]');
const form = document.querySelector('.dummy');
const target = document.querySelector('.eq');
let x;
let y;
let s;

function getEq(min, max){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
        startButton.innerHTML = 'AM ON DE FONE';
    }

    else{
        x = Math.floor(Math.random() * (max - min) ) + min;
        y = Math.floor(Math.random() * (max - min) ) + min;

        let num = Math.floor(Math.random() * (4 - 1) ) + 1;
        switch(num){
            case 1: s = '+'; break;
            case 2: s = '-'; break;
            case 3: s = '*'; break;
            case 4: s = ':'; break;
        }
        console.log(num);
        if(x%y!=0){
            y++;
        }
        target.innerHTML = `${x}${s}${y}`;
    }   
}

function progressBar(){
    let bar = document.querySelector('.bar');
    let width = 0;
    var id = setInterval(()=>{
        if(width >= 100){
            clearInterval(id);
        }
        else{
            width = width + 0.1;
            bar.style.width = `${width}%`;
        }
    }, 10)
}

startButton.addEventListener('click', ()=>{
    getEq(1, 50);
    document.querySelector('.starter').style.display = 'none';
    document.querySelector('.content').style.display = 'block';
    startButton.style.display = 'none';
})

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    result = parseInt(input.value);
    if(x+y===result){
        console.log("Correct!")
        form.reset();
        getEq(1, 50);
    }
})




