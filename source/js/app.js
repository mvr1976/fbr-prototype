
$('.owl-carousel').owlCarousel({
    items: 1,
    slideSpeed: 500,
    autoplay: true,
    autoplayTimeout: 4500,
    loop: true,
    mouseDrag: false,
    singleItem: true,
    nav:false,
    margin: 85,
    
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:1,
            
        },
        1000:{
            items:1,
            
            loop:true
        }
    }
}).data('owlCarousel');

$('.hamburger').on('click', function(){
    $('.index-wrapper').animate({ 'border-width' : "3rem"},500);
    $('.index-menu-modal ').animate({right: 0},500);
});
$('.modal-exit').on('click', function(){
    $('.index-wrapper').animate({'border-width': '0'},500);
    $('.index-menu-modal ').animate({right: "-35%"},500);
});
