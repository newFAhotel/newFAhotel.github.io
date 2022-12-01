$(document).ready(function() {

    let idPass=/^(?=.*[a-zA-Z])(?=.*[0-9]).{7,25}$/;
    let pwPass=/^(?=.*[a-zA-Z])(?=.*[@$%^*-])(?=.*[0-9]).{9,25}$/;
    let pCheck=/^(?=.*[0-9]).{10,25}$/;
    let nCheck=/^(?=.*[0-9]).{6,6}$/;

    $('.aconf_btn').on('click', function() {
        alert('인증번호가 전송 되었습니다!');
    })



    $('.dive_sec .pw_find button[type=submit]').on('click', function(e) {
        e.preventDefault();

        if($('input#aid2').val().length<1) {
            alert('아이디를 입력해 주세요!');
        }

        else if(!idPass.test($('input#aid2').val())) {
            alert('아이디를 똑바로 입력해 주세요!');
        }


        else if($('input#aphone2').val().length<1) {
            alert('휴대폰 번호를 입력해 주세요!');
        }

        else if(!pCheck.test($('input#aphone2').val())) {
            alert('휴대폰 번호를 똑바로 입력해 주세요!');
        }

        else if($('input#aconf2').val().length<1) {
            alert('인증 번호를 입력해 주세요!');
        }

        else if(!nCheck.test($('input#aconf2').val())) {
            alert('인증 번호 6자리를 똑바로 입력해 주세요!');
        }

        else {
            alert('가입된 이메일로 임시 비밀번호가 전송 되었습니다!');
            $('.dive_sec .pw_find').fadeOut(500);
            $('.dive_sec .login_main').delay(500).slideDown(500);
            
        }
    });

});