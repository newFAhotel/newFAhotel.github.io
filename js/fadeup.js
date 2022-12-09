function fadeup() {
    var $height=$('.info').outerHeight()*(-1);
        $('.info').css({
            'bottom': $height,
        });
        $('.info').animate({ 
            'bottom': 0,
            'opacity': 1
        }, 1000);
}