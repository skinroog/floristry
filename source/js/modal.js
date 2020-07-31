let modalOverlay = document.querySelector('.page-main__modal-overlay');
let buttonOrder = document.querySelector('.button-order');
let buttonCloseModal = document.querySelector('.modal__button-close');

buttonOrder.onclick = function () {

    if (!modalOverlay) return;

    modalOverlay.classList.add('page-main__modal-overlay--open');
    document.body.classList.add('no-scroll');

    let scrollbarWidth = getScrollbarWidth();
    document.body.style.paddingRight = scrollbarWidth + 'px';
};

function getScrollbarWidth() {
    let elem = document.createElement('div');
    elem.style.width = '100px';
    elem.style.height = '100px';
    elem.style.overflowY = 'scroll';

    document.body.append(elem);
    let scrollbarWidth = elem.offsetWidth - elem.clientWidth;
    elem.remove();

    return scrollbarWidth;
}

function closeModal() {
    modalOverlay.classList.remove('page-main__modal-overlay--open');
    document.body.classList.remove('no-scroll');
    document.body.style.paddingRight = '';
}


buttonCloseModal.onclick = function () {
    if (!modalOverlay) return;
    closeModal();
};

modalOverlay.onclick = function () {
        if (event.target != modalOverlay) return;
        closeModal();
};

document.addEventListener('keydown', function (event) {
    if (event.code == 'Escape' && modalOverlay.classList.contains('page-main__modal-overlay--open')) {
        closeModal();
    }
});


