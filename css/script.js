$(window).scroll(startCounter);
function startCounter() {
    var hT = jQuery('.counter-1').offset().top,
        hH = jQuery('.counter-1').outerHeight(),
        wH = jQuery(window).height();
    if (jQuery(window).scrollTop() > hT+hH-wH) {
        jQuery(window).off("scroll", startCounter);
        jQuery('.count').each(function () {
            var $this = jQuery(this);
            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                duration: 2000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter) + '%');
                }
            });
        });
    }
}
$('.grid').imagesLoaded(function(){
    $('.grid').isotope({
      // options
      itemSelector: '.grid-item',
      layoutMode: 'fitRows'
    });
  });

  $('.btn.all').click(function(){
    $('.grid').isotope({
      filter: '*'
    })      
  });

  $('.btn.homepage').click(function(){
    $('.grid').show('.homepage')
  });

  $('.btn.ui').click(function(){
    $('.grid').isotope({
      filter: '.ui'
    })
  });

  $('.btn.banner').click(function(){
    $('.grid').isotope({
      filter: '.banner'
    })
  });


  $('.btn').click(function(){
    $('.btn').removeClass('on');
    $(this).toggleClass('on');
  });

  $('.date').datepicker({
  multidate: true,
  //$(this).attr('min',today);
  format: 'dd-mm-yyyy'
});
