"use strict";

document.addEventListener("DOMContentLoaded", function () {
    $(function ($) {
      // preloader
      setTimeout(function() {
        $('#preloader').fadeToggle();
      }, 500);

      // Aos Animation
      $(document).ready(function () {
        $('.title').attr({
           "data-aos": "zoom-in",
           "data-aos-duration": "2000"
        });
    
        AOS.init({
          once: true,
        });
     });
      //>> Aos Animation <<//
    
    //>> Mobile Menus <<//
      var fixed_top = $(".one__header");
      var ScrollTop = $(".scroll-top"); // Replace with the actual class or ID of your scroll-top element

      $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
          fixed_top.addClass("animated fadeInDown header-fixed");
        } else {
          fixed_top.removeClass("animated fadeInDown header-fixed");
        }

        if ($(this).scrollTop() < 600) {
          ScrollTop.removeClass("active");
        } else {
          ScrollTop.addClass("active");
        }
      });
    //>> Mobile Menus <<//

        // Custom Tabs //
        $(".tablinks .nav-links").each(function () {
          var targetTab = $(this).closest(".singletab");
          targetTab.find(".tablinks .nav-links").each(function() {
            var navBtn = targetTab.find(".tablinks .nav-links");
            navBtn.click(function(){
              navBtn.removeClass('active');
              $(this).addClass('active');
              var indexNum = $(this).closest("li").index();
              var tabcontent = targetTab.find(".tabcontents .tabitem");
              $(tabcontent).removeClass('active');
              $(tabcontent).eq(indexNum).addClass('active');
            });
          });
        });
        // Custom Tabs //

    // navbar custom//
    $('.navbar-toggle-btn').on('click', function () {
      $('.navbar-toggle-item').slideToggle(300);
      $('body').toggleClass('overflow-hidden');
      $(this).toggleClass('open');
    });
    $('.menu-item a').on('click', function () {
      $(this).siblings("ul").slideToggle(300);
    });
    // navbar custom//
      
      // swipper slide //
        var swiper = new Swiper(".free__livewrap", {
          loop: true,
          slidesPerView: 1,
          slidesToShow: 1,
          spaceBetween: 48,
          speed: 1000,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          autoplay: {
            delay: 1400,
          },
          breakpoints: {
            1400: {
                slidesPerView: 2,
                spaceBetween: 48,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            576: {
                slidesPerView: 1,
                spaceBetween: 14,
            },
        }
        });
      // swipper slide //

      // educational slide //
        var swiper = new Swiper(".educational__wrap", {
          loop: true,
          slidesPerView: 1,
          slidesToShow: 1,
          spaceBetween: 24,
          speed: 1000,
          navigation: {
            nextEl: ".swiper-button-next2",
            prevEl: ".swiper-button-prev2",
          },
          autoplay: {
            delay: 1200,
          },
          breakpoints: {
            1400: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 14,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 14,
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 14,
            },
            500: {
              slidesPerView: 1,
              spaceBetween: 14,
            },
        }
        });
      // swipper slide //
	

      });
  });


