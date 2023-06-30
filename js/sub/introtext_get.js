/*책소개*/
$(function(){
    $.get("./text/introText.txt", function(data){
    $('.introText').html(data);
    })
});
/*출판사 서평*/
$(function(){
    $.get("./text/pubText.txt", function(data){
    $('.pubText').html(data);
    })
});
/*목차*/
$(function(){
    $.get("./text/indexText.txt", function(data){
    $('.indexText').html(data);
    })
});
/*본문중에서*/
$(function(){
    $.get("./text/maintextText.txt", function(data){
    $('.maintextText').html(data);
    })
});