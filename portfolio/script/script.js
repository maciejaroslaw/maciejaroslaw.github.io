const menuButton = document.querySelector('.menu__button');
const menuUl = document.querySelector('.menu ul');
const menuLi = document.querySelectorAll('li');
const menu = document.querySelector('.menu');

menuButton.addEventListener('click', ()=>{
    menuButton.classList.toggle('open');
    menuUl.classList.toggle('open');
})

function goTo(position){
    window.scroll(0, position);
}

menuLi.forEach(li => {
    li.addEventListener('click', function(){
        const target = document.querySelector(`${this.dataset.target}`);
        const position = target.offsetTop;
        goTo(position);
    })
});


