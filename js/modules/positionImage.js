export default function handlePositionImage() {
  const image = document.querySelector('.sustentabilidade-image--position');
  image.parentNode.style.height = `${image.clientHeight}px`;

  window.addEventListener('DOMContentLoaded', handlePositionImage);
  window.addEventListener('resize', handlePositionImage);
}
