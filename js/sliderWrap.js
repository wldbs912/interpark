$(function () {

    $('.sliderImg li').not(":first").hide();

    function slide() {
        var current = $('.sliderImg li:visible');
        var next = current.next('.sliderImg li');
        if(next.length === 0){
            next = $('.sliderImg li:first');
        }
        current.hide();
        next.show();

        var index = next.index();
        index2 =index-9;
        if(index === 0){
            $('.subMenu').stop().show();
            $('.cbtn').css('box-shadow','none');
            $('.cbtn').eq(0).css('box-shadow','0 4px 0 0px #f2394b inset');
        }else if(index === 8){
            $('.subMenu').stop().hide();
            $('.cbtn').css('box-shadow','none');
            $('.cbtn').eq(1).css('box-shadow','0 4px 0 0px #f2394b inset');
        }else if(index === 9){
            $('.subMenu2').stop().show();
            $('.cbtn').css('box-shadow','none');
            $('.cbtn').eq(2).css('box-shadow','0 4px 0 0px #f2394b inset');
        }else if(index === 15){
            $('.subMenu2').stop().hide();
            $('.cbtn').css('box-shadow','none');
            $('.cbtn').eq(3).css('box-shadow','0 4px 0 0px #f2394b inset');
        }

        $('.subMenu li a').css('background','rgba(0, 0, 0, 0.4)')
        $('.subMenu li a').eq(index).css('background','rgba(0, 0, 0, 0.7)');

        $('.subMenu2 li a').css('background','rgba(0, 0, 0, 0.4)')
        $('.subMenu2 li a').eq(index2).css('background','rgba(0, 0, 0, 0.7)');

    }

    setInterval(slide, 3000);

    $(".next").click(function() {
        var current = $('.sliderImg li:visible');
        var next = current.next('.sliderImg li');
        if(next.length === 0){
            next = $('.sliderImg li:first');
        }
        current.hide();
        next.show();

        var index = next.index();
        index2 = index-9;
        if(index === 0){
            $('.subMenu').stop().show();
            $('.cbtn').css('box-shadow','none');
            $('.cbtn').eq(0).css('box-shadow','0 4px 0 0px #f2394b inset');
        }else if(index === 8){
            $('.subMenu').stop().hide();
            $('.cbtn').css('box-shadow','none');
            $('.cbtn').eq(1).css('box-shadow','0 4px 0 0px #f2394b inset');
        }else if(index === 9){
            $('.subMenu2').stop().show();
            $('.cbtn').css('box-shadow','none');
            $('.cbtn').eq(2).css('box-shadow','0 4px 0 0px #f2394b inset');
        }else if(index === 15){
            $('.subMenu2').stop().hide();
            $('.cbtn').css('box-shadow','none');
            $('.cbtn').eq(3).css('box-shadow','0 4px 0 0px #f2394b inset');
        }

        $('.subMenu li a').css('background','rgba(0, 0, 0, 0.4)')
        $('.subMenu li a').eq(index).css('background','rgba(0, 0, 0, 0.7)');

        $('.subMenu2 li a').css('background','rgba(0, 0, 0, 0.4)')
        $('.subMenu2 li a').eq(index2).css('background','rgba(0, 0, 0, 0.7)');

    });

    $(".prev").click(function () {
        var current = $('.sliderImg li:visible');
        var prev = current.prev('.sliderImg li');
        if(prev.length === 0){
            prev = $('.sliderImg li:last');
        }
        current.hide();
        prev.show();

        var index = next.index();
        index2 = index-9;
        if(index === 0){
            $('.subMenu').stop().show();
            $('.cbtn').css('box-shadow','none');
            $('.cbtn').eq(0).css('box-shadow','0 4px 0 0px #f2394b inset');
        }else if(index === 8){
            $('.subMenu').stop().hide();
            $('.cbtn').css('box-shadow','none');
            $('.cbtn').eq(1).css('box-shadow','0 4px 0 0px #f2394b inset');
        }else if(index === 9){
            $('.subMenu2').stop().show();
            $('.cbtn').css('box-shadow','none');
            $('.cbtn').eq(2).css('box-shadow','0 4px 0 0px #f2394b inset');
        }else if(index === 15){
            $('.subMenu2').stop().hide();
            $('.cbtn').css('box-shadow','none');
            $('.cbtn').eq(3).css('box-shadow','0 4px 0 0px #f2394b inset');
        }

        $('.subMenu li a').css('background','rgba(0, 0, 0, 0.4)')
        $('.subMenu li a').eq(index).css('background','rgba(0, 0, 0, 0.7)');

        $('.subMenu2 li a').css('background','rgba(0, 0, 0, 0.4)')
        $('.subMenu2 li a').eq(index2).css('background','rgba(0, 0, 0, 0.7)');

    });


    $('#sliderWrap').hover(function(){
        $('.prev').stop().show();
        $('.next').stop().show();
    },function(){
        $('.prev').stop().hide();
        $('.next').stop().hide();
    });

    
});