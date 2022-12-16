const menu=document.querySelector('.menu');
const ag=document.querySelector('.menu__btn');
const nav=document.querySelector('.nav');
const menuNav=document.querySelector('.menu-nav');
const items=document.querySelectorAll('.menu-nav__item');
let showMenu = false;
menu.addEventListener('click',togglemenu);

 function togglemenu(){
 if(!showMenu)
 {
    ag.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    items.forEach(item=>item.classList.add('open'));
    showMenu=true;
 }
 else{
    ag.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    items.forEach(item=>item.classList.remove('open'));
    showMenu=false;
 }
}
