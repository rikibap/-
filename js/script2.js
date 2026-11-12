const searchToggle = document.getElementById('lupa')

const searchDropdown = document.getElementById('poisk')

searchToggle.addEventListener('click', function(event){

    searchDropdown.classList.toggle('active');

    if (searchDropdown.classList.contains('active')) {
        searchDropdown.querySelector('.poisk_input').focus();
    }
    
    event.stopPropagation();
});
document.addEventListener('click', function(event) {

    if (!searchDropdown.contains(event.target) && !searchToggle.contains(event.target)) {
        searchDropdown.classList.remove('active');
    }
});