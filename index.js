var icon_hamburger = document.querySelector(".icon-hamburger");
var icon_close = document.querySelector(".icon-close");
var nav = icon_close.parentElement;
icon_hamburger.addEventListener("click", ()=>{
    nav.classList.add("active");
});
icon_close.addEventListener("click", ()=>{
    nav.classList.remove("active");
});