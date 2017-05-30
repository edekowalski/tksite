
Foundation.Orbit.defaults = {
    accessible: true,
    animInFromLeft: "slide-in-left",
    animInFromRight: "slide-in-right",
    animOutToLeft: "slide-out-left",
    animOutToRight: "slide-out-right",
    autoPlay: false,
    boxOfBullets: "orbit-bullets",
    bullets: true,
    containerClass: "orbit-container",
    infiniteWrap: false,
    navButtons: true,
    nextClass: "orbit-next",
    pauseOnHover: true,
    prevClass: "orbit-previous",
    slideClass: "orbit-slide",
    swipe: true,
    timerDelay: 4000,
    useMUI: true
};

// console.log(Foundation.Orbit.defaults);
$(document).foundation();

$('.is-accordion-submenu-parent > a').click(function(){
    $(this).unbind('click');
  });

$(function () {
    initColorbox();

    /**
     * Smooth scroll
     */
    $('.sections-menu a[href*="#"]:not([href="#"]), a[href="#top"]').click(function () {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 400, function () {
                // $('#offCanvasRight').foundation('close');
            });
            return false;
        }
    });

    /**
     * show scroll to top
     */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
            $('.scroll-menu').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
            $('.scroll-menu').fadeOut();
        }
    });

});

function initColorbox() {
    $('.lightbox').each(function () {
        // var lightbox = $('img', this).data('lightbox');
        // var image = $('img', this).data('1920');
        // if(lightbox){
        //     $(this).attr('href', lightbox);
        // } else{
        //     $(this).attr('href', image);
        // }

        $(this).colorbox({
            rel: $(this).data('lightbox'),
            title: $('img', this).attr('title'),
            transition: "fade", //"elastic", "fade", or "none"
            opacity: 0.9,
            // width: '80%',
            // innerWidth: '90%',
            maxWidth: '90% !important',
            // height: '90%',
            // innerHeight: '90%',
            maxHeight: '90% !important',
            scalePhotos: true,
            retinaImage: true,
            loop: false,
            slideshow: true,
            slideshowAuto: true,
            slideshowSpeed: 2500,
            slideshowStart: "start slideshow",
            slideshowStop: "stop slideshow",
            current: "<span data-current='{current}' data-total='{total}' />",
            onComplete: function () {
                lbLoaded();
                initTouchSwipe();
            }
        });
    });
}

function lbLoaded() {
    var total = $('#colorbox #cboxCurrent span').data('total');
    var current = $('#colorbox #cboxCurrent span').data('current');
    var images = {
        'de': 'Bild ' + current + ' von ' + total,
        'en': 'image ' + current + ' from ' + total
    };
    $('#colorbox #cboxCurrent').text(images[$('html').attr('lang')]);
    //hide Play on end
    if (current == total) {
        $('#colorbox #cboxSlideshow').hide();
    } else {
        $('#colorbox #cboxSlideshow').show();
    }
}

function initTouchSwipe() {
    $('#colorbox').swipe({
        swipeLeft: function (event, direction, distance, duration, fingerCount) {
            $.colorbox.prev();
        },
        swipeRight: function (event, direction, distance, duration, fingerCount) {
            $.colorbox.next();
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold: 75
    });
}

//# sourceMappingURL=maps/site.js.map
