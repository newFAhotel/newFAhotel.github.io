$(document).ready(function() {
    $('.menu_modal').hide();
    $('.menu').click(function() {
        $('.menu_modal').stop().slideDown(1000);
        $('header').stop().fadeOut(1000);
        
        $('body').on('scroll touchmove mousewheel', function(e) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            });
        });

        $('.block').on('click', function(e){
            e.preventDefault();
        });

        // $('.mid_menu ul').hide();

        $('.mid_menu').click(function() { 

            if($('.mid_menu ul').parents().next().childNodes().css('display') == 'block') { 
                $(this).next().slideUp(300); // 클래스 해제, p숨기기
            } else {
                $(this).next().slideDown(300); // 클래스 적용, p보이기
            }
        });


        function close_menu() {
            $('.menu_modal').stop().slideUp(1000);
            $('header').stop().fadeIn(1000);
            $('body').off('scroll touchmove mousewheel');
        }

        $('.menu_close').click(close_menu);
    });

    



