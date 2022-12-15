
      // =====================obsever======================
      let io = new IntersectionObserver(isObserve, {
        root: null, rootMargin: "200px 0px 100px 0px", threshold: 0.7
      })

      //target observe elements
      $('section').each((i, e) => {
        if (i >= 1 && i <= 6) {
          io.observe(e)
          $(e).css({ 'visibility': 'hidden', "opacity": 0 })
        }
      })

      function isObserve(obser) {
        let delay = 800

        let loadFn = (idx) => {
          obser[idx].isIntersecting && $(obser[idx].target)
            .css('visibility', 'visible')
            .animate({ "opacity": 1 }, delay)
        }
        let startFn = () => {
          $(obser[0].target)
            .css('visibility', 'visible').stop(true)
            .animate({ "opacity": 1 }, delay)
        }
        let resetFn = () => {
          $(obser[0].target).stop(true)
            .animate({ "opacity": 0 }, delay, function () {
              $(this).css('visibility', 'hidden')
            })
        }

        //on after page load 
        if (obser.length > 2) {
          for (let i in obser) loadFn(i)
          obser[0].isIntersecting && startIntro()
        };
        //start reset fn
        obser[0].isIntersecting ? startFn() : resetFn()


        if (obser.length == 1 && obser[0].target.className == "intro") {
          obser[0].isIntersecting ? startIntro() : resetIntro()
        }
      }

      
      //======================intro====================
      function startIntro() {
        $(".hidden-line1").stop(true, true).animate({ "width": 0 }, 1000, function () {
          $(this).next().animate({ "width": 0 }, 1000)
        })
      }

      function resetIntro() {
        console.log("onn");
        $(".hidden-line1 , .hidden-line2")
          .animate({ "width": 0 }, 500, function () {
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
          "./img/Party/photo/preview-1.jpg",
          "./img/Party/photo/preview-2.jpg",
          "./img/Party/photo/preview-3.jpg",
        ],
        [
          "./img/Party/photo/header-banner.jpg",
          "./img/Party/photo/infomation_img.jpg",
          "./img/Party/photo/preview-1.jpg",
        ],
        [
          "./img/Party/photo/s3_modal1.jpg",
          "./img/Party/photo/s3_modal2.jpg",
          "./img/Party/photo/s3_modal3.jpg",
        ],

        [
          "./img/Party/photo/s2_modal1.jpg",
          "./img/Party/photo/s2_modal2.jpg",
          "./img/Party/photo/s2_modal3.jpg",
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

      let morebtn = $('.info-btn a , .btns a').map((i, e) => {
        if ($(e).text() === "자세히보기") return e
      })

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