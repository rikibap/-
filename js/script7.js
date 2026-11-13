const manage = document.getElementById('manage')
const modal_manage = document.getElementById('modal_manage')
const close_modal_manage = document.getElementById('close_modal_manage')

manage.addEventListener('click', function(){
    modal_manage.classList.add('active');
    event.stopPropagation();
});

close_modal_manage.addEventListener('click', function(){
    modal_manage.classList.remove('active');
});