//Initialize catalog slider

function owlInitialize() {
    if ($(window).width() < 1520) {
        $('.catalog-slider').owlCarousel('destroy');
        $('.catalog-slider').owlCarousel({
            margin:10,
            nav: false,
            responsiveClass:true,
            dotsSpeed: 500,
            responsive:{
                0:{
                    items:1
                },
                768:{
                    items:2
                }
            }
        });
    } else {
        $('.catalog-slider').owlCarousel('destroy');
        $('.catalog-slider').owlCarousel({
            margin:10,
            nav: false,
            dotsSpeed: 500,
            mouseDrag: false,
            touchDrag: false,
            items:4
        });
        }
}

$(document).ready(function() {
    owlInitialize();
});

$(window).resize(function() {
    owlInitialize();
});


//Initialize work examples slider

$(document).ready(function(){
    $('.work-examples-slider').owlCarousel({
        margin: 15,
        nav: false,
        pagination: false,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        autoplaySpeed: 1000,
        loop: true,
        responsive:{
            0: {
                items:3.25
            },
            380: {
                items:4
            },
            768: {
                margin: 23,
                items:4
            },
            1280: {
                items:4,
                nav: true,
                navSpeed: 1000
            }
        }
    });
});
