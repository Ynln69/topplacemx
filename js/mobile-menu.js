(() => {
  const mobileMenu = document.querySelector(".js-menu-container");
  const pageContent = document.querySelector(".page-content");
  const openMenuBtn = document.querySelector(".js-open-menu");
  const closeMenuBtn = document.querySelector(".js-close-menu");
  const anchorLinks = document.querySelectorAll('a[href^="#"]'); // Отримуємо всі якірні посилання

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute("aria-expanded") === "true" || false;
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenu.classList.toggle("is-open");
    pageContent.classList.toggle("blur-background", !isMenuOpen);

    const scrollLockMethod = !isMenuOpen
      ? "disableBodyScroll"
      : "enableBodyScroll";
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);

  // Закриття мобільного меню при натисканні на якірні посилання
  anchorLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("is-open");
      pageContent.classList.remove("blur-background");
      openMenuBtn.setAttribute("aria-expanded", false);
      bodyScrollLock.enableBodyScroll(document.body);
    });
  });

  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (!e.matches) return;
    mobileMenu.classList.remove("is-open");
    pageContent.classList.remove("blur-background");
    openMenuBtn.setAttribute("aria-expanded", false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
