import Swiper from 'swiper';
import { Scrollbar } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
  modules: [Scrollbar],
  scrollbar: {
    el: '.swiper-scrollbar',
    dragClass: 'swiper-scrollbar-drag',
    draggable: true,
  },
  breakpoints: {
    375: {
      spaceBetween: 8,
      slidesPerView: 1.14,
    },
    1440: {
      slidesPerView: 4.05,
      spaceBetween: 20,
    },
  },
});
