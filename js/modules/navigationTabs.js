export default function navigationTabs() {
  const iframesButtons = document.querySelectorAll('.local-opcao');
  const iframeMap = document.querySelector('.aspect-ratio iframe');

  function handleClick({ currentTarget }) {
    for (let i = 0; i < iframesButtons.length; i++) {
      iframesButtons[i].classList.remove('active');
    }

    currentTarget.classList.add('active');
    iframeMap.src = currentTarget.dataset.iframe;
  }

  iframesButtons.forEach((button) => {
    button.addEventListener('click', handleClick);
  });
}
