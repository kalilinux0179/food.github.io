let navbar = document.querySelector('.header .flex .navbar');
let menu = document.querySelector('#menu-btn');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

profile = document.querySelector('.header .flex .profile');
document.querySelector('#user-btn').onclick = () => {
    profile.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    profile.classList.remove('active');
}
// loader starts
function loader(){
    document.querySelector('.loader').style.display="none";
}

function fadeOut(){
    setInterval(loader,2000);
}

window.onload =fadeOut;
// loader ends