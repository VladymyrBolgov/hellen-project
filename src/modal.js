(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    mobileModalLinks: document.querySelectorAll('[data-mobile-modal-link]'),

  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.mobileModalLinks.forEach(elem => elem.addEventListener('click', toggleModal));


  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();