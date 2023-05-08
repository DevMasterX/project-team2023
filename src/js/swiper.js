const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    renderFraction: function (currantClass, totalClass) {
      return (
        '<span class="' +
        currantClass +
        '"></span>' +
        '<span class="swiper-strip"></span> ' +
        '<span class="' +
        totalClass +
        '"></span>'
      );
    },
  },
});
