    $(document).ready(function() {
		
//		 $(document).on('click', 'area[href="#link1"]', function() {
//			//$("#footer").hide();
//			//$("#footer").fadeOut();
//			//$("#footer").fadeOut("fast");	
//			$("#footer").slideUp();		
//		});
//		 $(document).on('click', 'area[href!="#link1"]', function() {
//			//$("#footer").hide();
//			//$("#footer").fadeIn();
//			//$("#footer").fadeIn("fast");
//			$("#footer").slideDown();			
//		});		
		
	  if(!window.location.hash || window.location.hash == "#/link1"){
	  $("#footer").hide();
	  }

      $(document).on('click', '*[href*="#"]', function() {
        var slashedHash = '#/' + this.hash.slice(1);
		//alert(slashedHash);
		
		if(slashedHash == "#/link1" ){
			//$("#footer").hide();
			//$("#footer").fadeOut();
			//$("#footer").fadeOut("fast");
			$("#footer").slideUp();			
		}
		if(slashedHash != "#/link1" && slashedHash != "#/"){
			//$("#footer").show();
			//$("#footer").fadeIn();
			//$("#footer").fadeIn("fast");
			$("#footer").slideDown();
		};
		
        if ( this.hash ) {

          if ( slashedHash === location.hash ) {
            $.smoothScroll({scrollTarget: this.hash});
          } else {
            $.bbq.pushState(slashedHash);
          }

          return false;
        }
      });

      $(window).bind('hashchange', function(event) {
        var tgt = location.hash.replace(/^#\/?/,'');
        if ( document.getElementById(tgt) ) {
          $.smoothScroll({scrollTarget: '#' + tgt});
        }
      });

      $(window).trigger('hashchange');
    });

//    $(document)
//    .on('click', '*[href*="#"]', function() {
//      if ( this.hash ) {
//        $.bbq.pushState( '#/' + this.hash.slice(1) );
//        return false;
//      }
//    })
//    .ready(function() {
//      $(window).bind('hashchange', function(event) {
//        var tgt = location.hash.replace(/^#\/?/,'');
//        if ( document.getElementById(tgt) ) {
//          $.smoothScroll({scrollTarget: '#' + tgt});
//        }
//      });
//
//      $(window).trigger('hashchange');
//    });

//$(function() {
//
//	if(!window.location.hash || window.location.hash == "#/link1"){
//	$("#footer").hide();
//	}
//
//  $('*[href*=#]:not([href=#])').click(function() {
//	  
//	if (this.hash.slice(1) == "link1"){ 
//	$("#footer").hide();
//    //$("#footer").fadeOut();
//    //$("#footer").fadeOut("slow");
//    //$("#footer").fadeOut(500);
//	}	
//	else{ 
//	$("#footer").show();
//    //$("#footer").fadeIn();
//    //$("#footer").fadeIn("slow");
//    //$("#footer").fadeIn(500);
//	}
//
//	  
//    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
//        || location.hostname == this.hostname) {
//	  $.bbq.pushState( '#/' + this.hash.slice(1) );
//      var target = $(this.hash);
//      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//      if (target.length) {
//        $('html,body').animate({
//          scrollTop: target.offset().top
//        }, 200);
//        return false;
//      }
//    }
//  });
//});

//$(document).ready(function() {
//  function filterPath(string) {
//  return string
//    .replace(/^\//,'')
//    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
//    .replace(/\/$/,'');
//  }
//  var locationPath = filterPath(location.pathname);
//  var scrollElem = scrollableElement('html', 'body');
// 
//  $('*[href*=#]').each(function() {
//    var thisPath = filterPath(this.pathname) || locationPath;
//    if (  locationPath == thisPath
//    && (location.hostname == this.hostname || !this.hostname)
//    && this.hash.replace(/#/,'') ) {
//      var $target = $(this.hash), target = this.hash;
//      if (target) {
//        var targetOffset = $target.offset().top;
//        $(this).click(function(event) {
//          event.preventDefault();
//          $(scrollElem).animate({scrollTop: targetOffset}, 400, function() {
//            location.hash = target;
//          });
//        });
//      }
//    }
//  });
// 
//  // use the first element that is "scrollable"
//  function scrollableElement(els) {
//    for (var i = 0, argLength = arguments.length; i <argLength; i++) {
//      var el = arguments[i],
//          $scrollElement = $(el);
//      if ($scrollElement.scrollTop()> 0) {
//        return el;
//      } else {
//        $scrollElement.scrollTop(1);
//        var isScrollable = $scrollElement.scrollTop()> 0;
//        $scrollElement.scrollTop(0);
//        if (isScrollable) {
//          return el;
//        }
//      }
//    }
//    return [];
//  }
// 
//});