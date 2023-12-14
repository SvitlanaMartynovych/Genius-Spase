const modal = document.querySelector('.backdrop');
const modallBtnOpen = document.querySelector('.modal-btn-open');
const modallBtnClose = document.querySelector('.modal-btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

modallBtnOpen.addEventListener('click', toggleModal);
modallBtnClose.addEventListener('click', toggleModal);
