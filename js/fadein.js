function fadein() {
    var $height=$('h2').outerHeight()*(-1);



        $('.sec2 .contents h2').css({
            'opacity': 0,
            'display': 'block',
        });

        $('.sec2 .contents h2').animate({
            'opacity': 1,
        }, 1000);
        

        $('.sec2 .contents p').css({
            'opacity': 0,
            'display': 'block'
        });

        $('.sec2 .contents p').delay(500).animate({ 
            'opacity': 1,
        }, 1000);
}