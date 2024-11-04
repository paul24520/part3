const buttonShow = document.querySelector('.brands__expend-button');
const list = document.querySelector('.brands__list'); 
const span = document.querySelector('.brands__expend-text');

buttonShow.addEventListener('click', toggleClass);

function toggleClass() {
    list.classList.toggle('brands__list--visible');
    span.classList.toggle('brands__expend-text-rotate')
    if (list.classList.contains('brands__list--visible')) {
        span.textContent = 'Скрыть';
    } else {
        span.textContent = 'Показать все';
    }
    }

