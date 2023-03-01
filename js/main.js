/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
(function() {
    "use strict";
    var bodyEl = document.body,
        content = document.querySelector('.content-wrapper'),
        openbtn = document.getElementById('open-button'),
        closebtn = document.getElementById('close-button'),
        isOpen = false;

    function init() {
        initEvents();
    }

    function initEvents() {
        openbtn.addEventListener('click', toggleMenu);
        if (closebtn) {
            closebtn.addEventListener('click', toggleMenu);
        }

        // close the menu element if the target it´s not the menu element or one of its descendants..
        content.addEventListener('click', function(ev) {
            var target = ev.target;
            if (isOpen && target !== openbtn) {
                toggleMenu();
            }
        });
    }

    function toggleMenu() {
        if (isOpen) {
            classie.remove(bodyEl, 'show-menu');
        } else {
            classie.add(bodyEl, 'show-menu');
        }
        isOpen = !isOpen;
    }




    init();

})();

// testimonials

let slideIndex = 1;
showSlide(slideIndex);

function nextSlide() {
    showSlide(slideIndex += 1);
}

function prevSlide() {
    showSlide(slideIndex -= 1);
}

function showSlide(n) {
    let slides = document.getElementsByClassName("testimonial");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[slideIndex - 1].classList.add("active");

}

// videogif

var video = document.getElementById('myVideo');
var img = document.getElementById('imagepop');
img.addEventListener('mouseover', function() {
    video.pause();
});

img.addEventListener('mouseout', function() {
    video.play();
});

var video2 = document.getElementById('myVideo2');
var img2 = document.getElementById('imagepop2');
img2.addEventListener('mouseover', function() {
    video2.pause();
});

img2.addEventListener('mouseout', function() {
    video2.play();
});