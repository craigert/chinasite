jQuery(document).ready(function($) {
    $('.test-popup-link').magnificPopup({type:'image'});
  
    $('.popup-youtube, .popup-vimeo, .popup-gmaps, .popvideo').magnificPopup({
	    disableOn: 700,
	    type: 'iframe',
	    mainClass: 'mfp-fade',
	    removalDelay: 160,
	    preloader: false,
	    fixedContentPos: false
    });
  
    $('.popMktoSm').magnificPopup({
	    disableOn: 700,
	    type: 'iframe',
	    mainClass: 'mfp-popMktoSm-fade',
	    removalDelay: 160,
	    preloader: false,
	    fixedContentPos: false
    });

    $('.popup-html').magnificPopup({
        type: 'inline',
        closeBtnInside: true,
        showCloseBtn:true,
        preloader: false,
        enableEscapeKey: true
    });

    $('.popimg').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            verticalFit: false
        }
    });
	
    $('.popvideo').magnificPopup({
	    disableOn: 700,
	    type: 'iframe',
	    mainClass: 'mfp-fade',
	    removalDelay: 160,
	    preloader: false,
	    fixedContentPos: false,
		iframe: {
		  markup: '<div class="mfp-iframe-scaler">'+
					'<div class="mfp-close"></div>'+
					'<iframe class="mfp-iframe" frameborder="0" data-progress="true" data-seek="true" allowfullscreen></iframe>'+
				  '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

		  patterns: {
			youtube: {
			  index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

			  id: 'v=', // String that splits URL in a two parts, second part should be %id%
			  // Or null - full URL will be returned
			  // Or a function that should return %id%, for example:
			  // id: function(url) { return 'parsed id'; } 

			  src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe. 
			},
			vimeo: {
			  index: 'vimeo.com/',
			  id: '/',
			  src: '//player.vimeo.com/video/%id%?autoplay=1'
			},
			gmaps: {
			  index: '//maps.google.',
			  src: '%id%&output=embed'
			}

			// you may add here more sources

		  },

		  srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
		}
    });

});