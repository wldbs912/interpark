$(function () {
    var wid = $(".media").width();
    var i = $(".mediaDot li.on").index();
    var len = $(".media>ul>li").length;
    $(".mediaPrev").click(function () {
    if (i == 0) {
        i = len - 1;
    } else {
        i = i - 1;
    }

    showSlide();
    });

    $(".mediaNext").click(function () {
    if (i == 2) {
        i = 0;
    } else {
        i = i + 1;
    }
    showSlide();
    });

    $(".mediaDot li").click(function () {
    i = $(this).index();
    showSlide();
    });

    function showSlide() {
    $(".mediaDot li").removeClass("on");
    $(".mediaDot li").eq(i).addClass("on");
    $(".media>ul>li").stop(true, true).fadeOut();
    $(".media>ul>li").eq(i).stop(true, true).fadeIn();
    }

});

$(document).ready(function(){
    var wid = $(".how").width();
    var i = $(".howDot li.on").index();
    var len = $(".how>ul>li").length;
    $(".howPrev").click(function(){
    if (i == 0){
        i = len - 1;
    }else {
        i = i - 1;
    }
    showSlide();
    });

    $(".howNext").click(function(){
    if (i == 1){
        i = 0;
    }else {
        i = i + 1;
    }
    showSlide();
    });

    $(".howDot li").click(function(){
    i = $(this).index();
    showSlide();
    });

    function showSlide(){
    $(".howDot li").removeClass("on");
    $(".howDot li").eq(i).addClass("on");
    $(".how>ul>li").stop(true, true).hide();
    $(".how>ul>li").eq(i).stop(true, true).show();
    }
});