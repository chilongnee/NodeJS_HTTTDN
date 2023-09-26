$(function() {

  var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();

});

// Code to handle navigation menu toggling
var menuItems = document.querySelectorAll('.has-subnav');
menuItems.forEach(function (item) {
    item.addEventListener('click', function () {
        this.classList.toggle('open');
    });
});

// Code to handle logout functionality
var logoutLink = document.querySelector('.logout a');
logoutLink.addEventListener('click', function (event) {
    event.preventDefault();
    // Code to handle logout logic
    // ...
});

function setActive(event) {
	// Remove the "active" class from all menu items
	const menuItems = document.querySelectorAll('.main-menu li');
	menuItems.forEach(function(item) {
	  item.classList.remove('active');
	});
	
	// Add the "active" class to the clicked menu item
	const clickedItem = event.target.closest('li');
	clickedItem.classList.add('active');
  }

  // some scripts

// jquery ready start
$(document).ready(function() {
	// jQuery code



    
    /* ///////////////////////////////////////

    THESE FOLLOWING SCRIPTS ONLY FOR BASIC USAGE, 
    For sliders, interactions and other

    */ ///////////////////////////////////////
    

	//////////////////////// Prevent closing from click inside dropdown
    $(document).on('click', '.dropdown-menu', function (e) {
      e.stopPropagation();
    });

    ///////////////// fixed menu on scroll for desctop
    if ($(window).width() > 768) {
        
        $(window).scroll(function(){  
            if ($(this).scrollTop() > 125) {
                 $('.navbar-landing').addClass("fixed-top");
            }else{
                $('.navbar-landing').removeClass("fixed-top");
            }   
        });
    } // end if
    
	//////////////////////// Fancybox. /plugins/fancybox/
	if($("[data-fancybox]").length>0) {  // check if element exists
		$("[data-fancybox]").fancybox();
	} // end if
	
	//////////////////////// Bootstrap tooltip
	if($('[data-toggle="tooltip"]').length>0) {  // check if element exists
		$('[data-toggle="tooltip"]').tooltip()
	} // end if

    /////////////////////// Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a.page-scroll').click(function() {
        $('.navbar-toggler:visible').click();
    });

    //////////////////////// Menu scroll to section for landing
    $('a.page-scroll').click(function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({ scrollTop: $($anchor.attr('href')).offset().top - 50  }, 1000);
        event.preventDefault();
    });

    /////////////////  items slider. /plugins/slickslider/
    if ($('.slick-slider').length > 0) { // check if element exists
        $('.slick-slider').slick();
    } // end if

	/////////////////  items carousel. /plugins/owlcarousel/
    if ($('.owl-init').length > 0) { // check if element exists

       $(".owl-init").each(function(){
            
            var myOwl = $(this);
            var data_items = myOwl.data('items');
            var data_nav = myOwl.data('nav');
            var data_dots = myOwl.data('dots');
            var data_margin = myOwl.data('margin');
            var data_custom_nav = myOwl.data('custom-nav');
            var id_owl = myOwl.attr('id');

            myOwl.owlCarousel({
                loop: true,
                margin: data_margin,
                nav: eval(data_nav),
                dots: eval(data_dots),
                autoplay: false,
                items: data_items,
                navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
                 //items: 4,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: data_items
                    },
                    1000: {
                        items: data_items
                    }
                }
            });

            // for custom navigation. See example page: example-sliders.html
            $('.'+data_custom_nav+'.owl-custom-next').click(function(){
                $('#'+id_owl).trigger('next.owl.carousel');
            });

            $('.'+data_custom_nav+'.owl-custom-prev').click(function(){
                $('#'+id_owl).trigger('prev.owl.carousel');
            });
           
        }); // each end.//
    } // end if
	

}); 
// jquery end

