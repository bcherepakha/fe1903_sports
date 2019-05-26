var swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  loop: false,
  centeredSlides: document.body.clientWidth <= 721,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
