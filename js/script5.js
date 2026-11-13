const openBtnCena = document.getElementById('cena_doma');
const modalCena = document.getElementById('modal_cena_doma');
const closeBtnCena = document.getElementById('close_modal_cena_doma');

openBtnCena.addEventListener('click', function() {
    modalCena.classList.add('active'); 
    event.stopPropagation()
});

closeBtnCena.addEventListener('click', function() {
    modalCena.classList.remove('active');
});