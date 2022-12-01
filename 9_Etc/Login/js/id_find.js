$(document).ready(function() {

    let idPass=/^(?=.*[a-zA-Z])(?=.*[0-9]).{7,25}$/;
    let pwPass=/^(?=.*[a-zA-Z])(?=.*[@$%^*-])(?=.*[0-9]).{9,25}$/;
    let pCheck=/^(?=.*[0-9]).{10,25}$/;
    let nCheck=/^(?=.*[0-9]).{6,6}$/;

    $('.aconf_btn').on('click', function() {
        alert('인증번호가 전송 되었습니다!');
    })



    $('.dive_sec .id_find button[type=submit]').on('click', function(e) {
        e.preventDefault();

        if($('input#aname').val().length<1) {
            alert('이름을 입력해 주세요!');
        }

        else if($('input#aname').val().length<2) {
            alert('이름을 똑바로 입력해 주세요!');
        }


        else if($('input#aphone1').val().length<1) {
            alert('휴대폰 번호를 입력해 주세요!');
        }

        else if(!pCheck.test($('input#aphone1').val())) {
            alert('휴대폰 번호를 똑바로 입력해 주세요!');
        }

        else if($('input#aconf').val().length<1) {
            alert('인증 번호를 입력해 주세요!');
        }

        else if(!nCheck.test($('input#aconf').val())) {
            alert('인증 번호 6자리를 똑바로 입력해 주세요!');
        }

        else {
            alert('고객님의 아이디는 nonwhiskerscat입니다.');
            $('.dive_sec .id_find').fadeOut(500);
            $('.dive_sec .login_main').delay(500).slideDown(500);
            
        }
    });

});