$(function () {
    function prev() {
        $('.main_Slide li:last').prependTo('.main_Slide');
        $('.main_Slide').css({marginLeft:-470}); 
        $('.main_Slide').stop().animate({ marginLeft: 0 }, 800);
    }

    function next() {
        $('.main_Slide').stop().animate({ marginLeft: -470 }, function () {
            $('.main_Slide li:first').appendTo('.main_Slide');
            $('.main_Slide').css({ marginLeft: 0 });
        });
    }

    function slide() {
        $('.main_Slide').stop().animate({ marginLeft: -470 }, function () {
            $('.main_Slide li:first').appendTo('.main_Slide');
            $('.main_Slide').css({ marginLeft: 0 });
        });
    }

    setInterval(slide, 5000);

    $('.mainSlider_prev').click(function () {
        prev();
    });

    $('.mainSlider_next').click(function () {
        next();
    });
});