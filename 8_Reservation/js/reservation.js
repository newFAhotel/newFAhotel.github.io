$(document).ready(function() {

    let chkIn = $('input#ain').val();
    let day = new Date();
    let today = day.getDate();
    let bc = $('.room_type ul li').data('bg');
    let pwPass=/^(?=.*[a-zA-Z])(?=.*[@$%^*-])(?=.*[0-9]).{9,25}$/;
    let pCheck=/[^0-9]/g;



    $('.btn_entire .back button').on('click', function(e) {

        e.preventDefault();
        let unpay=confirm('기재된 내용은 저장되지 않습니다. 정말로 예약을 취소하시겠습니까?')
        if(unpay) {
            alert('예약이 취소되었습니다!');
            history.back();
        }

    });

    $('.btn_entire .pay button').on('click', function(e) {

        e.preventDefault();
        if(!$('input#ain').val()) {
            alert('체크인 날짜 및 시간을 입력해 주세요!');
        }

        else if(!$('input#aout').val()) {
            alert('체크아웃 날짜 및 시간을 입력해 주세요!');
        }

        else if($('input#ain').val()>=$('input#aout').val()) {
            alert('체크아웃 날짜 및 시간을 다시 입력해 주세요!');
        }

        else if($('.room_guest li:nth-child(1) input').val()==0) {
            alert('예약할 객실 수를 확인해 주세요!');
        }

        else if($('.room_guest li:nth-child(1) input').val()>2) {
            alert('1인당 3개 이상의 객실을 예약할 수 없습니다!');
        }

        else if($('.room_guest li:nth-child(1) input').val()*6<$('.room_guest li:nth-child(2) input').val()) {
            alert('한 객실에 투숙할 수 있는 인원이 초과되었습니다.(대인 최대 6명)');
        }

        else if($('.room_guest li:nth-child(2) input').val()==0) {
            alert('인원 수를 확실히 입력해 주세요!(투숙 조건: 성인 1명 이상)');
        }


        else if(!$('.room_type ul li:nth-child(1)').hasClass(bc)&&!$('.room_type ul li:nth-child(2)').hasClass(bc)&&$('.room_type ul li:nth-child(3)').hasClass(bc)) {
            alert('객실 타입을 선택해 주세요!');
        }

        else if(!$('.paymont .paytype li:first-child').hasClass("thick")) {
            alert('결제 수단을 선택해 주세요!');
        }

        else if($('.paymont .payinfo input#c_num').val().length!=16||!pCheck.test($('.paymont .payinfo input#c_num'))) {
            alert('카드 번호 16자리를 똑바로 입력하세요!');
        }

        else if($('.paymont .payinfo input#c_pass').val().length!=4||!pCheck.test($('.paymont .payinfo input#c_pass'))) {
            alert('유효하지 않은 비밀번호입니다!');
        }

        else if($('.paymont .payinfo input#c_per').val().length!=4||!pCheck.test($('.paymont .payinfo input#c_per'))) {
            alert('유효기간 4자리를 똑바로 입력하세요! ex) 2022년 10월 -> 1022');
        }

        else if($('.paymont .payinfo input#c_cvc').val().length!=3||!pCheck.test($('.paymont .payinfo input#c_cvc'))) {
            alert('유효하지 않은 CVC 번호입니다!');
        }

        else if(!$('input#all').is(":checked")){
            alert("개인정보의 수집 및 이용에 대해 동의해 주십시오!");
        }

        else {
            let signOut=confirm(`호텔 예약을 하시겠습니까? 
            객실 수: ${$('.room_guest li:nth-child(1) input').val()}
            소인: ${$('.room_guest li:nth-child(2) input').val()}
            대인: ${$('.room_guest li:nth-child(3) input').val()}`)

        if(signOut) {
            let confirmOut = prompt(`회원님의 비밀번호를 입력해 주세요.`);

            if(confirmOut.length<1 || !pwPass.test(confirmOut)) {
                alert('비밀번호가 올바르지 않습니다!');
                signOut=false;
            } 

            else {

                let reOut = prompt(`회원님의 비밀번호를 다시 입력해 주세요.`);

                if(reOut) {
                    if(confirmOut!=reOut) {
                        alert('비밀번호가 일치하지 않습니다.');
                        reOut=false;
                    }
    
                    else {
                        alert('예약이 완료되었습니다! 호텔의 품격을 걸고 최고의 시설과 친절한 서비스로 보답하겠습니다!');
                        location.href='../../index.html';
                    }
                }

            }
        }
    }

    });
});