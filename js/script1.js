const nav = document.getElementById('header_container_2');

const header = document.getElementById('header');


const navOffset = nav.getBoundingClientRect().top + window.scrollY;

window.addEventListener('scroll', function() {

    if (window.scrollY >= navOffset) {

        nav.classList.add('is-fixed');

        header.style.height = header.offsetHeight + 'px';
    } else {

        nav.classList.remove('is-fixed');

        header.style.height = 'auto';
    }
});