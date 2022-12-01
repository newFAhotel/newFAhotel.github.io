$(function() {
    
    $(".r_type").hide();
    $(".r_type:nth(0)").show();
    
    $(".room_gnb ul>li").click(function(event) {
        // event.preventDefault();
    });

    $(".room_gnb ul>li").click(function () {
        $(".room_gnb li").removeClass("bold");
        $(this).addClass("bold");
        var link = $(this).attr("rel");
        $(".r_type").slideUp(500);
        $("#"+link).slideDown(500);
    });
});
