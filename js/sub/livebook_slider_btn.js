$(function(){
    function livenext() {
        $(".liveSlide").stop().animate({ marginLeft: -350 }, function () {
            $(".liveSlide li:first").appendTo(".liveSlide");
            $(".liveSlide").css({ marginLeft: 0 });
        });
    }

    function liveprev() {            
        $(".liveSlide li:last").prependTo(".liveSlide");
        $(".liveSlide").css({ marginLeft: -350 });
        $(".liveSlide").stop().animate({ marginLeft: 0 });            
    }

    $(".livePrev").click(function(){
        liveprev();
    });

    $(".liveNext").click(function(){
        livenext();
    });
});