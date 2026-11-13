const openBtnIpoteka = document.getElementById('ipoteka');
const modalIpoteka = document.getElementById('modal_ipoteka');
const closeBtnIpoteka = document.getElementById('close_modal_ipoteka');

openBtnIpoteka.addEventListener('click', function() {
    modalIpoteka.classList.add('active');
    event.stopPropagation()
});

closeBtnIpoteka.addEventListener('click', function() {
    modalIpoteka.classList.remove('active');
});