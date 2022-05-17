(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    mobileMenuLinks: document.querySelectorAll('[mobile-menu-link]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);
  refs.mobileMenuLinks.forEach(elem => elem.addEventListener('click', toggleModal));

  function toggleModal() {
    refs.menu.classList.toggle('is-open');
  }
})();