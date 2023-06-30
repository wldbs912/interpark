
$(function(){
    var i=0;
    $(".recommendWrap > #categoryTaps > #categoryTaps_nav > li").mouseenter(function(){
        i = ($(this).index())+1
        $("#main4 > .field_wrap > div").hide()


        $(".recommendWrap > #categoryTaps > #categoryTaps_nav > li").css({
            "border-bottom":"none",
            "color":"#000   "
        })

        $(".recommendWrap > #categoryTaps > #categoryTaps_nav > li:hover").css({
            "border-bottom":"2px solid #e66a57",
            "color":"#e66a57"
        })


        $(".recommendWrap > #categoryTaps > div:nth-of-type"+"("+i+")").stop().fadeIn("fast")
    })

    
});