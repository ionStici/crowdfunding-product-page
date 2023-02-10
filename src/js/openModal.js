const main = document.querySelector('.main');
const modalLayout = document.querySelector('.modal__layout');
const modal = document.querySelector('.modal');

const btnBack = document.querySelector('.btn-back');

btnBack.addEventListener('click', function () {
    main.classList.add('open-modal');
});
