$(function() {
    
    $(".tab_content").hide();
    $(".tab_content:first").show();

    $(".gnb > li > a").click(function(event) {
        event.preventDefault();
    });

    $("ul.gnb li").click(function () {
        $("ul.gnb li").removeClass("active").css("color","#333");
        $(this).addClass("active").css("color","darked");
        $(".tab_content").hide()
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn()
    });
});