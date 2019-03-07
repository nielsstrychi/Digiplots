
/*
// Setting up the Variables
var bars = document.getElementById("nav-action");
var nav = document.getElementById("nav");


//setting up the listener
bars.addEventListener("click", barClicked, false);


//setting up the clicked Effect
function barClicked() {
    bars.classList.toggle('active');
    nav.classList.toggle('visible');
}
*/

document.addEventListener("touchstart", function(){}, true)

$.fn.jQuerySimpleCounter = function( options ) {
    var settings = $.extend({
        start:  0,
        end:    100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options );

    var thisElement = $(this);

    $({count: settings.start}).animate({count: settings.end}, {
        duration: settings.duration,
        easing: settings.easing,
        step: function() {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
        },
        complete: settings.complete
    });
};


function countProjects() {
    $('#number1').jQuerySimpleCounter({end: 4, duration: 800});
    $('#number2').jQuerySimpleCounter({end: 4, duration: 800});
    $('#number3').jQuerySimpleCounter({end: 1, duration: 800});
}

(function($) { "use strict";

    //Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px",
            t.style.top = n.clientY + "px",
            e.style.left = n.clientX + "px",
            e.style.top = n.clientY + "px",
            i.style.left = n.clientX + "px",
            i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }

    /* UNCOMMENT FOR MOVEVING BG
    var pos = 0;
    window.setInterval(function(){
            pos++;
            document.getElementsByClassName('moving-image')[0].style.backgroundPosition = pos + "px 0px";
        }, 18
    );*/

    const removeCurrentActive = () => {
        $('.case-study-name.active').removeClass('active');
        $('.case-study-images li.show').removeClass("show");
    }

    $(document).ready(function() {
        $('.case-study-name').on('mouseleave', function() {
            removeCurrentActive()
        })
        $('.case-study-name:nth-child(1)').on('mouseenter', function() {
            $('.case-study-name.active').removeClass('active');
            $('.case-study-images li.show').removeClass("show");
            $('.case-study-images li:nth-child(1)').addClass("show");
            $('.case-study-name:nth-child(1)').addClass('active');
        })

        $('.case-study-name:nth-child(2)').on('mouseenter', function() {
            $('.case-study-name.active').removeClass('active');
            $('.case-study-images li.show').removeClass("show");
            $('.case-study-images li:nth-child(2)').addClass("show");
            $('.case-study-name:nth-child(2)').addClass('active');
        })
        $('.case-study-name:nth-child(3)').on('mouseenter', function() {
            $('.case-study-name.active').removeClass('active');
            $('.case-study-images li.show').removeClass("show");
            $('.case-study-images li:nth-child(3)').addClass("show");
            $('.case-study-name:nth-child(3)').addClass('active');
        })
        $('.case-study-name:nth-child(4)').on('mouseenter', function() {
            $('.case-study-name.activee').removeClass('activee');
            $('.case-study-images li.showe').removeClass("showe");
            $('.case-study-images li:nth-child(4)').addClass("showe");
            $('.case-study-name:nth-child(4)').addClass('activee');
        })
        $('.case-study-name:nth-child(5)').on('mouseenter', function() {
            $('.case-study-name.activee').removeClass('activee');
            $('.case-study-images li.showe').removeClass("showe");
            $('.case-study-images li:nth-child(5)').addClass("showe");
            $('.case-study-name:nth-child(5)').addClass('activee');
        })
        $('.case-study-name:nth-child(6)').on('mouseenter', function() {
            $('.case-study-name.activee').removeClass('activee');
            $('.case-study-images li.showe').removeClass("showe");
            $('.case-study-images li:nth-child(6)').addClass("showe");
            $('.case-study-name:nth-child(6)').addClass('activee');
        })
        $('.case-study-name:nth-child(7)').on('mouseenter', function() {
            $('.case-study-name.activee').removeClass('activee');
            $('.case-study-images li.showe').removeClass("showe");
            $('.case-study-images li:nth-child(7)').addClass("showe");
            $('.case-study-name:nth-child(7)').addClass('activee');
        })
        $('.case-study-name:nth-child(8)').on('mouseenter', function() {
            $('.case-study-name.activee').removeClass('activee');
            $('.case-study-images li.showe').removeClass("showe");
            $('.case-study-images li:nth-child(8)').addClass("showe");
            $('.case-study-name:nth-child(8)').addClass('activee');
        })
        $('.case-study-name:nth-child(4)').trigger('mouseenter')
        //$('.case-study-name:nth-child(1)').trigger('mouseenter')
        $('.feedback-input').blur();
    });



})(jQuery);

var slideIndex1 = 0;
showSlides1();

function showSlides1() {
    var i;
    var slides = document.getElementsByClassName("mySlides1");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex1++;
    if (slideIndex1 > slides.length) {slideIndex1 = 1}
    slides[slideIndex1-1].style.display = "block";
    setTimeout(showSlides1, 5000);
}

var slideIndex2 = 0;
showSlides2();

function showSlides2() {
    var i;
    var slides = document.getElementsByClassName("mySlides2");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex2++;
    if (slideIndex2 > slides.length) {slideIndex2 = 1}
    slides[slideIndex2-1].style.display = "block";
    setTimeout(showSlides2, 4000);
}

var slideIndex3 = 0;
showSlides3();

function showSlides3() {
    var i;
    var slides = document.getElementsByClassName("mySlides3");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex3++;
    if (slideIndex3 > slides.length) {slideIndex3 = 1}
    slides[slideIndex3-1].style.display = "block";
    setTimeout(showSlides3, 6000);
}

/* JS by Nielsstrychi*/