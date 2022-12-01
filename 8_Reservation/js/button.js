function go_Back() {
    history.back();
}

function go_Front() {
    history.forward();
}

function go_Book() {
    location.href='./8_Reservation/8_Reservation.html';
}

function go_Lounge() {
    location.href='./3_Facilities/1_Gold_Lounge/1_Gold_Lounge.html';
}

function go_Fit() {
    location.href='./3_Facilities/2_Fit/2_Fit.html';
}


$(document).ready(function() {


    $('.room_guest .dial img:first-child').on('click', function(){
        let count = $(this).siblings('input').val();
        count--;
        $(this).siblings('input').attr('value', count);
        if(count<0) {
            alert('객실 수, 인원 수를 확실하게 입력해 주세요!');
            $(this).siblings('input').attr('value', 0);
        }

        else if(count==0) {
            $(this).parent().parent().removeClass('thick');
        }

    });

    $('.room_guest .dial img:last-child, .room_guest ul li').on('click', function(){

        let count = $(this).siblings('input').val();
        count++;

        $(this).siblings('input').attr('value', count);  
        $(this).parent().parent().addClass('thick');

        if(count>12) {
            alert('예약할 수 있는 최대 객실 및 인원을 초과했습니다.');
            $(this).siblings('input').attr('value', 12);
        }
    });

    $('.room_type ul>li').on('click', function() {
        $('.room_type ul>li').removeClass();

        let bc = $(this).data('bg');

        if($(this).hasClass(bc)) {
            $(this).removeClass();
        }
        else {
            $(this).addClass(bc);
        }
    });

    $('.paymont .paytype li').on('click', function() {

        $('.paymont .paytype li').removeClass();
        console.log($(this).hasClass('thick'));


        if($(this).hasClass('thick')) {
            $(this).removeClass();
        }
        else {
            $(this).addClass('thick');
        }
    });

    $('.paymont .paytype li:nth-child(2), .paymont .paytype li:nth-child(3)')
    .on('click', function() {

        alert('준비중입니다!');

        $(this).removeClass();
    });

});

