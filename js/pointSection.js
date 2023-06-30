$(function () {
    function prev(){
        $('.pointSection_wrap > ul > li:last').prependTo('.pointSection_wrap > ul');
        $('.pointSection_wrap > ul').css({marginLeft:-370}); 
        $('.pointSection_wrap > ul').stop().animate({marginLeft:0},800);
    }

    function next(){
        $('.pointSection_wrap > ul').stop().animate({marginLeft:-370}, function(){
            $('.pointSection_wrap  > ul > li:first').appendTo('.pointSection_wrap > ul');
            $('.pointSection_wrap > ul').css({marginLeft:0});
        });
    }

    
    var index = 1;
    function slide(){
        $('.pointSection_wrap > ul').stop().animate({marginLeft:-370}, function(){
            $('.pointSection_wrap > ul li:first').appendTo('.pointSection_wrap > ul');
            $('.pointSection_wrap > ul').css({marginLeft:0});
        });
        
        index++;

        if(index == 5){
            index = 1;
        }


        $('.pgNum_count').text(index);
    }

    setInterval(slide, 3000);

    $('.pgBtn_prev').click(function(){
        prev();
    });

    $('.pgBtn_next').click(function(){
        next();
    });
});
