import '@splidejs/splide/css/core';
import { Splide } from '@splidejs/splide';

export default function slide() {
  const options = {
    type: 'loop',
    perPage: 3,
    arrows: true,
    breakpoints: {
      768: {
        perPage: 2,
      },
    },
  };

  function createSlide() {
    const slide = new Splide('.splide', options);
    slide.mount();
  }

  window.addEventListener('load', createSlide);
}
