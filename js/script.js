// Main Slider
var slideRadios = document.querySelectorAll(".slider-radio");
var sliderContent = document.querySelectorAll(".card");

slideRadios.forEach((slideRadios) =>
  slideRadios.addEventListener("change", () => sliderFunction())
);

function sliderFunction() {
  if (slideRadios[0].checked == true) {
    sliderContent[0].classList.add("card-active");
    sliderContent[1].classList.remove("card-active");
    sliderContent[2].classList.remove("card-active");
  } else if (slideRadios[1].checked == true) {
    sliderContent[1].classList.add("card-active");
    sliderContent[0].classList.remove("card-active");
    sliderContent[2].classList.remove("card-active");
  } else if (slideRadios[2].checked == true) {
    sliderContent[2].classList.add("card-active");
    sliderContent[0].classList.remove("card-active");
    sliderContent[1].classList.remove("card-active");
  }
}
// Services
var serviceButtons = document.querySelectorAll(".service-name");

serviceButtons.forEach(function (item) {
  item.addEventListener("click", function (evt) {
    evt.preventDefault();

    var currentSlide = item.dataset.serviceCotrol;

    document
      .querySelector(".service-name" + ".service-name-active")
      .classList.remove("service-name-active");
    item.classList.add("service-name-active");

    document
      .querySelector(".services-descr-item" + ".descr-item-active")
      .classList.remove("descr-item-active");
    document
      .querySelector('[data-service-descr="' + currentSlide + '"]')
      .classList.add("descr-item-active");
  });
});
