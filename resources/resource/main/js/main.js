$(function() {
    var forEach = function(t, o, r) {
        if ("[object Object]" === Object.prototype.toString.call(t))
            for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
        else
            for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t)
    };
    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
        forEach(hamburgers, function(hamburger) {
            hamburger.addEventListener("click", function() {
                this.classList.toggle("is-active");
            }, false);
        });
    }
});

$(function() {
    var all = $('.story-content-menu .nav li a');
    $('.story-content-menu .nav li a').on('click', function() {
        $(all).removeClass('nav-active');
        $(this).toggleClass('nav-active');
    });
});


$(function() {
    $('.toggle-btn').on('click', function() {
        $('.nav-logo').toggleClass('nav-logo-img-content');
        $('.sidebar').toggleClass('active');
        $('.footer').toggleClass('hiddenfooter');
        $("body").toggleClass('no-scroll');
    });
});

$(function() {
    $('body').on('click', '#signup', function() {
        $('.signinform').hide();
        $('.signupform').show();
    });
});

$(function() {
    $('body').on('click', '#signin', function() {
        $('.signupform').hide();
        $('.signinform').show();
    });
});

$(function() {
    $('.page-container').on('click', function() {
        $('.signinform').hide();
        $('.signupform').hide();
    });
});

function scroll() {
    var scroll = $('.chat-content-box');
    scroll.scrollTop(scroll.prop('scrollHeight'));
}

function downloadprogress() {
    let oCount = document.querySelector("div[countdown]");
    oCount.innerText = oCount.countValue = +oCount.getAttribute("countdown");
    oCount.countRatio = 360 / oCount.countValue;
    oCount.countColor = 100 / oCount.countValue;
    oCount.countLight = oCount.countValue / 20;
    oCount.countTimer = setInterval(fCountdown.bind(oCount), 1000);

    function fCountdown() {
        let nCount = this.countValue;
        if (nCount > 0) {
            nCount--;
            this.innerText = this.countValue = nCount;
            this.style.setProperty("--deg", 361 - nCount * this.countRatio);
            this.style.setProperty("--col", `hsla(${nCount * this.countColor}, 100%, ${50 - nCount / this.countLight}%, 1)`);
        } else {
            clearInterval(this.countTimer);
            console.log("Complete " + this.getAttribute('countdown'));
        }
    }
}

$(function() {
    $('#down').on('click', function(e) {
        var id = $(this).attr("data-id");
        $('#down').hide();
        $('.downloadtimer').show();
        $('.timer_box').css('display','flex');
        setTimeout(
            function() {
                var url = "/download/" + id;
                $(location).attr('href', url);
            }, 60000);
    });
});


/**/
textarea = document.querySelector("#autoresizing");
textarea.addEventListener('input', autoResize, false);

$(function(){
    $('#autoresizing').keypress(function(){
        $('.send_btn').show();
    });
});

function autoResize() {
    if(this.scrollHeight < 144){
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
    }
}


textarea = document.querySelector("#autoresizingreply");
textarea.addEventListener('input', autoResize, false);

$(function(){
    $('#autoresizingreply').keypress(function(){
        $('.reply_btn').show();
    });
});

function autoResize() {
    if(this.scrollHeight < 144){
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
    }
}



/**/


// $('#autoresizing').on('input', function(){
//     this.style.height = '1px';
//     this.style.height = (this.scrollHeight + 6) + 'px'; 
//     $('#autoresizing').autoResize();
//     autosize($('#autoresizing'));
// });


