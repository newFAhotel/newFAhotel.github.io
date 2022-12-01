$(function() {

    $('.sign_up_box').hide(); // scss 에서 안되는 것 같아서 추가
    // scss 되면 제거해도 됨



    $('.check_box .check_flex').click(function() {


        $('.sign_up_box').slideUp(500);

        if($(this).next().css('display')== 'block') {
            $(this).next().slideUp(500);
        } else {
            $(this).next().slideDown(500);
        }
    })
});