

$( document ).ready(function() {
    $('body').addClass('show');
    $('.screen-control a').click(function () {
        $('.screen-control a').removeClass('act');
        $(this).addClass('act');

        $('.Interact .item').removeClass('act');
        $('.Interact .item img').removeClass('animated');
        $('.Interact .item img').removeClass('fadeInDown');
        $('.Interact .item span').removeClass('animated');
        $('.Interact .item span').removeClass('fadeInUp');

        $('.Interact .item'+$(this).attr('data-id')).addClass('act');

        $('.Interact .item'+$(this).attr('data-id') + ' img').addClass('animated');
        $('.Interact .item'+$(this).attr('data-id') + ' img').addClass('fadeInDown');
        $('.Interact .item'+$(this).attr('data-id') + ' span').addClass('animated');
        $('.Interact .item'+$(this).attr('data-id') + ' span').addClass('fadeInUp');
        return false;
    })

    $('.clients .next').click(function () {
        $('.clients-slide .text').hide();
        $('.clients-slide .text'+$(this).attr('data-id')).fadeIn("slow");
        $('.clients-slide .item').hide();
        $('.clients-slide .item'+$(this).attr('data-id')).fadeIn("slow");
        return false;
    })

    $('.lead-form-button').click(function() {
        $('.reg-popup-wrapper').fadeIn();
        $('body').addClass('noscroll')
        $('.reg-popup').addClass('animated fadeInUp')
    })

    $('.reg-popup .close').click(function() {
      $('.reg-popup-wrapper').fadeOut();
      $('body').removeClass('noscroll')
      $('.reg-popup').removeClass('animated fadeInUp')
    })

    $( ".recognize .mockup-wrap .left .item" ).each(function(k,el) {
      el = $(el)


      let range = 200;
      var scrollTop = $(this).scrollTop();
      var eTop = el.offset().top;

      $(window).on('scroll', function () {

        var scrollTop = $(this).scrollTop();
        var eTop = el.offset().top;

        height = el.outerHeight(),
        offset = height / 2,
        calcTop = ((eTop-scrollTop) + range - offset) / range;
        calcBot = (($(window).height() - (eTop-scrollTop)) - range) / range;
        calc = calcTop > calcBot ? calcBot : calcTop

        el.css({ 'opacity': calc });

        if (calc > '1') {
          el.css({ 'opacity': 1 });
        } else if ( calc < '0' ) {
          el.css({ 'opacity': 0 });
        }

      });
    });

    inView('.involve .item')
    .on('enter', el => {
        el.classList.add( "animated" )
        el.classList.add( "fadeInUp" )
    })


});
