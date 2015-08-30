function include(url){
  document.write('<script src="'+url+'"></script>');
  return false ;
}

/* cookie.JS
========================================================*/
include('js/jquery.cookie.js');


/* DEVICE.JS
========================================================*/
include('js/device.min.js');

/* Easing library
========================================================*/
include('js/jquery.easing.1.3.js');


/* ToTop
========================================================*/
include('js/jquery.ui.totop.js');
$(function () {   
  $().UItoTop({ easingType: 'easeOutQuart' });
});

/* DEVICE.JS AND SMOOTH SCROLLIG
 ========================================================*/
include('js/jquery.mousewheel.min.js');

/* menu
 ========================================================*/
include('js/smoothing-scroll.js');

$(window).load(function() {
    var
        menuSelector = $('.sf-menu')
        , asideMenuSelector = $('')
        , offsetArray = []
        , offsetValueArray = []
        , _document = $(document)
        , currHash = ''
        , isAnim = false
        , isHomePage = $('body').hasClass('home')? true:false
        ;

    //--------------------------- Menu navigation ---------------------------

    getPageOffset();
    function getPageOffset(){
        offsetArray = [];
        offsetValueArray = [];
        $('.hashAncor').each(function(){
            var _item = new Object();
            _item.hashVal = "#"+$(this).attr('id');
            _item.offsetVal = $(this).offset().top;
            offsetArray.push(_item);
            offsetValueArray.push(_item.offsetVal);
        })
    }

    function offsetListener(scrollTopValue, anim){
        if(isHomePage){

            scrolledValue = scrollTopValue;
            var nearIndex = 0;

            nearIndex = findNearIndex(offsetValueArray, scrolledValue)
            currHash = offsetArray[nearIndex].hashVal;

            if(window.location.hash != currHash){
                if(anim){
                    isAnim = true;
                    $('html, body').stop().animate({'scrollTop':scrolledValue}, 1500, function(){
                        isAnim = false;
                        window.location.hash = currHash;
                        $('html, body').stop().animate({'scrollTop':scrolledValue},0);
                        return false;
                    });
                }else{
                    window.location.hash = currHash;
                    $('html, body').stop().animate({'scrollTop':scrolledValue},0);
                    return false;
                }
            }
        }
    }

    function findNearIndex(array, targetNumber){
        var
            currDelta
            , nearDelta
            , nearIndex = -1
            , i = array.length
            ;

        while (i--){
            currDelta = Math.abs( targetNumber - array[i] );
            if( nearIndex < 0 || currDelta < nearDelta )
            {
                nearIndex = i;
                nearDelta = currDelta;
            }
        }
        return nearIndex;
    }

    $(window).on('mousedown',function(){
        isAnim = true;
    })
    $(window).on('mouseup',function(){
        isAnim = false;
        offsetListener(_document.scrollTop(), false);
    })

    $(window).on('mousewheel', function(event){
        offsetListener(_document.scrollTop(), false);
    })
    $(window).on('resize', function(){
        getPageOffset();
    })

    $('> li a[href^="#"]', menuSelector).on('click',function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);
        offsetListener($target.offset().top, true);
        return false;
    });
    $('> li a[href^="#"]', asideMenuSelector).on('click',function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);
        offsetListener($target.offset().top, true);
        return false;
    });


    $(window).on('hashchange', function() {
        var
            target = window.location.hash ? window.location.hash : offsetArray[0].hashVal;

        $('.active-menu-item').removeClass('active-menu-item');
        $('> li a[href="' + target + '"]', menuSelector).parent().addClass('active-menu-item');
        $('> li a[href="' + target + '"]', asideMenuSelector).parent().addClass('active-menu-item');
    }).trigger('hashchange');

})


/* Stellar.js
========================================================*/


$(document).ready(function() {
    if ($('html').hasClass('desktop')) {
        $('#header')[0].style.position = 'fixed';
    }
});


/* Copyright Year
========================================================*/
var currentYear = (new Date).getFullYear();
$(document).ready(function() {
  $("#copyright-year").text( (new Date).getFullYear() );
});


/* Superfish menu
========================================================*/
include('js/superfish.js');
include('js/jquery.mobilemenu.js');


/* Orientation tablet fix
========================================================*/
$(function(){
// IPad/IPhone
	var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
	ua = navigator.userAgent,

	gestureStart = function () {viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6, initial-scale=1.0";},

	scaleFix = function () {
		if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
			viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
			document.addEventListener("gesturestart", gestureStart, false);
		}
	};
	
	scaleFix();
	// Menu Android
	if(window.orientation!=undefined){
  var regM = /ipod|ipad|iphone/gi,
   result = ua.match(regM)
  if(!result) {
   $('.sf-menu li').each(function(){
    if($(">ul", this)[0]){
     $(">a", this).toggle(
      function(){
       return false;
      },
      function(){
       window.location.href = $(this).attr("href");
      }
     );
    } 
   })
  }
 }
});
var ua=navigator.userAgent.toLocaleLowerCase(),
 regV = /ipod|ipad|iphone/gi,
 result = ua.match(regV),
 userScale="";
if(!result){
 userScale=",user-scalable=0"
}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0'+userScale+'">')