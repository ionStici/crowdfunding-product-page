const main = document.querySelector('.main');
const modalLayout = document.querySelector('.modal__layout');
const modalWindow = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal__close-icon');

const subBoxBambo = document.querySelector('.modal__box__active-box--bamboo');
const subBoxBlack = document.querySelector('.modal__box__active-box--black');

const activeBoxClass = 'modal__box--active';
const modalBoxes = document.querySelectorAll('.modal__box');

const allSubBoxes = document.querySelectorAll('.modal__box__active-box');

// BUTTONS
const btnBack = document.querySelector('.btn-back');
const btnBamboo = document.querySelector('.btn-select-bamboo');
const btnBlack = document.querySelector('.btn-select-black');

// MARKUP
const markup = `
<p class="modal__box__active-box__text">Enter tour pledge</p>
<div class="modal__box__active-box__wrapper">
    <input class="modal__box__active-box__input" type="number">
    <button class="btn">Continue</button>
</div>
`;

// OPEN MODAL
btnBack.addEventListener('click', () => main.classList.add('open-modal'));

// CLOSE MODAL

modalLayout.addEventListener('click', () => {
    subBoxBlack.innerHTML = '';
    subBoxBambo.innerHTML = '';
    main.classList.remove('open-modal');

    modalBoxes.forEach(box => box.classList.remove(activeBoxClass));
});

modalCloseBtn.addEventListener('click', () => {
    subBoxBlack.innerHTML = '';
    subBoxBambo.innerHTML = '';
    main.classList.remove('open-modal');

    modalBoxes.forEach(box => box.classList.remove(activeBoxClass));
});

// OPEN MODAL BY CATEGORY

btnBamboo.addEventListener('click', function () {
    main.classList.add('open-modal');
    location.href = '#top';
    setTimeout(() => (location.href = '#'), 50);

    subBoxBambo.innerHTML = '';
    subBoxBambo.insertAdjacentHTML('afterbegin', markup);
    subBoxBambo.closest('.modal__box').classList.add(activeBoxClass);
    document.querySelector('.modal__box__active-box__input').value = 25;
});

btnBlack.addEventListener('click', function () {
    main.classList.add('open-modal');
    location.href = '#top';
    setTimeout(() => (location.href = '#'), 50);

    subBoxBlack.innerHTML = '';
    subBoxBlack.insertAdjacentHTML('afterbegin', markup);
    subBoxBlack.closest('.modal__box').classList.add(activeBoxClass);
    document.querySelector('.modal__box__active-box__input').value = 75;
});

// MODAL BOXES
modalBoxes.forEach(box => {
    box.addEventListener('click', function (e) {
        if (
            !e.target.classList.contains('modal__box__active-box') &&
            !e.target.classList.contains('modal__box__active-box__text') &&
            !e.target.classList.contains('modal__box__active-box__wrapper') &&
            !e.target.classList.contains('modal__box__active-box__input') &&
            !e.target.classList.contains('btn')
        ) {
            //
            if (
                !box.classList.contains('modal__box--inactive') &&
                !box.classList.contains(activeBoxClass)
            ) {
                box.classList.add(activeBoxClass);

                const subBox = box.querySelector('.modal__box__active-box');

                if (
                    subBox &&
                    subBox.classList.contains('modal__box__active-box--bamboo')
                ) {
                    subBoxBambo.innerHTML = '';
                    subBoxBambo.insertAdjacentHTML('afterbegin', markup);
                    subBox.querySelector(
                        '.modal__box__active-box__input'
                    ).value = 25;
                }

                if (
                    subBox &&
                    subBox.classList.contains('modal__box__active-box--black')
                ) {
                    subBoxBlack.innerHTML = '';
                    subBoxBlack.insertAdjacentHTML('afterbegin', markup);
                    subBox.querySelector(
                        '.modal__box__active-box__input'
                    ).value = 75;
                }
            } else if (box.classList.contains(activeBoxClass)) {
                box.classList.remove(activeBoxClass);

                const subBox = box.querySelector('.modal__box__active-box');

                if (
                    subBox &&
                    subBox.classList.contains('modal__box__active-box--bamboo')
                ) {
                    subBoxBambo.innerHTML = '';
                }

                if (
                    subBox &&
                    subBox.classList.contains('modal__box__active-box--black')
                ) {
                    subBoxBlack.innerHTML = '';
                }
            }
            //
        }
    });
});
