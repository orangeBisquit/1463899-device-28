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
