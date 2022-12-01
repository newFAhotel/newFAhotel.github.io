$(document).ready(function() {
    let pwPass=/^(?=.*[a-zA-Z])(?=.*[@$%^*-])(?=.*[0-9]).{9,25}$/;

    $('.pw_modify .back').on('click', function(e) {
        e.preventDefault();
        $("html, body").removeClass("not_scroll");
        $(".mypage_modal").fadeOut(1000);
    });

    $('.pw_modify .modify').on('click', function(e) {
        e.preventDefault();

        if(!pwPass.test(($('input#apw').val())) || ($('input#apw').val()).length<1) {
            alert('현재 비밀번호를 다시 입력해 주세요!');
        }

        else if(($('input#apw').val())==($('input#npw1').val())) {
            alert('새 비밀번호는 현재 비밀번호와 일치해서는 안 됩니다!');
        }

        else if(($('input#npw1').val()).length<1) {
            alert('새 비밀번호를 입력해 주세요!');
        }

        else if(!pwPass.test(($('input#npw1').val()))) {
            alert('새 비밀번호를 비밀번호 형식에 맞게 다시 입력해 주세요!(영문, 숫자, 특수 문자(@,$,%,^,*,-) 조합 9자 이상으로 입력)');
        }

        else if(($('input#npw1').val())!=($('input#npw2').val())) {
            alert('새 비밀번호를 확인해 주세요!');
        }

        else {
            alert('비밀번호가 변경되었습니다!');
            $("html, body").removeClass("not_scroll");
            $(".mypage_modal").fadeOut(1000);
        }

    });
});