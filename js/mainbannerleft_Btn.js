$(function () {
    $('.leftSide li').not(":first").hide();

    $('#sliderWrap').hover();

    $('.mainbanner_prev').click(function(){
        var current = $('.leftSide li:visible');
        var prev = current.prev('.leftSide li');
        if(prev.length === 0){
            prev = $('.leftSide li:last');
        }
        current.hide();
        prev.show();
    });
    $('.mainbanner_next').click(function(){
        var current = $('.leftSide li:visible');
        var next = current.next('.leftSide li');
        if(next.length === 0){
            next = $('.leftSide li:first');
        }
        current.hide();
        next.show();
    });


    

});

