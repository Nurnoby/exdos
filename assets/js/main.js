
/***************************************************
==================== JS INDEX ======================
****************************************************
01. Testimonial slider (Swiper Js)
****************************************************/

(function ($) {
	"use strict";
    // testimonial slider
    var swiper = new Swiper(".bee-slider-active", {  
        slidesPerView: 1,
        loop: true,                 
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },    
        navigation: {
          nextEl: ".bee-slider-next",
          prevEl: ".bee-slider-prev",          
        },
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
      });
    // testimonial slider 2
    var swiper = new Swiper(".bee-slider-active", {  
        slidesPerView: 1,
        loop: true,                 
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },    
        navigation: {
          nextEl: ".bee-slider-next-2",
          prevEl: ".bee-slider-prev-2",          
        },
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
      });

    // testimonial 3
    var swiper_thumb = new Swiper(".bee-swiper-thumb-active", {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 3,
      centeredSlides: true,
      freeMode: true,
      watchSlidesProgress: true,
    });
    var swiper_content = new Swiper(".swiper-testimonial", {
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: ".testimonial-slider-next",
        prevEl: ".testimonial-slider-prev",
      },
      thumbs: {
        swiper: swiper_thumb,
      },
    });

    // brand-slider 
    var swiper = new Swiper(".bee-brand-active", {  
        slidesPerView: 'auto',
        spaceBetween:100,
        freemode:true,
        centeredSlides:true,
        allowTouchMove:false,
        loop: true,     
        speed:3000,            
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
          }
      });

    // team-slider 
    var swiper = new Swiper(".bee-team-active", {         
        spaceBetween:30,   
        loop: true,                 
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
          },
        navigation: {
          nextEl: ".bee-team-next",
          prevEl: ".bee-team-prev",          
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        },
      });
    // project-slider 
    var swiper = new Swiper(".bee-project-active", {         
        spaceBetween:30,   
        loop: true,                 
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
          },
        navigation: {
          nextEl: ".bee-project-next",
          prevEl: ".bee-project-prev",          
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        },
      });

})(jQuery);

	////////////////////////////////////////////////////
	// 07. Data CSS Js
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});
	
	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});

	$("[data-bg-color]").each(function () {
        $(this).css("background-color", $(this).attr("data-bg-color"));
  });
    
	////////////////////////////////////////////////////
	// magnificPopup img view */
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	// magnificPopup video view */
	$(".popup-video").magnificPopup({
		type: "iframe",
	});
