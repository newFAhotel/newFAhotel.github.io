$(function() {

    $('.qnas ul>li .qna_acc').hide();

    $('.qnas ul>li>p').click(function() {


        $('.qna_acc').slideUp(500);

        if($(this).next().css('display')== 'block') {
            $(this).next().slideUp(500);
        } else {
            $(this).next().slideDown(500);
        }
    })
});