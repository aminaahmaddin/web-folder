const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}
// function menu(){
//     document.getElementById('menu-icon');
    
// }
// function navbar(){
//     document.getElementsByClassName('navbar');
    
// }