$(function(){
    $(function() {
        $('.bookAll').click(function(){
        var slideContent = $('.categoryMenu');
        if (slideContent.is(':visible')) {
            slideContent.slideUp();
            $('#down').css('transform', 'none');
        } else {
            slideContent.slideDown();
            $('#down').css('transform', 'rotate(180deg)');
        }
        });
    });

    $('.btnX').click(function(){
        $('.categoryMenu').stop().slideUp();
        $('#up').stop().hide();
        $('#down').stop().show();
    });
});


