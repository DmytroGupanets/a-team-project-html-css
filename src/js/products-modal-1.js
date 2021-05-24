(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-products-open-1]'),
    closeModalBtn: document.querySelector('[data-products-close]'),
    modal: document.querySelector('[data-products-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('products-modal-open');
    refs.modal.classList.toggle('products-backdrop--is-hidden');
  }
})();
