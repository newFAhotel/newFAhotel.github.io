$(document).ready(function() {
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

    roomSlide();
});