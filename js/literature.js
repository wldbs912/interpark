$(function(){
    var i=0;
    $(".recommendWrap > #categoryTaps > #categoryTaps_nav > li").mouseenter(function(){
        i = ($(this).index())+1
        $(".recommendWrap > #categoryTaps > div").hide()


        $(".recommendWrap > #categoryTaps > #categoryTaps_nav > li").css({
            "border-bottom":"none",
            "color":"#000   "
        })

        $(".recommendWrap > #categoryTaps > #categoryTaps_nav > li:hover").css({
            "border-bottom":"2px solid #e66a57",
            "color":"#e66a57"
        })


        $(".recommendWrap > #categoryTaps > div:nth-of-type"+"("+i+")").stop().fadeIn("fast")
    });

    $('.literature').not(":first").hide();

    $(".bx-Next").click(function() {
        var current = $('.literature:visible');
        var next = current.next('.literature');
        if(next.length === 0){
            next = $('.literature:first');
        }
        current.hide();
        next.show();
    });
    $(".bx-Prev").click(function () {
        var current = $('.literature:visible');
        var prev = current.prev('.literature');
        if(prev.length === 0){
            prev = $('.literature:last');
        }
        current.hide();
        prev.show();
    });

    $('.human').not(":first").hide();

    $(".bx-Next").click(function() {
        var current = $('.human:visible');
        var next = current.next('.human');
        if(next.length === 0){
            next = $('.human:first');
        }
        current.hide();
        next.show();
    });
    $(".bx-Prev").click(function () {
        var current = $('.human:visible');
        var prev = current.prev('.human');
        if(prev.length === 0){
            prev = $('.human:last');
        }
        current.hide();
        prev.show();
    });

    $('.economy').not(":first").hide();

    $(".bx_Next").click(function() {
        var current = $('.economy:visible');
        var next = current.next('.economy');
        if(next.length === 0){
            next = $('.economy:first');
        }
        current.hide();
        next.show();
    });
    $(".bx_Prev").click(function () {
        var current = $('.economy:visible');
        var prev = current.prev('.economy');
        if(prev.length === 0){
            prev = $('.economy:last');
        }
        current.hide();
        prev.show();
    });

    $('.child').not(":first").hide();

    $(".bx_Next").click(function() {
        var current = $('.child:visible');
        var next = current.next('.child');
        if(next.length === 0){
            next = $('.child:first');
        }
        current.hide();
        next.show();
    });
    $(".bx_Prev").click(function () {
        var current = $('.child:visible');
        var prev = current.prev('.child');
        if(prev.length === 0){
            prev = $('.child:last');
        }
        current.hide();
        prev.show();
    });

    $('.study').not(":first").hide();

    $(".bx_Next").click(function() {
        var current = $('.study:visible');
        var next = current.next('.study');
        if(next.length === 0){
            next = $('.study:first');
        }
        current.hide();
        next.show();
    });
    $(".bx_Prev").click(function () {
        var current = $('.study:visible');
        var prev = current.prev('.study');
        if(prev.length === 0){
            prev = $('.study:last');
        }
        current.hide();
        prev.show();
    });

    $('.global').not(":first").hide();

    $(".bx_Next").click(function() {
        var current = $('.global:visible');
        var next = current.next('.global');
        if(next.length === 0){
            next = $('.global:first');
        }
        current.hide();
        next.show();
    });
    $(".bx_Prev").click(function () {
        var current = $('.global:visible');
        var prev = current.prev('.global');
        if(prev.length === 0){
            prev = $('.global:last');
        }
        current.hide();
        prev.show();
    });

});

