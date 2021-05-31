let height = window.innerHeight;
let width = window.innerWidth;
let menu = document.querySelector(".container");

if(width < 800) {
    document.removeChild(menu)
}