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
// Write Us Modal
var writeUsTrigger = document.querySelector(".write-us-trigger");
var writeUsForm = document.querySelector(".write-us");
var modalClose = document.querySelector(".modal-close");

var writeUsName = document.querySelector(".write-input-name");
var writeUsEmail = document.querySelector(".write-input-email");

writeUsTrigger.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsForm.classList.add("modal-show");
  writeUsName.focus();
});

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsForm.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (writeUsForm.classList.contains("modal-show")) {
      writeUsForm.classList.remove("modal-show");
      writeUsForm.classList.remove("modal-error");
    }
  }
});
// Write Us Error
writeUsForm.addEventListener("submit", function (evt) {
  if (!writeUsName.value || !writeUsEmail.value) {
    evt.preventDefault();
    writeUsForm.classList.remove("modal-error");
    writeUsForm.offsetWidth = writeUsForm.offsetWidth;
    writeUsForm.classList.add("modal-error");
  }
});
// Map Modal
var mapTrigger = document.querySelector(".device-map");
var mapModal = document.querySelector(".our-location");
var mapModalClose = document.querySelector(".map-modal-close");

mapTrigger.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.add("modal-show");
});

mapModalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapModal.classList.contains("modal-show")) {
      mapModal.classList.remove("modal-show");
    }
  }
});
