let io = new IntersectionObserver(isObserve, {
  root: null, rootMargin: "200px 0px 0px 0px", threshold: 0.5
})

$('section').each((secI, section) => {
  if (secI > 0 && secI < 7) io.observe(section);
})

function isObserve(obser, aaa) {
  let currTarget = obser[0].target.className
  let tgArrivesArea = obser[0].isIntersecting
  let cardB = obser[0].intersectionRect.y
  let $card = $('.card-contain')

  if (obser.length > 2) {

    for (let i in obser) {
      if (tgArrivesArea) addStyle(obser[i].target.className)
    }

    if (!tgArrivesArea) fixedCardStyle($card)
  }

  tgArrivesArea ? addStyle(currTarget) : resetStyle(currTarget)

  if (obser.length == 1 && currTarget == "card" && cardB < 0) {
    tgArrivesArea ? defaultCardStyle($card) : fixedCardStyle($card)
  }

}//observe

function addStyle(target) {
  if (target == "intro") onIntro()
  if (target == "s1-instruction") visibleEl();
  if (target == "s2-wedding") s234Evnt('s2', "left");
  if (target == "s3-flower") s234Evnt('s3', "right");
  if (target == "s4-various-venue") s234Evnt('s4', "left");
}

function resetStyle(target) {
  let viewW = window.innerWidth
  if (target == "intro") removeIntro()
  if (target == "s1-instruction") viewW > 1400 && hiddenEl();
  if (target == "s2-wedding") removeS234Evnt('s2', "left");
  if (target == "s3-flower") removeS234Evnt('s3', "right");
  if (target == "s4-various-venue") removeS234Evnt('s4', "left");
}


// ==============================s0 card=============================
// 1. scroll위치에 따른 card 스타일 변경 
function fixedCardStyle(card) {
  card
    .css({
      "top": "100vh",
      "position": "fixed",
      "left": "50%",
      "transform": "translateX(-50%)",
    })
    .delay(200).animate({ "top": "-=70px", })
    .animate({ "top": "+=20px" })
    .find("i").css('visibility', 'visible')
}

function defaultCardStyle(card) {
  card
    .animate({ "top": "+=70px" }, function () {
      $(this)
        .removeAttr("style")
        .find("i").css('visibility', 'hidden')
    })
}


// 2. 카드 클릭 이벤트 

//a. 고정되어 있을때  = return
//b. 하단에 있을때 = true
//c.활성화 되어 중앙에 있을때  = false
let stateCard = true

$('.card-contain i').on('click', cardClickEvnt)

function cardClickEvnt() {
  let $card = $('.card-contain')
  if ($card.css('position') == 'relative') return false

  if (stateCard) {
    $card
      .addClass("transition")
      .css({ "top": "50vh", "transform": "translate(-50%,-50%)" })
      .find("i")
      .css('transform', "rotate(0.5turn)")

    setTimeout(() => $card.removeClass("transition"), 1000)
    stateCard = false
  } else {
    $card.addClass("transition")
      .css({ "top": "95vh", "transform": "translate(-50%, 0 )" })
      .find("i")
      .css('transform', "rotate(0turn)")

    setTimeout(() => $card.removeClass("transition"), 1000)
    stateCard = true
  }
}


//=========================intro==============================
function onIntro() {
  $('.intro p:first')
    .stop(true, true)
    .animate({ "opacity": 1 }, 1500)
  $('.hidden-line')
    .delay(700)
    .animate({ "width": 0 }, 1500, () => {
      $(".s0-bg").animate({ "opacity": 1 }, 300, () => {
        $('.dot').animate({ "opacity": 1 }, 500)
      })
    })
}

function removeIntro() {
  $(".intro p:first , .hidden-line , .s0-bg , .dot").
    stop().animate({ "opacity": 0 }, 200, function () {
      $(this).removeAttr("style")
    })
}


// ========================s1==============================
const timer = ms => new Promise(res => setTimeout(res, ms))

async function visibleEl() {

  let itemWrap = $(".ins-box").children()
  let itemBox
  $('.s1-line').animate({ 'width': '100%' }, 3000)

  for (let i = 0; i < itemWrap.length; i++) {
    itemBox = itemWrap[i]

    for (let j = 0; j < itemBox.children.length; j++) {
      $(itemBox.children[j]).animate({ "opacity": 1 }, 1600),
        await timer(500)
    }
  }
}

function hiddenEl() {
  $('.s1-line , .ins-img , .ins-text')
    .stop(true, true)
    .animate({ "opacity": 0 }, 1000, function () {
      $(this).removeAttr("style")
    })
}


// ========================s2~4==============================
//img fade in // text h3 -> p -> btn 순서로 left 이동

function s234Evnt(secId, drection) {
  let delay = 0

  $(`.${secId}-img`).delay(1500).animate({ "opacity": 1 }, 1000)
  $(`.${secId}-content,.${secId}-btn`).children()
    .each((i, e) => {
      $(e).delay(delay += 100).animate({ [drection]: 0, }, 1000)
    })
}

function removeS234Evnt(secId) {
  $(`.${secId}-img`).stop(true, true)
    .animate({ "opacity": 0 }, 1000)
  $(`.${secId}-content,.${secId}-btn`)
    .children().stop(true, true)
    .animate({ "opacity": 0 }, 1000, function () {
      $(this).removeAttr("style")
    })
}


//===================== modal ======================

// 1. modal slide & focuse Evnt 

//count idx
function idxSl() {
  let idx = 0;
  let lth = $(".slide-img li").length - 1;

  return {
    left: () => {
      if (--idx < 0) idx = lth;
      return idx
    },
    right: () => {
      if (++idx > lth) idx = 0;
      return idx
    },
    reset: () => {
      idx = 0
    },//
  }
}
let counter = idxSl()
$('.img-list-box li:first').addClass("focuse-img")//default

//img focuse & counting num
function focuseSl(left) {
  let drection = !left ? counter.right() : counter.left();

  $('.img-list-box li')
    .removeClass("focuse-img")
    .eq(`${drection}`)
    .addClass("focuse-img")
}

//move slide Pos
function posSl(left) {
  if (!left) {
    // R
    $('.slide-img').animate({ "left": "-100%" }, function () {
      $(this).append($('.slide-img li:first')).css('left', "0")
    })
  } else {
    // L
    $('.slide-img').prepend($('.slide-img li:last'))
      .css('left', '-100%')
      .animate({ "left": 0 })
  }
}

let intervalSl = null

$('.left-btn').on('click', () => {
  clearInterval(intervalSl)
  focuseSl(true)
  posSl(true)
  intervalSl = setInterval(() => { focuseSl(); posSl() }, 3000)
})
$('.right-btn').on('click', () => {
  clearInterval(intervalSl)
  focuseSl()
  posSl()
  intervalSl = setInterval(() => { focuseSl(); posSl() }, 3000)
})


//modal - push img & pop up modal 
let mdImgs = [
  [
    "./img/Wedding/photo/s2_modal1.jpg",
    "./img/Wedding/photo/s2_modal2.jpg",
    "./img/Wedding/photo/s2_modal3.jpg",
  ],
  [
    "./img/Wedding/photo/s3_modal1.jpg",
    "./img/Wedding/photo/s3_modal2.jpg",
    "./img/Wedding/photo/s3_modal3.jpg",
  ],

  [
    "./img/Wedding/photo/s4_modal1.jpg",
    "./img/Wedding/photo/s4_modal2.jpg",
    "./img/Wedding/photo/s4_modal3.jpg",
  ]
]

//modal - on/off/push modal
//push img
function pushImg(btnIdx) {
  let imgLength = $(".slide-img li").length
  for (let i = 0; i < imgLength; i++) {
    $(`.slide-img img:eq(${i})`).prop("src", mdImgs[btnIdx][i])
    $(`.img-list-box img:eq(${i})`).prop("src", mdImgs[btnIdx][i])
  }
}

let morebtn = $('.s2-btn a,.s3-btn a,.s4-btn a').map((i, e) => {
  if ($(e).text() === "자세히 보기") return e
})

morebtn.each((i, e) => {
  $(e).on('click', (el) => {
    el.preventDefault()
    intervalSl = setInterval(() => { focuseSl(); posSl() }, 3000)
    $('#modal-wrap').show()
    $('.img-list-box li:first').addClass("focuse-img")//

    pushImg(i)
  })
})

//modal - close modal
$('.close-btn').on('click', () => {
  $('#modal-wrap').hide()
  counter.reset()
  clearInterval(intervalSl)
  $('.img-list-box li').removeClass("focuse-img")//
})