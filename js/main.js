// to top btn 
let topBtn = document.querySelector(".totop-btn");

window.onscroll = function() {
    if (window.pageYOffset >= 500) {
        topBtn.style.display = "inline"
    } else {
        topBtn.style.display = "none"
    }
}
topBtn.onclick = function() {
    "use strict"
    window.scrollTo(0, 0);
};


// change navbar toggler icon between open and close
let toggler = document.querySelector('.navbar-toggler');
let menubar = document.querySelector('i.menu-bar');
toggler.onclick = function() {
    if (menubar.classList.contains('fa-bars')) {
        menubar.classList.remove('fa-bars');
        menubar.classList.add('fa-close');

    } else {
        menubar.classList.add('fa-bars');
    }

};


// page loader

function onReady(callback) {
    var intervalId = window.setInterval(function() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalId);
            callback.call(this);
        }
    }, 1000);
}

function setVisible(selector, visible) {
    document.querySelector(selector).style.display = visible ? 'block' : 'none';
}
onReady(function() {
    setVisible('body', true);
    setVisible('#loading', false);
});

// Force navbar collapse state on load
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar-collapse');
    navbar.classList.remove('show');
  });






// demo
// write it as an inline script in "index.html" to avoid any error
// let review = document.getElementById('review');
// let closeReview = document.querySelector('#review span');
// let showReview = document.querySelector('.show-review');
// let bodyOverlay = document.querySelector('.body-overlay')

// closeReview.onclick = function() {
//     if (review.style.display = 'block') {
//         review.style.display = 'none';
//         bodyOverlay.style.display = 'none';
//     }
// };

// viewElements = document.querySelectorAll('.show-review');
// viewElements.forEach(element => {
//     element.addEventListener('click', function() {
//         review.style.display = 'block';
//         bodyOverlay.style.display = 'block';

//     })

// });