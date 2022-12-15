$(document).ready(function() {
    //h3 처음

    var screen = $(window).width();

    $('h3.first').css('opacity',0);


    $('h3.first, h3.last').css({
        'opacity': '0',
        'top': '-100px'
    });

    $('h3.gall, h3.type, .room_gnb, .three_types, h3.notc, h3.oroom').css({
        'opacity': '0',
        'top': '-50px',
        'position': 'relative'

    });

    $('.room_cont, .room_entire, .gall_main, .hotel_use, .hotel_book, .other_fairs, .other_suit, .other_pent').css({
        'opacity': '0',
    });




    let h3_ftop = $('h3.first').offset().top;
    let re_top=$('.room_entire').offset().top;
    let h3_ltop = $('h3.last').offset().top;
    let h3_gtop = $('h3.gall').offset().top;
    let h3_ttop = $('h3.type').offset().top;
    let h3_ntop = $('h3.notc').offset().top;
    let h3_otop = $('h3.oroom').offset().top;





    


    $(window).scroll(function() {
        

        if($(this).scrollTop()>h3_ftop-$(this).innerHeight()/1.5) {
            
            $('h3.first').animate({
                'opacity': 1,
                'top': 0
            },1000);

        }

        if($(this).scrollTop()>h3_ltop-$(this).innerHeight()/1.5) {
            
            $('h3.last').animate({
                'opacity': 1,
                'top': 0
            },1000);

        }

        if($(this).scrollTop()>re_top-$(this).innerHeight()/1.5) {
            
            $('.room_entire').animate({'opacity': 1},1000);

            if(screen>1400) {
                $('.room_cont').delay(500).animate({'opacity': 1,},1000);
            }

            else {
                $('.room_cont').delay(1000).animate({'opacity': 1},1000);
            }

        }

        if($(this).scrollTop()>h3_gtop-$(this).innerHeight()/1.5) {
            
            $('h3.gall').animate({
                'opacity': 1,
                'top': 0
            },500);

            $('.gall_main').delay(500).animate({
                'opacity': 1,
            },1000);

        }

        if($(this).scrollTop()>h3_ttop-$(this).innerHeight()/5) {
            
            $('h3.type').animate({
                'opacity': 1,
                'top': 0
            },500);

            $('.room_gnb').delay(500).animate({
                'opacity': 1,
                'top': 0
            },1000);

            $('.three_types').delay(1000).animate({
                'opacity': 1,
                'top': 0
            },1000);

        }


        if($(this).scrollTop()>h3_ntop-$(this).innerHeight()/7.5) {
            
            $('h3.notc').animate({
                'opacity': 1,
                'top': 0
            },500);

            $('.hotel_use').delay(500).animate({
                'opacity': 1,
                'top': 0
            },1000);

            $('.hotel_book').delay(1000).animate({
                'opacity': 1,
                'top': 0
            },1000);

        }

        if($(this).scrollTop()>h3_otop-$(this).innerHeight()/7.5) {
            
            $('h3.oroom').animate({
                'opacity': 1,
                'top': 0
            },500);

            $('.other_fairs').delay(1000).animate({
                'opacity': 1,
            },1000);

            $('.other_suit').delay(1250).animate({
                'opacity': 1,
            },1000);

            $('.other_pent').delay(1500).animate({
                'opacity': 1,
            },1000);

        }



    });






    // $('h3.first').animate( {
    //     'opacity': '1',
    //     'top' : '0'
    // },1000)


    // if(screen < 1400) {

    // } 
    // else {

    // }
})