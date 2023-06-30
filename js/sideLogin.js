$(function () {
    $(".sideLogin > .nextbox").click(function () {
        if ($(".sideLogin").css("width") == "8px") {
            $(".sideLogin").stop().animate({
                width: '120',
            })
            $(".loginBox_prev").show()
            $(".loginBox_next").hide()
        } else {
            $(".sideLogin").stop().animate({
                width: '8',
            })
            $(".loginBox_prev").show()
            $(".loginBox_next").hide()
        }
    })
});    