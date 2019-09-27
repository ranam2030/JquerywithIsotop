(function($){
    
    // init Isotope
var $grid = $('.grid').isotope({
  // options
});
// filter items on button click
$('.selector').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
    
// filter items on button click
$('.selector').on( 'click', 'li', function() {
  $(this).addClass('active').siblings().removeClass('active');
});
    

//navbar add class
$(function(){
  $(window).scroll(function(){
    if ($(window).scrollTop() > 100) {
      $('.navbar').addClass('navbar-change');
    }

    else{
      $('.navbar').removeClass('navbar-change');
    }
  });
});


})(jQuery);