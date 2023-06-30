var i=0;


function slide(){

i++;

if (i > $('.headerBanner_slide li:last').index()){

i=0;

    }

$('.headerBanner_slide li').eq(i).stop().fadeIn('slow');

$('.headerBanner_slide li').eq(i-1).stop().fadeOut();

}



setInterval(slide,5000); 