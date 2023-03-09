(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const linkFirst = document.querySelector("[data-body-unlocked-first]");
  const linkSecond = document.querySelector("[data-body-unlocked-second]");
  const linkThird = document.querySelector("[data-body-unlocked-third]");


  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    document.body.classList.toggle("body-modal-open");
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  linkFirst.addEventListener("click", toggleBody);
  linkSecond.addEventListener("click", toggleBody);
  linkThird.addEventListener("click", toggleBody);

  function toggleBody () {
    document.body.classList.toggle("body-modal-open");
    mobileMenu.classList.toggle('is-open');
  }

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
