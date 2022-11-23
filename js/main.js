var logo = document.getElementById('logo');
/* logo animation */
function logoAnimate(e) {
    if (e.currentTarget.classList.contains('animate-logo')) {
      e.currentTarget.classList.remove('animate-logo');
      e.currentTarget.classList.add('animate-logo2');
    } else {
      e.currentTarget.classList.add('animate-logo');
      e.currentTarget.classList.remove('animate-logo2');
    }
}

var y = document.getElementById("h_nav");
var element = document.getElementById("head");
var x = document.getElementById("logo");
function mobMenu() {
  if (y.style.display === "block") {
    y.style.display = "none";
    x.style.display = "block";
    element.style.height = "120px";
    document.getElementById("menu-btn").className = ('fa-solid fa-bars');
  } else {
    y.style.display = "block";
    x.style.display = "none";
    element.style.height = "100vh";
    document.getElementById("menu-btn").className = ('fa-solid fa-xmark');
  }
}

/* Show the menu if window is re-sized to mobile then back to desktop size */
function showMenu() {
var mqdt = window.matchMedia( "(min-width: 768px)" );
var mqmb = window.matchMedia( "(max-width: 768px)" );
element.style.height = "120px";
x.style.display = "block";
document.getElementById("menu-btn").className = ('fa-solid fa-bars');
if (mqdt.matches) {
    y.style.display = "inline";  // window width is at least than 1050px
  }
if (mqmb.matches) {
    y.style.display = "none";  // window width is less than 1050px
}
}

function init() {
  'use strict';
  document.getElementById('menu-btn').onclick = mobMenu;
  logo.addEventListener('click', logoAnimate);
  window.onresize = showMenu;
}

window.onload = init;

