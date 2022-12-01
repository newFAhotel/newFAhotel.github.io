let clone = $(".ins").clone(true).appendTo(".hidden-box");
$(".ins li:eq(1)").addClass("s2-act"); //default
let ex = 1;
let classIdx = 2;
let slideInter = setInterval(slide, 2000);

function slide() {
  //'.hidden-box <-- 내용물 숨겨주는 박스
  $(".hidden-box ul > *").removeClass("s2-act"); //<-- 시작할때 클래스 초기화
  liWidth = $(".ins li").outerWidth(true); //<-- 사진이 담긴 요소의 넓이 (padding)포함
  let itemLength = $(".ins:first li").length; //<-- 슬라이드 사진 갯수

    if (ex > itemLength) {
        ex = 1;
        $(".ins").css("left", 0);
    }
    if (classIdx >= itemLength) classIdx = 0;

    $(".ins").animate({ left: `-${liWidth * ex++}px` }, 500);
    $(`.ins li:eq(${classIdx++})`).addClass("s2-act");
    $(clone)
        .children()
        .eq(classIdx - 1)
        .addClass("s2-act");
}