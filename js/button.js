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

$(function(){
    $('.contents .din').on('click', function() {
        location.href='./5_Dining/5_Dining.html';
    });

    $('.contents .prom').on('click', function() {
        location.href='./4_SpecialOffer/4_SpecialOffer.html';
    });

    $('.contents .event').on('click', function() {
        location.href='./2_Events/Wedding/Wedding.html';
    });
});