const openBtn = document.getElementById('open_modal_zakaza')
//присваеваем элементу openBtn элемент open_modal_zakaza

const modal = document.getElementById('modal_zakaza')

const closeBtn = document.getElementById('close_modal_zakaza')

openBtn.addEventListener('click', function(){
    //при клике на кнопку добавляется класс active для модалки, чтобы она могла открываться
    modal.classList.add('active');
});
closeBtn.addEventListener('click', function(){
    //при клике на кнопку убирается класс active, из-за чего модалка закрывается
    modal.classList.remove('active');
});
 