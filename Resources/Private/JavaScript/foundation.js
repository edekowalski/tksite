
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
