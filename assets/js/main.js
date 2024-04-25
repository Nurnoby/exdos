
/***************************************************
==================== JS INDEX ======================
****************************************************
01. Testimonial slider (Swiper Js)
****************************************************/

(function ($) {
	"use strict";
    // 01. Swiper Slider Js
    var swiper = new Swiper(".bee-slider-active", {  
        slidesPerView: 1,
        loop: true,    
        effect: "fade",  
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        //   },    
        navigation: {
          nextEl: ".bee-slider-next",
          prevEl: ".bee-slider-prev",          
        },
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
      });

})(jQuery);