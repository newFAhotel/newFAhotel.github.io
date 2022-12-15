$(function() {
    
    $(".r_type").hide();
    $(".r_type:nth(0)").show();
    
    $(".room_gnb ul>li").click(function(event) {
        // event.preventDefault();
    });

    $(".room_gnb ul>li").click(function () {
        if($(this).parent().parent().next().children('div').children('.room_modal').is(':visible')) {
            $('.room_modal').hide();
            $('.types_right .button button:nth-child(1)').addClass('no').fadeOut();
            $('.types_right .button button:nth-child(2)').removeClass('no').fadeIn();
        }
        $(".room_gnb li").removeClass("bold");
        $(this).addClass("bold");
        var link = $(this).attr("rel");
        $(".r_type").slideUp(500);
        $("#"+link).slideDown(500);
    });
});
