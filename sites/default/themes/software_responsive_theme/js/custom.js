/* --------------------------------------------- 

* Filename:     custom.js
* Version:      1.0.0 (2016-02-10)
* Description:  Custom JS to rule them all
* Author:       Craig Boren
                
-----------------------------------------------*/

jQuery(document).ready(function($) {
	
	// Main menu js
  	$('.nav-toggle').click(function() {
    	$('#main-menu div ul:first-child').slideToggle(250);
    	return false;
  	});
	
  	if( ($(window).width() > 640) || ($(document).width() > 640) ) {
      	$('#main-menu li').mouseenter(function() {
        	$(this).children('ul').css('display', 'none').stop(true, true).slideToggle(250).css('display', 'block').children('ul').css('display', 'none');
      	});
      	$('#main-menu li').mouseleave(function() {
        	$(this).children('ul').stop(true, true).fadeOut(250).css('display', 'block');
      	})

   	} else {

   		$('#main-menu li').each(function() {
			if($(this).children('ul').length)
				$(this).append('<span class="drop-down-toggle"><span class="drop-down-arrow"></span></span>');
			});
			$('.drop-down-toggle').click(function() {
				$(this).parent().children('ul').slideToggle(250);
			});
  	}


	// Add padding to the Anaylst Report <li> items
  	$('#flexslider-2 li').css('padding','5px 0px !important');


	// Get rid of empty <p></p> added by Drupal
  	$('p').each(function() {
    	var $this = $(this);
    	if($this.html().replace(/\s|&nbsp;/g, '').length == 0)
			$this.remove();
  	});

	// Set the class for each section on the Homepage
	var sectionNumber = 1;
	$('.front div.content section').each(function () {
		if (sectionNumber == 2) {    	/* Banner section */
			$(this).addClass('top_area');
		}
		else if (sectionNumber == 3) {  /* Four Disciplines section */
			$(this).addClass('white');
		}
		else if (sectionNumber == 4) {  /* Analyst Report section */
			$(this).addClass('blue');
		}
		else if (sectionNumber == 5) {	/* LANDESK TV section */
			$(this).addClass('landesk-tv skrollable skrollable-before');
			$(this).attr('data-bottom-center', 'background-position: 0 50%');
			$(this).attr('data--1200-top', 'background-position: 0 -50%');
			$(this).css('background-position','0px 50%');
		}
		else if (sectionNumber == 6) {	/* Success Story section */
			$(this).addClass('rotator-container');
		}
		sectionNumber++;
	});
	
	// Remove 'container' class on header-top-section to help menu fit
	$('.front div.region-header-top-section div.block').parent().removeClass('container');
	
	// Remove 'container' class on top-section to help menu fit
	$('.front div.region-top-first div.block').parent().removeClass('container');
	
	// Set background color of bottom nav and footer on homepage
	$('.front div.region-footer-section div.block').parent().removeClass('container');

	// Set the background image for each Customer Success logo
	$('.sslogo').each(function () {
		var $background = $(this).attr('data-background');
		$(this).css('background-image', 'url(' + $background + ')');
	});
	
	// Add necessary class wrappers 'jumbotron, container' to all secondary pages in order for the banner to work properly
	$("div.secondaryBannerContents").wrapAll('<div id="block-secondary-jumbotron" class="jumbotron block block_system" />').wrapAll('<div class="container" />').wrapAll('<table class="product-banner"><tr>');

	// Add html table structure to banner text section
	$("div.secondaryHeadline").wrapAll('<td class="td-col-md-8 td-col-sm-7 banner-text"><div class="banner-text-wrap">');

	// Add html table structure to banner image section
	$("div.secondaryImage").wrapAll('<td class="td-col-md-4 td-col-sm-5 banner-image hidden-xs">');

	// Add class wrapper 'breadcrumb' to all secondary pages in order for breadcrumb to display properly
	$("nav.breadcrumb").insertAfter("div.jumbotron");
	$("nav.breadcrumb").wrapAll('<div class="container breadcrumbs-wrap">');
});
