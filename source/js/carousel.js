$(document).ready(function(){
    $(".catalog-slider").owlCarousel({
        margin:10,
        nav: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1520:{
                items:4
            }
        }
    });
});

$(document).ready(function(){
    $(".work-examples-slider").owlCarousel({
        margin: 15,
        nav: false,
        pagination: false,
        responsiveClass: true,
        responsive:{
            0:{
                items:3.25
            },
            380:{
                items:4
            },
            768: {
                margin: 23,
                items:4
            },
            1280:{
                items:4,
                nav: true,
                loop: true
            }
        }
    });
});
