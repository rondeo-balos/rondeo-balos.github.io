let toggleMenu = function( event ) {
    jQuery( document ).ready(function($) {
        var $mobile_menu = $( '.header .mobile-menu' );
        $mobile_menu.toggleClass( 'transformed' );
        if( $mobile_menu.hasClass( 'transformed' ) ) {
            $( '.main-page' ).addClass( 'transformed' );
            $( 'body, html' ).attr( 'scroll', 'no' );
        } else {
            $( '.main-page' ).removeClass( 'transformed' );
            $( 'body, html' ).attr( 'scroll', '' );
        }
    });
}
jQuery( document ).ready( function($) {
    $( 'a.toggleMenu' ).click( function(e) {
        e.preventDefault();
        setTimeout( function() { toggleMenu(e) }, 400 );
    } );
    $( '.backdrop-overlay' ).click( function(e) {
        toggleMenu();
    } );
    $( window ).scroll( function(e) {
        if( jQuery(window).scrollTop() > 0 ) {
            // do the anim
            if( !$( '.header' ).hasClass( 'sticky-active' ) )
                $( '.header' ).addClass( 'sticky-active' );
        } else {
            // reverse
            if( $( '.header' ).hasClass( 'sticky-active' ) )
                $( '.header' ).removeClass( 'sticky-active' );
        }
    } );

    $.fn.hasAttr = function(name) {  
        return this.attr(name) !== undefined;
    };


    // Observer for animations
    $('.animate').observe(function(){
        //$(this).removeClass('animate');
        //$(this).removeClass('animate__animated animate__fadeInUp');
        $delay = 0;
        if($(this).hasAttr('delay')) {
            $delay = $(this).attr('delay');
        }
        $(this).delay($delay).queue(function(next) {
            $(this).addClass('animate__animated animate__fadeInUp');
        });
    });

    // Header
    var scroll = 0;
    let hidden_header = $('.header');
    $(document).on('scroll', function() {
        scroll = $(window).scrollTop();
        if(scroll > 300 && !hidden_header.hasClass('sticky-active')) {
            hidden_header.addClass('sticky-active');
        }else if(scroll < 300 && hidden_header.hasClass('sticky-active')) {
            hidden_header.removeClass('sticky-active');
        }
    });

} );

