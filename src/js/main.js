// enable strict mode
'use strict';
document.addEventListener('DOMContentLoaded', () => {
   const sliderMain = new Swiper('.slider-main__container', {
      spaceBetween: 30,
      pagination: {
         el: '.swiper-pagination',
         clickable: true,
      },
   });
});