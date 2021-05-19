const burger = document.querySelector(".burger");
const navbarNav = document.querySelector(".navbar-nav");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navbarNav.classList.toggle("active");
});

var owl = $(".category-carousel");
owl.owlCarousel({
  loop: true,
  dots: false,
});
$(".category-next").click(function () {
  owl.trigger("next.owl.carousel");
});
$(".category-prev").click(function () {
  owl.trigger("prev.owl.carousel", [300]);
});

var owl = $(".news-carousel");
owl.owlCarousel({
  loop: true,
  dots: false,
});
$(".news-next").click(function () {
  owl.trigger("next.owl.carousel");
});
$(".news-prev").click(function () {
  owl.trigger("prev.owl.carousel", [300]);
});
