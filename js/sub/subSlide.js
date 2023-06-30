$(function(){
    function sub_prev(){
    $('.subRecommend_list > li:last').prependTo('.subRecommend_list');
    $('.subRecommend_list').css({marginLeft:-980});
    $('.subRecommend_list').stop().animate({marginLeft:0},900);
}    
$('.subPrev').click(function(){
    sub_prev();
});
function sub_next(){
    $('.subRecommend_list').stop().animate({marginLeft:-980},function(){
    $('.subRecommend_list > li:first').appendTo('.subRecommend_list');
    $('.subRecommend_list').css({marginLeft:0});
    });
}
$('.subNext').click(function(){
    sub_next();
});


function sub_prev1(){
    $('.subRecommend_list2 > li:last').prependTo('.subRecommend_list2');
    $('.subRecommend_list2').css({marginLeft:-980});
    $('.subRecommend_list2').stop().animate({marginLeft:0},900);
}    
$('.subPrev2').click(function(){
    sub_prev1();
});
function sub_next1(){
    $('.subRecommend_list2').stop().animate({marginLeft:-980},function(){
    $('.subRecommend_list2 > li:first').appendTo('.subRecommend_list2');
    $('.subRecommend_list2').css({marginLeft:0});
    });
}
$('.subNext2').click(function(){
    sub_next1();
});


function sub_prev2(){
    $('.subRecommend_list3 > li:last').prependTo('.subRecommend_list3');
    $('.subRecommend_list3').css({marginLeft:-980});
    $('.subRecommend_list3').stop().animate({marginLeft:0},900);
}    
$('.subPrev3').click(function(){
    sub_prev2();
});
function sub_next2(){
    $('.subRecommend_list3').stop().animate({marginLeft:-980},function(){
    $('.subRecommend_list3 > li:first').appendTo('.subRecommend_list3');
    $('.subRecommend_list3').css({marginLeft:0});
    });
}
$('.subNext3').click(function(){
    sub_next2();
});

});