const openBtnIpoteka = document.getElementById('ipoteka'); // Ищем по ID кнопки!
const modalIpoteka = document.getElementById('modal_ipoteka'); // Исправили ID!
const closeBtnIpoteka = document.getElementById('close_modal_ipoteka');

openBtnIpoteka.addEventListener('click', function(e) {
    modalIpoteka.classList.add('active');
    e.stopPropagation();
});

closeBtnIpoteka.addEventListener('click', function() {
    modalIpoteka.classList.remove('active');
});