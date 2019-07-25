var $ = jQuery;
var btnToggle = $(".toggle-menu-mobile--js"),
		menu = $(".menu-mobile--js")

jQuery(document).ready(function ($) {
	// полифил для object-fit
	objectFitImages();
	// Picture element HTML5 shiv
	document.createElement("picture");
	// для свг
	svg4everybody({}); 
	JSCCommon.magnificPopupCall();

	JSCCommon.tabscostume('tabs');

	JSCCommon.mobileMenu();

	JSCCommon.inputMask(); 
	JSCCommon.moreLine(); 
 

	$(".prod-head__group-title--js").click(function(){
		$(this).next().slideToggle();
	})
	// добавляет подложку для pixel perfect
	// $(".main-wrapper").after('<div class="screen" style="background-image: url(screen/1920.jpg);"></div>')
	// /добавляет подложку для pixel perfect


 

	function heightses() {

		var w = $(window).width();

		$(".prod-head__slider-sm").css("max-height", ($(".prod-head__slider").height() - 20))
		$(".toggle-block").css("padding-top", ($(".top-nav").height()))
		// $(".main-wrapper").css("margin-bottom", $('footer').height())
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		// 
		// скрывает моб меню
		// }
		// var topH = 	$('.top-nav  ').innerHeight();
		function navFixed(){
			var topH = 	$('header').height();
			if ($(this).scrollTop() > topH) {
				$('.btn-top').addClass('active');
				console.log(topH)
			} else {
				$('.btn-top').removeClass('active');
			}
			if ($(this).scrollTop() > 0) {
				$('.top-nav  ').addClass('fixed');
			} else {
				$('.top-nav  ').removeClass('fixed');
			}
		}
		navFixed()
		$(window).scroll(function () {
			navFixed()
		});
		// конец добавил
		if (window.matchMedia("(min-width: 1200px)").matches) {

			btnToggle.removeClass("on");
			// $("body").removeClass("fixed");
			menu.removeClass("active");
			$("body").removeClass("fixed");
		}
	} 

	$(window).resize(function () {
		heightses();

	});
 
	heightses();
 
	// листалка по стр
	$(" .scroll-link").click(function () {
	       var elementClick = $(this).attr("href");
	       var destination = $(elementClick).offset().top;

	           $('html, body').animate({ scrollTop: destination }, 1100);

	       return false;
	   }); 
	// slider
	var swiper3 = new Swiper($('.s-prod__slider--js'), {
		slidesPerView: 2, 
		spaceBetween: 30,  
		loop: true,
		watchOverflow: true,
		breakpointsInverse: true,
		breakpoints: {
		 
			992: {
				slidesPerView: 3
			}
		 
		}
	});
	var slider = {
		slidesPerView: 1, 
		spaceBetween: 0,
		watchOverflow: true,
			lazy: {
				loadPrevNext: true,
			},
			effect: 'fade',
			fadeEffect: {
				crossFade: true
			},
			pagination: {
				el: $('.header-block').find('.swiper-pagination'),
				clickable: true,
			},
			on: {

				slideChange: function () {
					setTimeout(function () {
						swiperCounter()
					 
					}, 10);
				},

			},
		 
			navigation: {
				nextEl: $('.header-block').find('.swiper-button-next'),
				prevEl: $('.header-block').find('.swiper-button-prev'),
			},
			loop: true,
		}
		var swiper2 = new Swiper($('.header-block').find('.slider--js'), slider);
		// var swiper3 = new Swiper($(this).find('.slider--js2'), slider);

		function swiperCounter() {
				if($(".swiper-counter")) {

					$(".swiper-counter").text((swiper2.realIndex + 1) + ' / ' + (swiper2.slides.length  - $('.header-block .swiper-slide-duplicate').length) )
					// console.log(swiper2.activeIndex)
				}
		} 

		
		var galleryThumbs = new Swiper('.gallery-thumbs', {
      // spaceBetween: 10,
      slidesPerView: 4,
			loop: true,
			spaceBetween: 10,
      // freeMode: true,
      // loopedSlides: 5, //looped slides should be the same
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
			loopedSlides: 5, //looped slides should be the same
			direction: 'vertical',
		});

		
		var galleryTop = undefined;
function initSwiper() {
	var screenWidth = $(window).width();
    if(screenWidth < 1200 && galleryTop == undefined) {          
    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      loop:true,
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
      thumbs: {
        swiper: galleryThumbs,
      },
		});
		// galleryTop.controller.control = galleryThumbs;
		// galleryThumbs.controller.control = galleryTop;
 
	} else if (screenWidth > 1199 && galleryTop != undefined) {
		galleryTop.destroy();
		galleryTop = undefined;
		jQuery('.gallery-top .swiper-wrapper').removeAttr('style');
		jQuery('.gallery-top .swiper-slide').removeAttr('style');            
}     
}
var prodBodySl = new Swiper('.prod-body__slider--js', { 
	loop: true,
	freeModeMomentum: true,
	slidesPerView: 'auto',
	// spaceBetween: 30,
	freeMode: true,
	watchOverflow: true, 
	navigation: {
		nextEl: $('.prod-body').find('.swiper-button-next'),
		prevEl: $('.prod-body').find('.swiper-button-prev'),
	},
	breakpoints: {
 
		992: {
			// slidesPerView: 3
		}
	 
	},
});
var wow = new WOW({
	mobile: false
});
wow.init();
});
JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	// функции для запуска lazy
	 

	// /LazyFunction

	magnificPopupCall: function () {
		$('.popup-with-move-anim').magnificPopup({
			type: 'inline',

			fixedContentPos: true,
			fixedBgPos: true,

			overflowY: 'auto',

			closeBtnInside: false,
			preloader: false,

			midClick: true,
			removalDelay: 300,
			mainClass: 'my-mfp-zoom-in',
			tClose: 'Закрыть (Esc)',
		});

		// / modal window

		// modal галерея
		$(".gal").each(function () {

			$(this).find("a").magnificPopup({
				type: 'image',
				closeOnContentClick: false,
				closeBtnInside: false,
				mainClass: 'mfp-with-zoom mfp-img-mobile',
				tClose: 'Закрыть (Esc)',
				image: {
					verticalFit: true,
					// titleSrc: function(item) {
					//   return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
					// }

				},
				gallery: {
					enabled: true,
					tPrev: 'Назад (Кнопка влева)', // title for left button
					tNext: 'Вперед (Кнопка вправа)', // title for right button
					tCounter: '<span class="mfp-counter">%curr% из %total%</span>',
				}
			});
		})
		// /modal галерея
	},
	// /magnificPopupCall
	mobileMenu: function () {
		// закрыть/открыть мобильное меню

		btnToggle.click(function () {

			btnToggle.toggleClass("on");
			// $("body").toggleClass("fixed");
			menu.toggleClass("active");
			$("body, html").toggleClass("fixed");
			return false;
		});
 
		$(".toggle-basket").click(function () {

			// btnToggle.toggleClass("on");
			// $("body").toggleClass("fixed");
			$(".toggle-block").toggleClass("active");
			$("body, html").toggleClass("basket-fix");
			return false;
		});
 
	},
	// /mobileMenu

	// табы  . 
	tabscostume: function (tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).fadeIn().addClass('active');

		});
	},
	// /табы  .  
	// /CustomYoutubeBlock
	inputMask: function () {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+]7 [(][0-9]{3}[)] [0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+7 (999) 999-99-99");
	},
	// /inputMask
	moreLine: function(){
		$('.text-more').moreLines({
			linecount: 7,                  
			buttontxtmore: "Подробнее",     	// Add your inner text for button
			buttontxtless: "Скрыть",     	// Add your inner text for button
			animationspeed: 250             	// Type your custom speed animation, by defaul is 'auto' auto = 1
		});
	}
};

// JSCCommon.LazyFunction();
/***/

