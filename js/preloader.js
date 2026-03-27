$(document).ready(function () {
    "use strict";

    function handlePreloader() {
        const $preloader = $('.preloader');
        if ($preloader.length) {
            $preloader.delay(200).fadeOut(500);
        }
    }

    // Fallback to hide preloader after 5 seconds (in case of errors)
    setTimeout(() => {
        $('.preloader').fadeOut(200);
    }, 2000);

    $(window).on('load', function () {
        handlePreloader();
    });
});


    // Get the button
    let topBtn = document.getElementById("topBtn");

    // Show the button when the user scrolls down 200px
    window.onscroll = function() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    };
    
    // Scroll back to the top smoothly
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }