$(document).ready(function() {

    let pCheck=/^(?=.*[0-9]).{10,25}$/;
    let nCheck=/^(?=.*[0-9]).{6,6}$/;
    let ePass = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    let phCheck=false;


    $('.btn_entire .back button').on('click', function(e) {

        e.preventDefault();
        let unsign=confirm('기재된 내용은 저장되지 않습니다. 정말로 정보 수정을 취소하시겠습니까?')
        if(unsign) {
            alert('정보 수정이 취소되었습니다!');
            history.back();
        }
    
    });

    $('.phone_phone .aconf_btn').on('click', function() {

        if($('input#aphone1').val().length<1) alert('휴대폰 번호를 입력해 주세요!');
        else if(!pCheck.test($('input#aphone1').val())) alert('휴대폰 번호를 똑바로 입력해 주세요!');
        else {
            alert('인증번호가 전송 되었습니다!');
            phCheck=true;
        }

    });

    
    $('.btn_entire .modify button').on('click', function(e) {
    
        e.preventDefault();
    
        if($('input#amail1').val().length<1) alert('이메일을 입력해 주세요!');
    
        else if($('.email_email select option').val()=='direct') {
            if(!ePass.test($('input#amail1').val())) alert('이메일을 형식에 맞게 똑바로 입력해 주세요!');
        }
    
        else if(!phCheck) {
            alert('휴대폰 인증을 해 주십시오!');
        }
    
        else if($('input#aphone1').val().length<1) alert('휴대폰 번호를 입력해 주세요!');
    
        else if(!pCheck.test($('input#aphone1').val())) alert('휴대폰 번호를 똑바로 입력해 주세요!');
    
        else if($('input#aconf').val().length<1) {
            alert('인증 번호를 입력해 주세요!');
        }
    
        else if(!nCheck.test($('input#aconf').val())) {
            alert('인증 번호 6자리를 똑바로 입력해 주세요!');
        }
    
        else if(!$('input#all').is(":checked")){
            alert("작성된 내용에 허위 사실이 없음을 동의해 주세요!");
        }
    
        else {
            alert('정보 수정이 완료 되었습니다!');
            location.href='../../7_Customer/My_Page/My_page.html';
        }
    
    });
});


