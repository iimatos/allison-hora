export default function verticalHeight() {
  function setVH() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  window.addEventListener('DOMContentLoaded', setVH);
  window.addEventListener('resize', setVH);
}
