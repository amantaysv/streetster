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
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 3,
      nav:true,
    }
  }
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
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 3,
    },
  },
});
$(".news-next").click(function () {
  owl.trigger("next.owl.carousel");
});
$(".news-prev").click(function () {
  owl.trigger("prev.owl.carousel", [300]);
});
