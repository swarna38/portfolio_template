// aos code=====
AOS.init({
    offset: 300,
    duration:2000,
}
);
//   =====aos js end====
// ===swiper slider js=====
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      spaceBetween: 0,
autoplay: 10000,
speed: 800,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,}
  });
//   ===swiper js end=====