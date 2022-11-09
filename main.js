const menu_bar = document.getElementById('menu-bar');
const navbar_links = document.querySelector('.nav-links');

menu_bar.addEventListener('click', function(){
    navbar_links.classList.toggle('mobile-view');
})