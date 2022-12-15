function fadein() {

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

function rollingNumber() {
    
    let open = new Date();
    open.setFullYear(2021);
    open.setMonth(1);
    open.setDate(24);

    let today = new Date();
    let gap=(today.getTime()-open.getTime());
    let $days=Math.ceil(gap/(1000*60*60*24));

    var $employees= 936;
    var $rooms = 324;
    var $ratings = 9.0;

    $({val : 0 }).animate({ val : $employees}, {
    duration: 2500,
    step: function() {
    var num = numberWithCommas(Math.floor(this.val));
    $('.empl').text(num);
    },

    complete: function() {
        var num = numberWithCommas(Math.floor(this.val));
        $('.empl').text(num);
    }
    });

    $({val : 0 }).animate({ val : $rooms}, {
        duration: 2500,
        step: function() {
        var num = numberWithCommas(Math.floor(this.val));
        $('.rooom').text(num);
        
        },
        
        complete: function() {
            var num = numberWithCommas(Math.floor(this.val));
            $('.rooom').text(num);
        }
    });			

    $({val : 0 }).animate({ val : $ratings}, {
        duration: 2500,
        step: function() {
        var num = numberWithCommas(this.val.toFixed(1));
        $('.grade').text(num);
        
        },
        
        complete: function() {
            var num = numberWithCommas(this.val.toFixed(1));
            $('.grade').text(num);
        }
    });

    $({val : 0 }).animate({ val : $days}, {
        duration: 2500,
        step: function() {
        var num = Math.floor(this.val);
        $('.day').text(num);
        
        },
        
        complete: function() {
            var num = Math.floor(this.val);
            $('.day').text(num);
        }
    });	

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}

function faciSlide() {

    let count=1;
    
    function auto() {
        
        $('.faci_back_slide ul').animate({left:'-100vw'}, 1000, function() {
            $('.faci_back_slide ul').append($(".faci_back_slide ul li:first-child")).css({'left':0});
            
        });
        // $('.faci_back').slideUp(500).slideDown(500);

        var $width=$('.faci_back').outerWidth()*(-1);
            
            $('.faci_back').slideUp(500).slideDown(500);

        if(count==1) {
            $('.faci_back').css('background-color', 'rgba(0, 0, 148, 0.5)');
            $('.faci_flex button:hover').css({
                // 'background-color': 'rgba(180,34,45,1)',
                // 'border': '1px solid rgba(180,34,45,1)'
            });
        }

        if(count==2) {
            $('.faci_back').css('background-color', 'rgba(62, 25, 0, 0.8)');
            $('.faci_flex button:hover').css({
                // 'background-color': 'rgba(62, 25, 0)',
                // 'border': '1px solid rgb(62, 25, 0))'
            });
        }

        if(count==3) {
            $('.faci_back').css('background-color', 'rgba(180,34,45,0.75)');
            $('.faci_flex button:hover').css({
                // 'background-color': 'rgb(180,34,45)',
                // 'border': '1px solid rgb(180,34,45))'
            });
        }
        


        if(count==3) {
            $(`.faci_contents_slide li:nth-child(1)`).delay(1000).fadeIn();
            $(`.faci_contents_slide li:nth-child(3)`).hide();
            $(`.faci_navi li:nth-child(1)`).addClass('locate')
            $(`.faci_navi li:nth-child(3)`).removeClass('locate');
        }

        else {
            $(`.faci_contents_slide li:nth-child(${count+1})`).delay(1000).fadeIn();
            $(`.faci_contents_slide li:nth-child(${count})`).hide();
            $(`.faci_navi li:nth-child(${count+1})`).addClass('locate')
            $(`.faci_navi li:nth-child(${count})`).removeClass('locate');
        }
        
        count++;
        if(count==4) count=1;
    }
    
    let timer=setInterval(auto,6000);
    
    $('.faci_contents_slide').on('mouseover', ()=> {
        clearInterval(timer);
    });

    $('.faci_contents_slide').on('mouseleave', ()=> {
        timer=setInterval(auto,6000);
    });

    return false;
}

function roomSlide() {

    let count=1;
    
    function auto() {
        
        $('.back_slide ul').animate({left:'-100vw'}, 1000, function() {
            $('.back_slide ul').append($(".back_slide ul li:first-child")).css({'left':0});
            
        });

        $('.room_back').slideUp(500).slideDown(500);

        if(count==3) {
            $(`.content_slide li:nth-child(1)`).delay(1000).fadeIn();
            $(`.content_slide li:nth-child(3)`).fadeOut();
            $(`.room_navi li:nth-child(1)`).addClass('locate')
            $(`.room_navi li:nth-child(3)`).removeClass('locate');
        }

        else {
            $(`.content_slide li:nth-child(${count+1})`).delay(1000).fadeIn();
            $(`.content_slide li:nth-child(${count})`).fadeOut();
            $(`.room_navi li:nth-child(${count+1})`).addClass('locate')
            $(`.room_navi li:nth-child(${count})`).removeClass('locate');
        }
        
        count++;
        if(count==4) count=1;
    }
    
    let timer=setInterval(auto,6000);
    
    $('.content_slide').on('mouseover', ()=> {
        clearInterval(timer);
    });

    $('.content_slide').on('mouseleave', ()=> {
        timer=setInterval(auto,6000);
    });

    return false;
}

function go_Back() {
    history.back();
}

function go_Front() {
    history.forward();
}

function go_Book() {
    location.href='./8_Reservation/8_Reservation.html';
}

function go_Lounge() {
    location.href='./3_Facilities/1_Gold_Lounge/1_Gold_Lounge.html';
}

function go_Fit() {
    location.href='./3_Facilities/2_Fit/2_Fit.html';
}