(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-locations-open]'),
    closeModalBtn: document.querySelector('[data-locations-close]'),
    modal: document.querySelector('[data-locations-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('locations-modal-open');
    refs.modal.classList.toggle('locations-backdrop--is-hidden');
  }
})();
