
$(function() {

    $('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
        navigation: true,
        navigationPosition: 'right',
		afterLoad: function(anchorLink, index) {
			if(index==1) {
				//
			}
			
			if(index==2) {
				fadein();
				fadeup();
				rollingNumber();
			}

			if(index==3) {
				$('#fp-nav ul li a span').css({
					'background': '#333',
					'transition': 'all 0.5s'
				});				

			}
			else {
				$('#fp-nav ul li a span').css('background', '#fff');
			}

			if(index!=3) {
				// !roomSlide();
			}

			
		}
	});

	

});