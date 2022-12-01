$(document).ready(function(){
    
    let idPass=/^(?=.*[a-zA-Z])(?=.*[0-9]).{7,25}$/;
    let pwPass=/^(?=.*[a-zA-Z])(?=.*[@$%^*-])(?=.*[0-9]).{9,25}$/;
    let pCheck=/^(?=.*[0-9]).{10,25}$/;
    let nCheck=/^(?=.*[0-9]).{6,6}$/;
    let ePass = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;


    let idCheck=false;
    let phCheck=false;

    $('.id_id .aconf_btn').on('click', function() {

        if($('input#aid').val().length<1) alert('아이디를 입력해 주세요!');
        else if(!idPass.test($('input#aid').val())) alert('아이디는 영문 숫자 조합 7자 이상으로 입력해 주세요!');
        else if($('input#aid').val().match('nonwhiskerscat')) alert('이미 존재하는 아이디입니다!');
        else {
            alert('멋진 아이디네요!');
            idCheck=true;
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

    $('.btn_entire .back button').on('click', function(e) {

        e.preventDefault();
        let unsign=confirm('기재된 내용은 저장되지 않습니다. 정말로 가입을 취소하시겠습니까?')
        if(unsign) {
            alert('가입이 취소되었습니다!');
            history.back();
        }

    });

    $('.btn_entire .sign button').on('click', function(e) {

        e.preventDefault();
        if(!idCheck) {
            alert('아이디 중복 확인을 해 주십시오!');
        }

        else if($('input#aid').val().length<1) alert('아이디를 입력해 주세요!');

        else if(!idPass.test($('input#aid').val())) alert('아이디는 영문, 숫자 조합 7자 이상으로 입력해 주세요!');

        else if($('input#aid').val().match('nonwhiskerscat')) alert('이미 존재하는 아이디입니다!');

        else if($('input#apass').val().length<1) alert('패스워드를 입력해 주세요!');

        else if(!pwPass.test($('input#apass').val())) alert('패스워드는 영문, 숫자, 특수 문자(@,$,%,^,*,-) 조합 9자 이상으로 입력해 주세요!');
        
        else if($('input#apass').val()!=$('input#acon').val()) alert('비밀번호를 다시 한 번 확인해 주세요!');

        else if($('input#aname').val().length<1) alert('이름을 입력해 주세요!');

        else if($('input#aname').val().length<2) alert('이름을 똑바로 입력해 주세요!');

        else if($('input#amail1').val().length<1) alert('이메일을 입력해 주세요!');

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
            alert(`${$('input#aname').val()}님 가입을 축하드립니다.
            아이디: ${$('input#aid').val()}
            휴대폰 번호: ${$('input#aphone1').val()}`);
            location.href='../../9_Etc/Login/Login.html';
        }

    });
});