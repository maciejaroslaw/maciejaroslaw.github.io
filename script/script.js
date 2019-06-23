
const menu = document.querySelector(".menu");
const contentIntro = document.querySelector(".content__introduction");
const contentEducation = document.querySelector(".content__education");
const contentTech = document.querySelector(".content__tech");


function menuWrap(){
    menu.classList.toggle('active');
}
function wrapp(){
    // let position = contentEducation.offsetTop - scrollY;
    // if(scrollY === 0){
    //     contentEducation.classList.remove('education--active');
    // }
    if(scrollY > contentIntro.offsetTop){
        contentEducation.classList.add('education--active');
    }
    if(scrollY > contentEducation.offsetTop){
        contentTech.classList.add("tech--active");
    }
}

window.addEventListener("scroll", wrapp);
window.addEventListener("click", menuWrap);

