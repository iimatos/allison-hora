export default function menu() {
  function handleMenu() {
    const menu = document.querySelector('.menu--mobile');

    function toggleMenu({ currentTarget }) {
      currentTarget.classList.toggle('active');
    }

    menu.addEventListener('click', toggleMenu);
  }

  window.addEventListener('load', handleMenu);
}
