$(document).ready(function() {

    $('.notice .accord').hide();

    $('.notice .hotel_use .title').click(function() { 
        $('.hotel_use .accord').slideToggle(500);
        $('.hotel_use .title img').toggleClass('rotate_180');
    });

    $('.notice .hotel_book .title').click(function() { 
        $('.hotel_book .accord').slideToggle(500);
        $('.hotel_book .title img').toggleClass('rotate_180');
    });
    
});