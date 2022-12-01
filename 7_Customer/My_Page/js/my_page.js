$(document).ready(function() {
    let pwPass=/^(?=.*[a-zA-Z])(?=.*[@$%^*-])(?=.*[0-9]).{9,25}$/;

    $('.mypage_modal').hide();

    $('.profile_photo').on('click', function() {
        alert('준비중입니다!');
    });

    $('li.myPw').on('click', function() {
        $("html, body").addClass("not_scroll");
        $('.mypage_modal').fadeIn(1000);
    });

    $('li.myInfo').on('click', function() {
        location.href='../../9_Etc/Info_Modify/Info_Modify.html';
    });

    $('li.myOut').on('click', function() {
    
        let signOut=confirm('회원 탈퇴 시 예약 내역, 호텔 마일리지 등 회원 정보가 소멸되고, 회원 전용 혜택인 예약 특전 또한 더 이상 받을 수 없습니다. 그래도 탈퇴를 하시겠습니까?');
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
                        alert('탈퇴가 완료 되었습니다. 그 동안 페어몬트 앰배서더 호텔을 이용해 주셔서 감사합니다');
                        location.href='../../index.html';
                    }
                }

            }
        }
    });
});
// prompt('비밀번호를 다시 입력하세요!');
