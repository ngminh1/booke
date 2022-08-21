// header__wrapper
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
document.getElementById("navbar__item--link").style.color = "black";
document.getElementById("123").style.height = "85.5%";
document.getElementById("header__wrapper").style.boxShadow = "0px 8px 16px 0 rgb(0 0 0 / 20%)";
document.getElementById("navbar__item--menu1").style.color = "#333";
document.getElementById("navbar__item--menu2").style.color = "#333";
document.getElementById("navbar__item--menu3").style.color = "#333";
document.getElementById("navbar__item--menu4").style.color = "#333";
document.getElementById("navbar__item--menu5").style.color = "#333";
document.getElementById("header__wrapper").style.backgroundColor = "#fff";
} else {
document.getElementById("navbar__item--menu1").style.color = "#fff";
document.getElementById("navbar__item--menu2").style.color = "#fff";
document.getElementById("header__wrapper").style.boxShadow = "none";
document.getElementById("navbar__item--menu3").style.color = "#fff";
document.getElementById("navbar__item--menu4").style.color = "#fff";
document.getElementById("navbar__item--menu5").style.color = "#fff";
// document.getElementById("123").style.height = "100px";
// document.getElementById("header__wrapper").style.height = "100px";
document.getElementById("header__wrapper").style.backgroundColor = "transparent";
document.getElementById("navbar__item--link").style.color = "#fff";
}
}

// slider
$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        isFinite: true,
        prevArrow:`<button type='button' class='slick-prev pull-left'>
        <p>Prev</p>
        </button>`,
        nextArrow:`<button type='button' class='slick-next pull-right'>
        <p>Next</p>
        </button>`,
        dots: true,
    });
  });


// modal layout
const modal = document.getElementById("modal");
const openModal = document.querySelector(".mobile-menu i");
const iconCloseModal = document.querySelector(".modal__heading i");
const overlay = document.querySelector(".overlay");

function toggleModal() {
    modal.classList.toggle("show");
}

openModal.addEventListener("click", toggleModal);
iconCloseModal.addEventListener("click", toggleModal);
overlay.addEventListener("click", toggleModal)

modal.addEventListener("click", (e) => {
  if (e.target == e.currentTarget) toggleModal();
});

// active
var btnContainer = document.querySelector(".modal-list");

var btns = btnContainer.getElementsByClassName("modal-link");


for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");


    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }


    this.className += " active";
  });
}
