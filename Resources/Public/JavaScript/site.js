
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
	"use strict";
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
	"use strict";
	$('.lightbox').each(function () {

		$(this).colorbox({
			rel: $(this).data('lightbox'),
			title: $('img', this).attr('title'),
			transition: "fade", //"elastic", "fade", or "none"
			fixed: false,
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
			slideshowAuto: false,
			slideshowSpeed: 4000,
			slideshowStart: "start slideshow",
			slideshowStop: "stop slideshow",
			current: "<span data-current='{current}' data-total='{total}' />",
			onOpen : function () {
				$('html').css({
					overflow: 'hidden',
					position: 'fixed'
				});
			},
			onClosed : function () {
				$('html').css({
					overflow: 'auto',
					position: 'static'
				});
			},
			onComplete: function () {
				lbLoaded();
				initTouchSwipe();
			}
		});
	});

}

function lbLoaded() {
	"use strict";
	var total = $('#colorbox #cboxCurrent span').data('total');
	var current = $('#colorbox #cboxCurrent span').data('current');
	var images = {
		'de': 'Bild ' + current + ' von ' + total,
		'en': 'image ' + current + ' from ' + total
	};
	$('#colorbox #cboxCurrent').text(images[$('html').attr('lang')]);
	//hide Play on end
	if (current === total) {
		$('#colorbox #cboxSlideshow').hide();
	} else {
		$('#colorbox #cboxSlideshow').show();
	}
}

function initTouchSwipe() {
	"use strict";
	$('#colorbox').swipe({
		swipeLeft: function () {
			$.colorbox.prev();
		},
		swipeRight: function () {
			$.colorbox.next();
		},
		threshold: 75
	});
}

//# sourceMappingURL=maps/site.js.map
