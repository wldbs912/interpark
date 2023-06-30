$(function(){
    $('.subMenu li a').mouseover(function(){
        var index = $(this).parent().index();
        $('.subMenu li a').css('background','rgba(0, 0, 0, 0.4)');

        $(this).css('background','rgba(0, 0, 0, 0.7)');

        $('.sliderImg li').stop().hide();
        $('.sliderImg li:eq(' + index + ')').stop().show();
    });

    $('.subMenu2 li a').mouseover(function(){
        var index = $(this).parent().index();
        $('.subMenu2 li a').css('background','rgba(0, 0, 0, 0.4)');

        $(this).css('background','rgba(0, 0, 0, 0.7)');

        index2 = index+9;
        $('.sliderImg li').stop().hide();
        $('.sliderImg li:eq(' + index2 + ')').stop().show();
    });



    $('.cbtn').hover(function(){
        $('.cbtn').css('box-shadow','none');
        $(this).css('box-shadow','0 4px 0 0 #f2394b inset');
        $('.subMenu, .subMenu2').hide();
        $(this).find('.subMenu, .subMenu2').stop().show();


        var index = $(this).index();

        if(index == 0){
            $('.sliderImg li').stop().hide();
            $('.sliderImg li').eq(0).stop().show();
        }else if(index == 1){
            $('.sliderImg li').stop().hide();
            $('.sliderImg li').eq(8).stop().show();
        }else if(index == 2){
            $('.sliderImg li').stop().hide();
            $('.sliderImg li').eq(9).stop().show();
        }else if(index == 3){
            $('.sliderImg li').stop().hide();
            $('.sliderImg li').eq(15).stop().show();
        }
    });
});