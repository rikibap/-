const openBtnCena = document.getElementById('cena_doma'); // Ищем по ID кнопки!
const modalCena = document.getElementById('modal_cena_doma');
const closeBtnCena = document.getElementById('close_modal_cena_doma');

openBtnCena.addEventListener('click', function(e) {
    modalCena.classList.add('active');
    e.stopPropagation(); // Чтобы клик не сворачивал виджет #rasschet
});

closeBtnCena.addEventListener('click', function() {
    modalCena.classList.remove('active');
});