$(document).ready(function() {
    $('.menu_modal').hide();
    $('.menu').click(function() {
        $('.menu_modal').stop().slideDown(1000);
        $('header').stop().fadeOut(1000);
        $("html, body").addClass("not_scroll");
        
        $('body').on('scroll touchmove mousewheel', function(e) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            });
        });

        $('.block').on('click', function(e){
            e.preventDefault();
        });


        function close_menu() {
            $('.menu_modal').stop().slideUp(1000);
            $('header').stop().fadeIn(1000);
            $('body').off('scroll touchmove mousewheel');
            $("html, body").removeClass("not_scroll");
        }

        $('.menu_close').click(close_menu);
    });

    



