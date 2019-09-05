const startButton = document.querySelector('.startGame');

const input = document.querySelector('[name="result"]');
const resultsButtons = document.querySelectorAll('.result');
const form = document.querySelector('.dummy');
const target = document.querySelector('.eq');
let playerScore = 0;
let x;
let y;
let s;
let result;
var id;
let bar = document.querySelector('.bar');
let barWidth = 0;
let wrongCount = 0;


function getEq(min, max){  
        let checkResult = [];
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
                        checkResult.push(result);
                    }
                    else{
                        let buttonText = Math.floor(Math.random() * ((result + 15) - (result - 15)) ) + (result - 15);
                        while(checkResult.includes(buttonText)===true){
                            buttonText = Math.floor(Math.random() * ((result + 15) - (result - 15)) ) + (result - 15);
                        }
                        checkResult.push(buttonText);
                        if(buttonText<0){
                            buttonText = buttonText * -1;
                        }
                        button.innerHTML = buttonText;
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
                        checkResult.push(result)
                    }
                    else{
                        let buttonText = Math.floor(Math.random() * ((result + 15) - (result - 15)) ) + (result - 15);
                        
                        while(checkResult.includes(buttonText)===true){
                            buttonText = Math.floor(Math.random() * ((result + 15) - (result - 15)) ) + (result - 15);
                        }
                        checkResult.push(buttonText);

                        if(buttonText<0){
                            buttonText = buttonText * -1;
                        }
                        button.innerHTML = buttonText;
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
                        checkResult.push(result)
                    }
                    else{
                        let buttonText = Math.floor(Math.random() * ((result + 15) - (result - 15)) ) + (result - 15);
                        
                        while(checkResult.includes(buttonText)===true){
                            buttonText = Math.floor(Math.random() * ((result + 15) - (result - 15)) ) + (result - 15);
                        }
                        checkResult.push(buttonText);

                        if(buttonText<0){
                            buttonText = buttonText * -1;
                        }
                        button.innerHTML = buttonText;

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
                        checkResult.push(result)
                    }
                    else{
                        let buttonText = Math.floor(Math.random() * ((result + 15) - (result - 15)) ) + (result - 15);
                        
                        while(checkResult.includes(buttonText)===true){
                            buttonText = Math.floor(Math.random() * ((result + 15) - (result - 15)) ) + (result - 15);
                        }
                        checkResult.push(buttonText);

                        if(buttonText<0){
                            buttonText = buttonText * -1;
                        }
                        button.innerHTML = buttonText;
                    }
                });
            break; 
        }
        target.innerHTML = `${x}${s}${y}`;    
}


startButton.addEventListener('click', ()=>{
    getEq(1, 50);
    document.querySelector('.starter').style.display = 'none';
    document.querySelector('.content').style.display = 'block';
    startButton.style.display = 'none';
    playerScore = 0;
    addPoints();
    progressBar(0);
})

resultsButtons.forEach(button => {
    button.addEventListener('click', () =>{
        if(button.classList.contains(`result${rightResult}`)){
            getEq(1, 50);
            playerScore++;
            addPoints();
            progressBar(barWidth - 10);
        }
        else{
            shake();
            progressBar(barWidth + 15);
        }
    })
});

function addPoints(){
    const score = document.querySelector('.score');
    score.innerHTML = `Score: ${playerScore}`;
}

function shake(){
    target.style.animationName = `shake`;
    target.addEventListener('animationend', () =>{
        target.style.animationName = `none`;
    })
}

function progressBar(startWidth){
    if(id){
        clearInterval(id);
    }
    barWidth = startWidth;
    id = setInterval(()=>{
        if(barWidth >= 100){
            clearInterval(id);
            document.querySelector('.content').style.display = 'none';
            document.querySelector('.starter').style.display = 'block';
            startButton.innerHTML = 'Again!';
            startButton.style.display = 'block';
            document.querySelector('.endScore').style.display = `inline-block`;
            document.querySelector('.endScore').innerHTML = `Your score: ${playerScore}`;
            platerScore = 0;
        }
        else{
            barWidth = barWidth + 0.1;
            bar.style.width = `${barWidth}%`;
        }
    }, 15)
}


