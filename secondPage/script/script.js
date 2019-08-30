const startButton = document.querySelector('.startGame');

const input = document.querySelector('[name="result"]');
const resultsButtons = document.querySelectorAll('.result');
const form = document.querySelector('.dummy');
const target = document.querySelector('.eq');
let x;
let y;
let s;
let result;

function getEq(min, max){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
        
        let num = Math.floor(Math.random() * (5 - 1) ) + 1;
        rightResult = Math.floor(Math.random() * (5 - 1) ) + 1;
        switch(num){
            case 1: 
                s = '+'; 
                x = Math.floor(Math.random() * (max - min) ) + min;
                y = Math.floor(Math.random() * (max - min) ) + min;
                result = x + y;
                resultsButtons.forEach(button => {
                    if(button.classList.contains(`result${rightResult}`)){
                        button.innerHTML = `${result}`;
                    }
                    else{
                        button.innerHTML = result + (Math.floor(Math.random() * (12 - 1) ) + 1)
                    }
                });
            break;
            case 2:
                s = '-'; 
                x = Math.floor(Math.random() * (max - min) ) + min;
                y = Math.floor(Math.random() * (max - min) ) + min;
                if(x<y){[x, y] = [y, x];}
                result = x - y;
                resultsButtons.forEach(button => {
                    if(button.classList.contains(`result${rightResult}`)){
                        button.innerHTML = `${result}`;
                    }
                    else{
                        button.innerHTML = result + (Math.floor(Math.random() * (12 - 1) ) + 1)
                    }
                });
            break;
            case 3: 
                s = '*'; 
                x = Math.floor(Math.random() * (max - min) ) + min;
                y = Math.floor(Math.random() * (10 - 1) ) + 1;
                result = x * y;
                resultsButtons.forEach(button => {
                    if(button.classList.contains(`result${rightResult}`)){
                        button.innerHTML = `${result}`;
                    }
                    else{
                        button.innerHTML = result + (Math.floor(Math.random() * (12 - 1) ) + 1)
                    }
                });
            break;
            case 4: 
                s = ':';
                x = Math.floor(Math.random() * (max - min) ) + min;
                y = Math.floor(Math.random() * (10 - 1) ) + 1;
                while(x%y!=0){
                    x++;
                }
                result = x / y;
                resultsButtons.forEach(button => {
                    if(button.classList.contains(`result${rightResult}`)){
                        button.innerHTML = `${result}`;
                    }
                    else{
                        button.innerHTML = result + (Math.floor(Math.random() * (12 - 1) ) + 1)
                    }
                });
            break; 
        }
        target.innerHTML = `${x}${s}${y}`;
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

// function progressBar(){
//     let bar = document.querySelector('.bar');
//     let width = 0;
//     var id = setInterval(()=>{
//         if(width >= 100){
//             clearInterval(id);
//         }
//         else{
//             width = width + 0.1;
//             bar.style.width = `${width}%`;
//         }
//     }, 10)
// }

startButton.addEventListener('click', ()=>{
    getEq(1, 50);
    document.querySelector('.starter').style.display = 'none';
    document.querySelector('.content').style.display = 'block';
    startButton.style.display = 'none';
})

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    let inputResult = parseInt(input.value);
    if(x+y===inputResult){
        console.log("Correct!")
        form.reset();
        getEq(1, 50);
    }
})
resultsButtons.forEach(button => {
    button.addEventListener('click', () =>{
        if(button.classList.contains(`result${rightResult}`)){
            console.log("I AM THE RIGHT ONE");
            getEq(1, 50);
        }
        else{
            console.log("I AM NOT");
        }
    })
});




