$(document).ready(function() {

    let idPass=/^(?=.*[a-zA-Z])(?=.*[0-9]).{7,25}$/;
    let pwPass=/^(?=.*[a-zA-Z])(?=.*[@$%^*-])(?=.*[0-9]).{9,25}$/


    $('.dive_sec .login_main .login').on('click', function(e) {
        e.preventDefault();

        if($('input#aid').val().length<1) {
            alert('아이디를 입력해 주세요');
        }

        else if($('input#apw').val().length<1) {
            alert('패스워드를 입력해 주세요');
        }

        else if(!idPass.test($('input#aid').val())||!pwPass.test($('input#apw').val())) alert('존재하지 않는 회원입니다.')

        else {
            alert('환영합니다. 회원님!');
            location.href='../../index.html';
        }
    });
});