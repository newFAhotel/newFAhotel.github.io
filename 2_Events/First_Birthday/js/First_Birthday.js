  //a02
    //reset attr
    //s1 s1-img / s1-content /  s1-content strong
    //s3 s3-content h3 / s3-content p / s3-btns / s3-img(class)
    //s4 s4Inter(interver) / bg-line /left-content /right-content


      //observer
      let io = new IntersectionObserver(isObserver, {
        root: null, rootMargin: "400px 0px 100px 0px", threshold: 0.7
      })
      let obserTarget = $('main section').not('.s5-notice')
      obserTarget.each((i, target) => io.observe(target))

      let s4Inter = null // 
      let slideInter

      function isObserver(obser, ent) {
        let currTarget = obser[0].target.className

        //"페이지가 로드되고" 로드된 위치에 옵저버 대상이 있으면 함수를 실행  
        if (obser.length > 1) {
          for (let i in obser) {
            if (obser[i].isIntersecting) giveStyle(obser[i].target.className)
          }
        }

        //뷰포트가 옵저버 대상이 위치한 영역에 도달과 벗어남에 따라 함수를 실행 
        obser[0].isIntersecting ? giveStyle(currTarget) : resetStyle(currTarget)
      } //isObserver


      function giveStyle(target) {
        if (target == "s1-intro") s1Evnt();
        if (target == "s2-instruction") {
          clearInterval(slideInter)
          slideInter = setInterval(slide, 3000)
        };
        if (target == "s3-balloon") s3Evnt();
        if (target == "s4-preview") s4Evnt();
      } //giveStyle

      function resetStyle(target) {
        if (target == "s1-intro") {
          $(".s1-img , .s1-content , .s1-content strong")
            .animate({ "opacity": 0 }, 1000, function () {
              $(this).removeAttr("style")
            })
        };
        
        if (target == "s2-instruction") clearInterval(slideInter);

        if (target == "s3-balloon") {
          $(".s3-content h3 , .s3-content p , .s3-btns")
            .animate({ "opacity": 0 }, 1000, function () {
              $(this).removeAttr("style")
            })
          $(".s3-img").removeClass("s3-actImg")
        };

        if (target == "s4-preview") {
          $(".bg-line , .right-content, .left-content").stop(true, true)
            .animate({ "opacity": 0 }, 1000, function () {
              $(this).removeAttr("style")
            })

          clearInterval(s4Inter)
        };
      }//resetStyle


      //=====================s1=========================
      //1. fade left text & slide right img 
      function s1Evnt() {
        let s1Delay = 700

        $('.s1-img')
          .stop(true).animate({ "right": 0, "opacity": 1 }, s1Delay, "swing", () => {
            $('.s1-content').stop(true).animate({ "opacity": 1 }, s1Delay + 200, () => {
              $('.s1-content strong').css("color", "#ffb400")
            })
          })
      }

      
      //=====================s2=========================
      // 1. slide img
      $('.ins li:eq(1)').addClass('s2-act')//add default class
      let clone = $(".ins").clone(true).appendTo('.hidden-box')
      let multi = 1;
      let classIdx = 2;
      slideInter = setInterval(slide, 3000)

      function slide() {
        $('.hidden-box li').removeClass('s2-act')
        let itemWidth = $('.ins li').outerWidth(true)
        let itemLength = $(".ins:first li").length;


        if (classIdx >= itemLength) classIdx = 0;
        if (multi > itemLength) {
          multi = 1;
          $('.ins').css('left', 0)
        }

        $('.ins').animate({ 'left': `-${itemWidth * multi++}px` }, 500)
        $(`.ins li:eq(${classIdx++})`).addClass('s2-act')
        $(clone).children().eq(classIdx - 1).addClass('s2-act')
      }//slide


      //=====================s3=========================
      // 1. fade text & move img 
      //s3-content h3 --> p , .s3-btns --> s3-img
      function s3Evnt() {
        let s3Delay = 600
        $('.s3-content')
          .find('h3').stop(true, true).animate({ "opacity": 1 }, s3Delay * 2, () => {
            $('.s3-img').addClass('s3-actImg')
          })
          .end().find("p , .s3-btns").delay(s3Delay)
          .animate({ "opacity": 1 }, s3Delay * 2)
      }


      //==================s4 preview=====================
      // 1. fade in area
      //bg-line //left-content //right-content
      function s4Evnt(click) {
        $('.bg-line')
          .animate({ 'width': '100%' }, 1000, "swing", () => {

            $('.left-content')
              .animate({ "left": 0 }, 2400,)
              .css({ "transform": "rotate(1turn)" })
              .next().delay(2400).animate({ "opacity": 1 }, 2000)

            clearInterval(s4Inter)
            s4Inter = setInterval(fadeImg, 3000) //변수 observer 함수 위에 선언함 
          })//animate
      }

      // 2. fade img, move border Box
      let onFadeIdx = 0
      let $li = $(".s4-img-list li")

      function fadeImg(click) {
        let liWidth = $li.outerWidth(true)
        let dfLeftMargin = (liWidth - $li.outerWidth(false)) / 2
        //시작지점 marginLeft 10 // 요소의 마진+넓이 130

        if (++onFadeIdx >= $li.length) onFadeIdx = 0;


        //move border
        $('.focuse-border')
          .animate({ "left": `${liWidth * onFadeIdx + dfLeftMargin}px` }, 400)

        //fade
        let $leftContain = $(".s4-img-box")
        let CloneFirstLi = $li.eq(onFadeIdx).clone().css("display", "none")

        $leftContain
          .append(CloneFirstLi).find('li:first').fadeOut().next().fadeIn()

        if (!click) {
          setTimeout(() => $leftContain.find('li:first').remove(), 2000)
        } else {
          $leftContain.find('li:first').remove()
          $leftContain.find('li:last').fadeIn()
        }
        fadeList(onFadeIdx + 1)
      }

      //3. change fade img & Idx 
      $li.on('click', ChangeFadeImg)

      function ChangeFadeImg() {
        let viewW = window.innerWidth

        onFadeIdx = $(this).index() - 1
        clearInterval(s4Inter)
        s4Inter = setInterval(fadeImg, 3000)
        viewW > 1400 && fadeImg(true)
      }

      //mb-imgList change index event
      let stateType = false
      if (window.innerWidth < 1400) stateType = true

      function fadeList(idx) {
        let leng = $(".s4-img-list li").length

        if (stateType && idx < leng) {
          $(".s4-img-list li").css('z-index', 0)
            .eq(idx).css('z-index', 10)
        } else if (stateType && idx >= leng) {
          $(".s4-img-list li").css('z-index', 0)
            .eq(0).css('z-index', 10)
        }
      }

      $(window).resize(() => {
        let ww = window.innerWidth
        if (ww > 1400) stateType &&= false
        else if (ww < 1400) stateType ||= true
      })


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
          },
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
          "./img/First_Birthday/photo/preview-5.jpg",
          "./img/First_Birthday/photo/preview-4.png",
          "./img/First_Birthday/photo/s2-3.jpg",
        ],
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

      let morebtn = $('.s3-btns a').map((i, e) => {
        if ($(e).text() === "자세히 보기") return e
      })
      console.log(morebtn);

      morebtn.each((i, e) => {
        $(e).on('click', (el) => {
          el.preventDefault()
          intervalSl = setInterval(() => { focuseSl(); posSl() }, 3000)
          $('#modal-wrap').show()
          $('.img-list-box li:first').addClass("focuse-img")
          pushImg(i)

        })
      })

      //modal - close modal
      $('.close-btn').on('click', () => {
        $('#modal-wrap').hide()
        counter.reset()
        $('.img-list-box li').removeClass("focuse-img")
        clearInterval(intervalSl)
      })
