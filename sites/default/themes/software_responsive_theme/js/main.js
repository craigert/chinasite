; (function ($, window, document, undefined) {
    "use strict";
	
	$('.reports').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        touchMove: false,
        slidesToScroll: 1,
        responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
        ]
	});

	$('.banner').slick({
	    dots: false,
	    autoplaySpeed: 5000,
	    infinite: true,
	    fade: false,
	    arrows: true,
	    autoplay: true,
	    touchMove: true,
		responsive: [
          {
              breakpoint: 990,
              settings: {
                  autoplay: true,
				  arrows: false
              }
          },
          {
              breakpoint: 600,
              settings: {
                  autoplay: true,
				  arrows: false
              }
          },
          {
              breakpoint: 480,
              settings: {
                  autoplay: true,
				  arrows: false
              }
          }
        ]
	});
	
    $('.logos').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        touchMove: false,
        slidesToScroll: 1,
        responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
        ]
    });
    $('.management').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        touchMove: false,
        slidesToScroll: 1,
        responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
        ]
    });
	$('.videos').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 3,
	  touchMove: false,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});

	$('.jump-nav li a').click(function () {
		$('html, body').animate({
			scrollTop: $('[id="' + $.attr(this, 'href').substr(1) + '"]').offset().top
		}, 1500);
		return false;
	});

	// Only used for desktop mobile simulation

    $('.navbar-toggle').on('click', function () {
        $('.navbar-collapse').animate({
            left: 0
        });
		return false;
    });
    $('.mobile-toggle-close').on('click', function () {
        $(".navbar-collapse").animate({
			left: '-1050px'
		});
		$('html, body').animate({scrollTop:0}, 100);
        return false;
	});

	// detect if mobile and use touch event instead of click event

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('.navbar-toggle').on('touchend', function() {
			$('.navbar-collapse').animate({
				left: 0
			});
			return false;
		});

		$('.mobile-toggle-close').on('touchend', function() {
			$( ".navbar-collapse" ).animate({
            left: '-1000px'
        });
        $('html, body').animate({ scrollTop: 0 }, 100);
        return false;
    });
	}



    // Mobile Viewport Show/Hide Subnav

	if ($(window).width() < 1024) {
        $('.languages a, .dropdownlist a').on('click', function (event) {
            $(this).next().toggle();
            event.preventDefault();
        });
        $('.toplevel').on('click', function (event) {
            $('.full-dropdown').hide();
            $('.toplevel').removeClass('current-active');
            $(this).next().show();
            $(this).addClass('current-active');
            event.preventDefault();
        });

        setTimeout(function () {
            $(".mob-auto-show").trigger('click');
        }, 10);
	}

    // Move the navigation on resize
	/*$(window).bind('resize', function() {
	    if(maxWidth <= 710) {
	        $('.nav').after($('.main-content'));
	    }
	});*/

	$('.alt-search-form').hide();
	$('.search-icon-alt').on('click', function(event) {
		event.preventDefault();
		$('.alt-search-form').slideToggle();
	});

    // Languages Dropdown

    $('li', '.topnav').each(function () {
        var self = $(this);

        if (self.has('div')) {
            self.on({
                mouseenter: function () {
                    $(this).find('div').show();
                },
                mouseleave: function () {
                    $(this).find('div').hide();
                }
            });
        }
    });

    $('.lang-drop .mobile-sub-sec a').click(function () {
        var location = $(this).attr('href');
        window.location.href = location;
        return false;
    });

    // Desktop Viewport Mega Menu Show/Hide

	if($(window).width() >= 1024){

        $('li', '.nav').each(function () {
            var self = $(this);

            if (self.has('div')) {
                self.on({
                    mouseenter: function () {
                        $(this).addClass("menu-active");
                        $(this).find('div').show();
                    },
                    mouseleave: function () {
                        $(this).removeClass("menu-active");
                        $(this).find('div').hide();
                    }
                });
            }
        });
	};

    // A function for updating max-height
	function HideMobileContainers() {
	    $('.alt-search-form').hide();
	}

    // Call HideMobileContainers when browser resize event fires
	$(window).on("resize", HideMobileContainers);

    $('.reset-form').on('click', function () {
        $(this).children('img').addClass('image-spin');
  });

  $('.accordion-block-ex > div').hide();
  	
  $('.accordion-block-ex h4, .accordion-block ul li a').click(function () {
      var checkElement;
      var h3tag;
      if ($(this).attr("href") != null) {
          checkElement = $("#" + $(this).attr("href").substr(1, $(this).attr("href").length) + " div");
          h3tag = $("#" + $(this).attr("href").substr(1, $(this).attr("href").length) + " h4");
      }
      else {
          checkElement = $(this).next();
          h3tag = $(this);
      }
									
		$('.accordion-block-ex div:visible').slideUp('normal');
		$('.accordion-block-ex div:visible').prev().css("background-position", "100% -5%");	
		
		h3tag.css("background-position", "100% 100%");
		
		if (checkElement.is(':visible')) {
			checkElement.slideUp('normal');
			h3tag.css("background-position", "100% -5%");
		} else {
			checkElement.slideDown('normal');
		}
    });
  var s = skrollr.init({
      smoothScrolling: false,
      forceHeight: false,
      infinite: true,

      mobileCheck: function () {
          return false;
      }
  });

    /*(function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date(); a = s.createElement(o),
        m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
    ga('create', 'UA-345746-1', 'auto');
    ga('send', 'pageview');*/

    if (typeof jQuery != 'undefined') {
      jQuery(document).ready(function ($) {
          var docfiletypes = /\.(zip|exe|dmg|pdf|doc.*|xls.*|ppt.*|txt|rar)$/i;
          var vidfiletypes = /\.(mp3|wma|mov|avi|wmv|flv|wav)$/i;
          var baseHref = '';
          if (jQuery('base').attr('href') != undefined) baseHref = jQuery('base').attr('href');

          jQuery('a').on('click', function (event) {
              var el = jQuery(this);
              var track = true;
              var href = (typeof (el.attr('href')) != 'undefined') ? el.attr('href') : "";
              var clss = (typeof (el.attr('class')) != 'undefined') ? el.attr('class') : "";
              var isThisDomain = href.match(document.domain.split('.').reverse()[1] + '.' + document.domain.split('.').reverse()[0]);
              if (!href.match(/^javascript:/i)) {
                  var elEv = []; elEv.value = 0, elEv.non_i = false;
                  if (href.match(docfiletypes)) {
                      var extension = (/[.]/.exec(href)) ? /[^.]+$/.exec(href) : undefined;
                      elEv.category = "downloads";
                      elEv.action = "click-" + extension[0];
                      elEv.label = href.replace(/ /g, "-");
                      elEv.loc = baseHref + href;
                  }
                  else if (href.match(vidfiletypes)) {
                      var extension = (/[.]/.exec(href)) ? /[^.]+$/.exec(href) : undefined;
                      elEv.category = "videos";
                      elEv.action = "click-" + extension[0];
                      elEv.label = href.replace(/ /g, "-");
                      elEv.loc = baseHref + href;
                  }
                  else if (clss.match(/^popvideo/i)) {
                      var extension = (/[.]/.exec(href)) ? /[^.]+$/.exec(href) : undefined;
                      elEv.category = "videos";
                      elEv.action = "click-" + extension[0];
                      elEv.label = href.replace(/ /g, "-");
                      elEv.loc = baseHref + href;
                  }
                  else if (clss.match(/^popMktoSm/i)) {
                      var extension = (/[.]/.exec(href)) ? /[^.]+$/.exec(href) : undefined;
                      elEv.category = "whitepapers";
                      elEv.action = "click-" + extension[0];
                      elEv.label = href.replace(/ /g, "-");
                      elEv.loc = baseHref + href;
                  }
                  else if (href.match(/^https?\:/i) && !isThisDomain) {
                      elEv.category = "external";
                      elEv.action = "click";
                      elEv.label = href.replace(/^https?\:\/\//i, '');
                      elEv.non_i = true;
                      elEv.loc = href;
                  }
                  else if (href.match(/^tel\:/i)) {
                      elEv.category = "telephone";
                      elEv.action = "click";
                      elEv.label = href.replace(/^tel\:/i, '');
                      elEv.loc = href;
                  }
                  else if (href.match(/^mailto\:/i)) {
                      elEv.category = "emails";
                      elEv.action = "click";
                      elEv.label = href.replace(/^mailto\:/i, '');
                      elEv.loc = href;
                  }
                  else track = false;

                  if (track) {
                      ga('send', {
                          'hitType': 'event',
                          'eventCategory' : elEv.category.toLowerCase(), 
                          'eventAction' : elEv.action.toLowerCase(), 
                          'eventLabel' : elEv.label.toLowerCase(), 
                          'eventValue' : elEv.value, 
                          'nonInteraction' : elEv.non_i });
                  }
              }
          });
      });
    }
})(jQuery, window, document);

document.getElementById("copyRightCurYear").innerHTML = new Date().getFullYear();