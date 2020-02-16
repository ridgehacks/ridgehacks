AOS.init({
	duration: 800,
	easing: 'slide'
});

(function ($) {

	"use strict";


	$(window).stellar({
		responsive: true,
		parallaxBackgrounds: true,
		parallaxElements: true,
		horizontalScrolling: false,
		hideDistantElements: false,
		scrollProperty: 'scroll'
	});

	var fullHeight = function () {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function () {
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function () {
		setTimeout(function () {
			if ($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
	$.Scrollax();

	var carousel = function () {
		$('.carousel-testimony').owlCarousel({
			center: true,
			loop: true,
			items: 1,
			margin: 30,
			stagePadding: 0,
			nav: true,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				1000: {
					items: 3
				}
			}
		});

	};
	carousel();
	var database = firebase.database();
	/*database.ref("announcements/").once('value', function(snapshot) {
		snapshot.forEach(function(data) {
			addEvent(data.key, data.val());
		});
	});*/
	database.ref("announcements/").on('child_changed', function(data) {
		console.log("Child updated: " + data.key);
		changeEvent(data.key, data.val());

	});
	database.ref("announcements/").on('child_added', function(data) {
		console.log("Child added: " + data.key + "	" + data.val()); 
		addEvent(data.key, data.val());
	});
	database.ref("announcements/").on('child_removed', function(data) {
		console.log("Child removed: " + data.key);
		deleteEvent(data.key);
	});

	var addEvent = function(name, description) {
		$("#live_table").prepend("<tr id='" + name.slice(0, 1) + "'>" + "<td class='name1'>" + name + "</td><td class='description'>" + description + "</td></tr>");
	};
	var deleteEvent = function(name) {
		$("#" + name.slice(0,1)).remove();
	};
	var changeEvent = function(name, description) {
		$("#" + name.slice(0,1)).html("<td class='name'>" + name + "</td><td class='description'>" + description + "</td>");
	}
	$("#live_page_toggle").click(function() {
		$("#main_page").hide(250);
		$("#live_page").show(250);
	});
	$("#live_back").click(function() {
		$("#live_page").hide(250);
		$("#main_page").show(250);
	})

	$('nav .dropdown').hover(function () {
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function () {
		var $this = $(this);
		// timer;
		// timer = setTimeout(function(){
		$this.removeClass('show');
		$this.find('> a').attr('aria-expanded', false);
		// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});

	$("#brba").click(function () {
		window.open("https://www.ridgebusiness.org/", "_blank");
	});

	$("#computersharp").click(function () {
		window.open("https://computersharp.com/", "_blank");
	});

	$("#lgs").click(function () {
		window.open("https://www.lgsinnovations.com/", "_blank");
	});

	$("#linode").click(function () {
		window.open("https://www.linode.com/", "_blank");
	});

	$("#intellect").click(function () {
		window.open("https://www.intellectseec.com/", "_blank");
	});

	$("#balsamiq").click(function () {
		  window.open("https://balsamiq.com/", "_blank");
	});

    $("#GAR").click(function () {
		    window.open("https://automationroboticsarduino.com/", "_blank");
	  });

    $("#rise").click(function() {
        window.open("https://risebrewingco.com/", "_blank");
    })


    $("#eap").click(function() {
        window.open("https://www.eliteadvantageprep.com/", "_blank");
    });

	$("#aops").click(function () {
		window.open("https://artofproblemsolving.com/", "_blank");
	});

	$("#gitkraken").click(function () {
		window.open("https://www.gitkraken.com/", "_blank");
	});

	$("#wolfram").click(function () {
		window.open("https://www.wolfram.com/language/", "_blank");
	});

	$("#starbucks").click(function () {
		window.open("https://www.starbucks.com/", "_blank");
	});

	$("#waiver_toggle").click(function () {
		window.open("https://ridgehacks.com/waiver/waiver.pdf", "_blank");
	});
	$("#waiver").click(function () {
		$("#waiver").fadeOut(250);
	});
	$("#temboo").click(function () {
		window.open("https://temboo.com/", "_blank");
	});
	$("#bvillepc").click(function() {
		window.open("http://bernardsvilleprinting.com/", "_blank");
	});
	$("#digitalocean").click(function() {
		window.open("https://www.digitalocean.com/", "_blank");
	});
	$("#sketch").click(function() {
		window.open("https://www.sketch.com/", "_blank");
	});
    $("#blueskykids").click(function() {
		    window.open("https://www.blue-sky-kids.com/", "_blank");
	  });


	// scroll
	var scrollWindow = function () {
		$(window).scroll(function () {
			var $w = $(this),
				st = $w.scrollTop(),
				navbar = $('.ftco_navbar'),
				sd = $('.js-scroll-wrap');

			if (st > 150) {
				if (!navbar.hasClass('scrolled')) {
					navbar.addClass('scrolled');
				}
			}
			if (st < 150) {
				if (navbar.hasClass('scrolled')) {
					navbar.removeClass('scrolled sleep');
				}
			}
			if (st > 350) {
				if (!navbar.hasClass('awake')) {
					navbar.addClass('awake');
				}

				if (sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if (st < 350) {
				if (navbar.hasClass('awake')) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if (sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	var counter = function () {

		$('#section-counter').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function () {
					var $this = $(this),
						num = $this.data('number');
					console.log(num);
					$this.animateNumber(
						{
							number: num,
							numberStep: comma_separator_number_step
						}, 7000
					);
				});

			}

		}, { offset: '95%' });

	}
	counter();

	var contentWayPoint = function () {
		var i = 0;
		$('.ftco-animate').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function () {

					$('body .ftco-animate.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if (effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if (effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						}, k * 50, 'easeInOutExpo');
					});

				}, 100);

			}

		}, { offset: '95%' });
	};
	contentWayPoint();


	// navigation
	var OnePageNav = function () {
		$(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function (e) {
			e.preventDefault();

			var hash = this.hash,
				navToggler = $('.navbar-toggler');
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, 'easeInOutExpo', function () {
				window.location.hash = hash;
			});


			if (navToggler.is(':visible')) {
				navToggler.click();
			}
		});
		$('body').on('activate.bs.scrollspy', function () {
			console.log('nice');
		})
	};
	OnePageNav();

})(jQuery);

