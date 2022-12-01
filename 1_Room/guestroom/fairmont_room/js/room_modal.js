$(document).ready(function() {
 //.room_type

    $('.room_modal').hide();
    $('.types_right .button button:first-child').addClass('no');
    
    $('.types_right .button button:nth-child(2)').on('click', function(){
        $('.room_modal').slideDown(1000);
        $(this).addClass('no').fadeOut(1000);
        $('.types_right .button button:nth-child(1)').removeClass('no').fadeIn(1000);
    });

    $('.types_right .button button:nth-child(1)').on('click', function(){
        $('.room_modal').slideUp(1000);
        $(this).addClass('no').fadeOut(1000);
        $('.types_right .button button:nth-child(2)').removeClass('no').fadeIn(1000);
    });

    $('.room_modal .closer').on('click', function(){
        $('.room_modal').slideUp(1000);
        $('.types_right .button button:nth-child(1)').addClass('no').fadeOut(1000);
        $('.types_right .button button:nth-child(2)').removeClass('no').fadeIn(1000);
    });

    $('.types_right .button button:nth-child(3)').on('click', function(){
        location.href='../../../8_Reservation/8_Reservation.html';

    });

    
});