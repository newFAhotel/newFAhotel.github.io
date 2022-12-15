window.addEventListener('load', function(){
    var typeText = document.querySelector("h2#type");
    var textToBeTypedArr = 
    ["호텔의 품격", 
    "DIGNITY OF HOTEL", 
    "ホテルの品格", 
    "飯店的品格", 
    "qualité hôtelière", 
    "calidad hotelera", 
    "deversorium qualis",
    "qualità alberghiera",
    "Hotelqualität",
    "chất lượng khách sạn",
    "คุณภาพโรงแรม",
    "جودة الفندق"
    ];
    var index = 0, isAdding = true, textToBeTypedIndex = 0;
    
    function playAnim() {
    setTimeout(function () {
        typeText.innerText = textToBeTypedArr[textToBeTypedIndex].slice(0, index)
        if (isAdding) {
        if (index > textToBeTypedArr[textToBeTypedIndex].length) {
            isAdding = false
            setTimeout(function () {
            playAnim()
            }, 2000)
            return
        } else {
            index++
        }
        } else {
            if (index === 0) {
            isAdding = true
            textToBeTypedIndex = (textToBeTypedIndex + 1) % textToBeTypedArr.length
            } else {
            index--
            }
        }
        playAnim()
        }, isAdding ? 120 : 60)
    }
    playAnim();


    $('.contents .din').on('click', function() {
        location.href='./5_Dining/5_Dining.html';
    });

    $('.contents .prom').on('click', function() {
        location.href='./4_SpecialOffer/4_SpecialOffer.html';
    });

    $('.contents .event').on('click', function() {
        location.href='./2_Events/Wedding/Wedding.html';
    });
});

