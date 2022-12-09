function rollingNumber() {
    
    let open = new Date();
    open.setFullYear(2021);
    open.setMonth(1);
    open.setDate(24);

    let today = new Date();
    let gap=(today.getTime()-open.getTime());
    let $days=Math.ceil(gap/(1000*60*60*24));

    var $employees= 936;
    var $rooms = 324;
    var $ratings = 9.0;

    $({val : 0 }).animate({ val : $employees}, {
    duration: 2500,
    step: function() {
    var num = numberWithCommas(Math.floor(this.val));
    $('.empl').text(num);
    },

    complete: function() {
        var num = numberWithCommas(Math.floor(this.val));
        $('.empl').text(num);
    }
    });

    $({val : 0 }).animate({ val : $rooms}, {
        duration: 2500,
        step: function() {
        var num = numberWithCommas(Math.floor(this.val));
        $('.rooom').text(num);
        
        },
        
        complete: function() {
            var num = numberWithCommas(Math.floor(this.val));
            $('.rooom').text(num);
        }
    });			

    $({val : 0 }).animate({ val : $ratings}, {
        duration: 2500,
        step: function() {
        var num = numberWithCommas(this.val.toFixed(1));
        $('.grade').text(num);
        
        },
        
        complete: function() {
            var num = numberWithCommas(this.val.toFixed(1));
            $('.grade').text(num);
        }
    });

    $({val : 0 }).animate({ val : $days}, {
        duration: 2500,
        step: function() {
        var num = Math.floor(this.val);
        $('.day').text(num);
        
        },
        
        complete: function() {
            var num = Math.floor(this.val);
            $('.day').text(num);
        }
    });	

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}

