/*책소개*/
$(function () {
    $(".textSpread").eq(0).click(function () {
    $(".introText").height("auto");
    $(".textSpread").eq(0).hide();
    $(".introText_hidden").show();
    $(".textSpread").eq(1).show();
    });
});

$(function () {
    $(".textSpread").eq(1).click(function () {
    $(".introText").height("auto");
    $(".textSpread").eq(1).hide();
    $(".introText_hidden").hide();
    $(".textSpread").eq(0).show();
    });
});
/*출판사 서평*/
$(function () {
    $(".pubSpread").eq(0).click(function () {
    $(".pubText").height("auto");
    $(".pubSpread").eq(0).hide();
    $(".pubText_hidden").show();
    $(".pubSpread").eq(1).show();
    });
});

$(function () {
    $(".pubSpread").eq(1).click(function () {
    $(".pubText").height("auto");
    $(".pubSpread").eq(1).hide();
    $(".pubText_hidden").hide();
    $(".pubSpread").eq(0).show();
    });
});
/*목차*/
$(function () {
    $(".indexSpread").eq(0).click(function () {
    $(".indexText").height("auto");
    $(".indexSpread").eq(0).hide();
    $(".indexText_hidden").show();
    $(".indexSpread").eq(1).show();
    });
});

$(function () {
    $(".indexSpread").eq(1).click(function () {
    $(".indexText").height("auto");
    $(".indexSpread").eq(1).hide();
    $(".indexText_hidden").hide();
    $(".indexSpread").eq(0).show();
    });
});
/*본문중에서*/
$(function () {
    $(".maintextSpread").eq(0).click(function () {
    $(".maintextText").height("auto");
    $(".maintextSpread").eq(0).hide();
    $(".maintextText_hidden").show();
    $(".maintextSpread").eq(1).show();
    });
});

$(function () {
    $(".maintextSpread").eq(1).click(function () {
    $(".maintextText").height("auto");
    $(".maintextSpread").eq(1).hide();
    $(".maintextText_hidden").hide();
    $(".maintextSpread").eq(0).show();
    });
});