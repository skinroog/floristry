let modalOverlay = document.querySelector('.page-main__modal-overlay');
let buttonOrder = document.querySelector('.special-offers__order-button');
let buttonCloseModal = document.querySelector('.modal__button-close');

if (buttonOrder) {
    buttonOrder.onclick = function () {
        if (!modalOverlay) return;
        modalOverlay.classList.add('page-main__modal-overlay--open');
        document.body.classList.add('no-scroll');
    };
}

if (buttonCloseModal) {
    buttonCloseModal.onclick = function () {
        if (!modalOverlay) return;
        modalOverlay.classList.remove('page-main__modal-overlay--open');
        document.body.classList.remove('no-scroll');
    };
}
