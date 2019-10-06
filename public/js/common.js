"use strict";

var $ = jQuery;
var btnToggle = $(".toggle-menu-mobile--js"),
		menu = $(".menu-mobile--js");
jQuery(document).ready(function ($) {
	// полифил для object-fit
	objectFitImages(); // Picture element HTML5 shiv

	document.createElement("picture"); // для свг

	svg4everybody({});
	JSCCommon.magnificPopupCall();
	JSCCommon.tabscostume('tabs');
	JSCCommon.mobileMenu();
	JSCCommon.inputMask();
	JSCCommon.moreLine();
	JSCCommon.zhowZoomIng();
	JSCCommon.stickyFunc();
	JSCCommon.video();
	JSCCommon.radioTAbs();
	$(".prod-head__group-title--js").click(function () {
		$(this).next().slideToggle();
	}); // добавляет подложку для pixel perfect

	$(".main-wrapper").after('<div class="screen" style="background-image: url(screen/checkout_delivery_1920.png);"></div>'); // /добавляет подложку для pixel perfect

	function heightses() {
		var w = $(window).width();
		$(".prod-head__slider-sm").css("max-height", $(".prod-head__slider").height() - 20);
		$(".toggle-block").css("padding-top", $(".top-nav").height()); // $(".main-wrapper").css("margin-bottom", $('footer').height())
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		// 
		// скрывает моб меню
		// }
		// var topH = 	$('.top-nav  ').innerHeight();

		function navFixed() {
			var topH = $('header').height();

			if ($(window).scrollTop() > topH) {
				$('.btn-top').addClass('active');
			} else {
				$('.btn-top').removeClass('active');
			}

			if ($(window).scrollTop() > 0) {
				$('.top-nav  ').addClass('fixed');
			} else {
				$('.top-nav  ').removeClass('fixed');
			}
		}

		navFixed();
		$(window).scroll(function () {
			navFixed();
		});
		navFixed(); // конец добавил

		if (window.matchMedia("(min-width: 1200px)").matches) {
			btnToggle.removeClass("on"); // $("body").removeClass("fixed");

			menu.removeClass("active");
			$("body").removeClass("fixed");
		}
	}

	$(window).resize(function () {
		heightses();
		initSwiper();
		JSCCommon.stickyFunc();
	});
	heightses(); // листалка по стр

	$(" .scroll-link").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html, body').animate({
			scrollTop: destination
		}, 1100);
		return false;
	}); // slider

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
			loadPrevNext: true
		},
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		pagination: {
			el: $('.header-block').find('.swiper-pagination'),
			clickable: true
		},
		on: {
			slideChange: function slideChange() {
				setTimeout(function () {
					swiperCounter();
				}, 10);
			}
		},
		navigation: {
			nextEl: $('.header-block').find('.swiper-button-next'),
			prevEl: $('.header-block').find('.swiper-button-prev')
		},
		loop: true
	};
	var swiper2 = new Swiper($('.header-block').find('.slider--js'), slider); // var swiper3 = new Swiper($(this).find('.slider--js2'), slider);

	function swiperCounter() {
		if ($(".swiper-counter")) {
			$(".swiper-counter").text(swiper2.realIndex + 1 + ' / ' + (swiper2.slides.length - $('.header-block .swiper-slide-duplicate').length)); // console.log(swiper2.activeIndex)
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
		loopedSlides: 5,
		//looped slides should be the same
		direction: 'vertical'
	});
	var galleryTop = undefined;

	function initSwiper() {
		var screenWidth = $(window).width();

		if (screenWidth < 1200 && galleryTop == undefined) {
			var galleryTop = new Swiper('.gallery-top', {
				spaceBetween: 10,
				loop: true,
				// navigation: {
				//   nextEl: '.swiper-button-next',
				//   prevEl: '.swiper-button-prev',
				// },
				thumbs: {
					swiper: galleryThumbs
				}
			}); // galleryTop.controller.control = galleryThumbs;
			// galleryThumbs.controller.control = galleryTop;
		} else if (screenWidth > 1199 && galleryTop != undefined) {
			galleryTop.destroy();
			galleryTop = undefined;
			jQuery('.gallery-top .swiper-wrapper').removeAttr('style');
			jQuery('.gallery-top .swiper-slide').removeAttr('style');
		}
	}

	initSwiper();
	var prodBodySl = new Swiper('.prod-body__slider--js', {
		loop: true,
		freeModeMomentum: true,
		slidesPerView: 'auto',
		// spaceBetween: 30,
		freeMode: true,
		watchOverflow: true,
		navigation: {
			nextEl: $('.prod-body').find('.swiper-button-next'),
			prevEl: $('.prod-body').find('.swiper-button-prev')
		},
		breakpoints: {
			992: {// slidesPerView: 3
			}
		}
	});
	var wow = new WOW({
		mobile: false
	});
	wow.init();
});
var JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	// функции для запуска lazy
	stickyFunc: function stickyFunc() {
		if (window.matchMedia("(min-width: 778px)").matches) {
			$(".s-confirm__total--js, .sticky-block-js").stick_in_parent({
				offset_top: $(".top-nav").height(),
				inner_scrolling: true,
				parent: ' .sticky-block-wrapper' // // recalc_every: 1,
				//  recalc_every: true,

			});
		}
	},
	// /LazyFunction
	magnificPopupCall: function magnificPopupCall() {
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
			tClose: 'Закрыть (Esc)'
		}); // / modal window
		// modal галерея

		$(".gal").each(function () {
			$(this).find("a").magnificPopup({
				type: 'image',
				closeOnContentClick: false,
				closeBtnInside: false,
				mainClass: 'mfp-with-zoom mfp-img-mobile',
				tClose: 'Закрыть (Esc)',
				image: {
					verticalFit: true // titleSrc: function(item) {
					//   return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
					// }

				},
				gallery: {
					enabled: true,
					tPrev: 'Назад (Кнопка влева)',
					// title for left button
					tNext: 'Вперед (Кнопка вправа)',
					// title for right button
					tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
				}
			});
		}); // /modal галерея
	},
	// /magnificPopupCall
	mobileMenu: function mobileMenu() {
		// закрыть/открыть мобильное меню
		function paddRight(elem) {
			var div = document.createElement('div');
			div.style.overflowY = 'scroll';
			div.style.width = '50px';
			div.style.height = '50px';
			document.body.append(div);
			var padd = div.offsetWidth - div.clientWidth; // console.log(1);

			$(elem).css("paddingRight", padd);
			div.remove();
		}

		btnToggle.click(function () {
			btnToggle.toggleClass("on"); // $("body").toggleClass("fixed");

			menu.toggleClass("active");

			if ($("body").hasClass("fixed")) {
				$("body, html").removeClass("fixed");
				$("body").css("paddingRight", 0);
			} else {
				$("body, html").addClass("fixed");
				paddRight('body');
			}

			return false;
		});
		paddRight('.top-nav__head');
		$(".toggle-basket").click(function () {
			$(".toggle-block").toggleClass("active");

			if ($("body").hasClass("basket-fix")) {
				$("body, html").removeClass("basket-fix");
				$("body").css("paddingRight", 0);
			} else {
				$("body, html").addClass("basket-fix");
				paddRight('body');
			}

			return false;
		});
	},
	// /mobileMenu
	// табы  . 
	tabscostume: function tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this).addClass('active').siblings().removeClass('active').closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active').eq($(this).index()).fadeIn().addClass('active');
		});
	},
	// /табы  .  
	// /CustomYoutubeBlock
	inputMask: function inputMask() {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+]7 [(][0-9]{3}[)] [0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+7 (999) 999-99-99");
	},
	// /inputMask
	moreLine: function moreLine() {
		$('.text-more').moreLines({
			linecount: 7,
			buttontxtmore: "Подробнее",
			// Add your inner text for button
			buttontxtless: "Скрыть",
			// Add your inner text for button
			animationspeed: 250 // Type your custom speed animation, by defaul is 'auto' auto = 1

		});
	},
	video: function video() {
		if ($("div").is("#bgvid")) {
			var vidFade = function vidFade() {
				vid.classList.add("stopfade");
			};

			var vid = document.getElementById("bgvid");

			if (window.matchMedia('(prefers-reduced-motion)').matches) {
				vid.removeAttribute("autoplay");
				vid.pause();
				pauseButton.innerHTML = "Paused";
			}

			vid.addEventListener('ended', function () {
				// only functional if "loop" is removed 
				vid.pause(); // to capture IE10

				vidFade();
			});
		}
	},
	zhowZoomIng: function zhowZoomIng() {
		$(".zoom-img-js").each(function () {
			new ImageZoom($(this), {
				target: {// right: 20
				}
			});
		}); // 	$('.zoom-link').easyZoom({
		// 		id: 'imagezoom',
		// 		// preload: '<p class="preloader">Loading the image</p>',
		// 		parent: '.prod-head__slide'
		// });
	},
	radioTAbs: function radioTAbs() {
		// $('[data-tabs]').checked(function(){
		// 	$($(this).data("tabs")).fadeIn(function(){$(this).addClass('active')}).siblings().hide(function(){$(this).removeClass('active')})
		// })
		// табы на радиокнопках
		$('[data-tabs]').change(function () {
			var th = $(this),
					tabRadio = th.data('tabs');
			$(tabRadio).fadeIn(100).addClass("active").siblings('.tab-block').removeClass('active').hide(); // console.log(th.data('tabs'))
		});
		$('[data-tabs]').each(function () {
			var th = $(this),
					tabRadio = th.data('tabs');

			if (th.is(":checked")) {
				$(tabRadio).fadeIn(100).addClass("active").siblings('.tab-block').removeClass('active').hide();
			}
		});
	}
}; // JSCCommon.LazyFunction();

/***/