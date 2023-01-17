export default function menu() {
  function handleMenu() {
    const menu = document.querySelector('.menu--mobile');

    function toggleMenu({ currentTarget }) {
      currentTarget.classList.toggle('active');
    }

    menu.addEventListener('click', toggleMenu);
  }

  function handleMenuResponsive() {
    const menu = document.querySelector('.menu--mobile');
    if (menu && window.innerWidth > 768) {
      menu.classList.remove('active');
    }
  }

  window.addEventListener('resize', handleMenuResponsive);
  window.addEventListener('load', handleMenu);
}
