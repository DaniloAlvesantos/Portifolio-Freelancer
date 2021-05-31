let menuTab = document.querySelector('.img');

menuTab.addEventListener("click",(e)=>{
    e.preventDefault();
    let menuIcons = document.querySelector('.menu-mobile ul');
    if(menuIcons.classList.contains('show-menu')){
        menuIcons.classList.remove('show-menu');
    }else{
        menuIcons.classList.add("show-menu");
    }
})
