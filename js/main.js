'use strict';

/* logo animation */
const logo = document.getElementById('logo');
function logoAnimate(e) {
    if (e.currentTarget.classList.contains('animate-logo')) {
      e.currentTarget.classList.remove('animate-logo');
      e.currentTarget.classList.add('animate-logo2');
    } else {
      e.currentTarget.classList.add('animate-logo');
      e.currentTarget.classList.remove('animate-logo2');
    }
    document.getElementById("logo").onClick = logoAnimate();
}

logo.addEventListener('click', logoAnimate);