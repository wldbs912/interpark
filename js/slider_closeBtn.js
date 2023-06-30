$(function() {
    $("#sliderLeft").mouseenter(function() {
        if ($(".sliderLeft_hover").css("display") == "none") {
            $(".sliderLeft_hover").animate({
                height: 'toggle',
                width: 'toggle'
            })
        }
    })

    $(".hover_closeBtn").click(function() {
        $(".sliderLeft_hover").fadeOut();
    })
    $(".hover_closeBtn2").click(function() {
        $(".sliderLeft_hover").fadeOut();
    })
})