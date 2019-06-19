function menuWrap(){
    const menu = document.querySelector(".menu");
    menu.classList.toggle('active');
}

window.addEventListener("click", menuWrap);