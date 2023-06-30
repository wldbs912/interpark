$(function() {

    $(".salemenu>li").mouseover(function () {
    var i = $(this).index();
    $(".salemenu>li").removeClass("saleOn");
    $(".salemenu>li").eq(i).addClass("saleOn");
    $(".salemenu_box>li").stop().hide();
    $(".salemenu_box>li").eq(i).stop().show();
    })

});