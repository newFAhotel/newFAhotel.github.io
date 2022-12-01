$(function() {

    $('.method').hide(); // scss 에서 안되는 것 같아서 추가
    // scss 되면 제거해도 됨

    $('.acordian-menu > li > a').click(function(event) {

        event.preventDefault();

        const bc = $(this).data('bg');
        $('a').removeClass();
        $('.method').slideUp(300);

        if($(this).next().css('display') == 'block') {
            $(this).removeClass().next().slideUp(300);
        } else {
            $(this).addClass(bc).next().slideDown(300);
        }
    })
});