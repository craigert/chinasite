$(document).ready(function(){$(".test-popup-link").magnificPopup({type:"image"}),$(".popup-youtube, .popup-vimeo, .popup-gmaps, .popvideo").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1}),$(".popMktoSm").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-popMktoSm-fade",removalDelay:160,preloader:!1,fixedContentPos:!1}),$(".popup-html").magnificPopup({type:"inline",closeBtnInside:!0,showCloseBtn:!0,preloader:!1,enableEscapeKey:!0}),$(".popimg").magnificPopup({type:"image",closeOnContentClick:!0,image:{verticalFit:!1}}),$(".popvideo").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1,iframe:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" data-progress="true" data-seek="true" allowfullscreen></iframe></div>',patterns:{youtube:{index:"youtube.com/",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}},srcAction:"iframe_src"}})});