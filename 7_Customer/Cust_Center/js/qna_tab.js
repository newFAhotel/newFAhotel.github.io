$(function() {
    $(".qnas").hide();
    $(".qnas:nth-child(1)").show();
    
    $(".qna_icon ul>li").click(function(event) {
        // event.preventDefault();
    });

    $(".qna_icon ul>li").click(function () {
        $(".qna_icon li").removeClass("thick");
        $(this).addClass("thick");
        var link = $(this).attr("rel");

        if($("#"+link).siblings().is(':visible')) {
            $("#"+link).siblings().slideUp(500);
        }

        if ($("#"+link).is(':visible')) {
            $("#"+link).slideUp(500);
        }

        else {
            $("#"+link).slideDown(500);
        }


    });
});
