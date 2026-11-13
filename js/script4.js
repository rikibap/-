const rasschet = document.getElementById('rasschet');
const arrow = document.querySelector('.arrow_rasschet');

arrow.addEventListener('click', function(event) {
    
    rasschet.classList.toggle('collapsed');
    
    event.stopPropagation(); 
});