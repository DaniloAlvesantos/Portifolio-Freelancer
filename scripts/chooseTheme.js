function choose(){
    let containerMain = document.querySelector('.contianer_main');
    let btn = document.querySelector('.btn');
    let btnChoose = document.querySelector('.icon');
    let header = document. querySelector('.container');
    let slider = document.querySelector('#slider');
    let link0 = document.querySelector('.l0');
    let link1 = document.querySelector('.l1');
    let link2 = document.querySelector('.l2');

    link0.classList.toggle('dark');
    link1.classList.toggle('dark');
    link2.classList.toggle('dark');
    slider.classList.toggle('dark');
    header.classList.toggle('dark');
    btnChoose.classList.toggle('dark');
    btn.classList.toggle('dark');
    document.body.classList.toggle('dark');
    containerMain.classList.toggle('dark');
}