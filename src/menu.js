(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    mobileMenuLinks: document.querySelectorAll('[data-mobile-menu-link]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);
  refs.mobileMenuLinks.forEach(elem => elem.addEventListener('click', toggleModal));

  function toggleModal() {
    refs.menu.classList.toggle('is-open');
  }
})();


(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-burger-open]"),
    closeModalBtn: document.querySelector("[data-burger-close]"),
    modal: document.querySelector("[data-burger]"),
    mobileMenuLinks: document.querySelectorAll('[data-mobile-buger-link]'),

  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.mobileMenuLinks.forEach(elem => elem.addEventListener('click', toggleModal));

  function toggleModal() {
    refs.modal.classList.toggle("is-burger");
  }
})();
