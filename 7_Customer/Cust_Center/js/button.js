function go_Back() {
    history.back();
}

function go_Front() {
    history.forward();
}

function go_Book() {
    location.href='./8_Reservation/8_Reservation.html';
}

function go_Lounge() {
    location.href='./3_Facilities/1_Gold_Lounge/1_Gold_Lounge.html';
}

function go_Fit() {
    location.href='./3_Facilities/2_Fit/2_Fit.html';
}

$(document).ready(function() {
    let pwPass=/^(?=.*[a-zA-Z])(?=.*[@$%^*-])(?=.*[0-9]).{9,25}$/;

    $('.reset button div').on('click', function(e) {
        e.preventDefault();

        let erase=confirm('문의 재작성 시 작성했던 내용이 소멸됩니다. 그래도 문의 내용을 다시 작성하시겠습니까?');

        if(erase) {
            location.href='../../7_Customer/Cust_Center/Cust_Center.html';
        }

    });



    $('.submit button div').on('click', function(e) {
        e.preventDefault();

        if($('.faq_input input').val().length<1) {
            alert('문의 제목을 입력해 주세요!');
        }

        else if($('.faq_input input').val().length<10) {
            alert('제목은 최소 10자 이상으로 입력해 주세요!');
        }
    
        else if($('.faq_contents textarea').val().length<1) {
            alert('문의 내용을 입력해 주세요!');
        }

        else if($('.faq_contents textarea').val().length<40) {
            alert('내용은 최소 40자 이상으로 입력해 주세요!');
        }

        else {
            let signOut=confirm('1대 1 문의를 접수하시겠습니까? 제출 이후 문의 내용은 수정할 수 없고, 직원에 대한 명예 훼손 및 성희롱, 폭언, 욕설 등을 일삼을 경우 관련 법규에 의거하여 형사 처벌을 받을 수 있고 이용 제제를 받을 수 있으니 주의하시길 바랍니다.');
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
                            alert('문의 내용이 접수되었습니다. 빠른 시일 내에 답변하도록 하겠습니다!');
                            location.href='../../7_Customer/Cust_Center/Cust_Center.html';
                        }
                    }
    
                }
            }
        }

    });

});