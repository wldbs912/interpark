$(function(){
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"열세 살의 걷기 클럽"},
    headers:{Authorization: "KakaoAK eae498bf4618700e51c2119ea8c0f4c9"}
})
    .done(function( msg ) {
        var divs = document.getElementsByTagName('div');
        console.log( msg.documents[0].title );
        console.log( msg.documents[0].thumbnail );

        for(var i=0; i<divs.length; i++){
        
        $(".main_Slide > li:nth-child(1) > .main_Slideimgbox").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
        $(".main_Slide > li:nth-child(1) > .main_Slidecontent > p").eq(i).append(msg.documents[i].title);
        
        
        var str=msg.documents[i].contents;
        var main=str.substring(0,70);
        
        $(".main_Slide > li:nth-child(1) > .main_Slidecontent > .content > p").eq(i).append("<p>"+main+"</p>");
        
        }
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"하늘과 바람과 별과 인간"},
    headers:{Authorization: "KakaoAK eae498bf4618700e51c2119ea8c0f4c9"}
})
    .done(function( msg ) {
        var divs = document.getElementsByTagName('div');
        console.log( msg.documents[0].title );
        console.log( msg.documents[0].thumbnail );

        for(var i=0; i<divs.length; i++){
        
        $(".main_Slide > li:nth-child(2) > .main_Slideimgbox").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
        $(".main_Slide > li:nth-child(2) > .main_Slidecontent > p").eq(i).append(msg.documents[i].title);
        
        
        var str=msg.documents[i].contents;
        var main=str.substring(0,70);
        
        $(".main_Slide > li:nth-child(2) > .main_Slidecontent > .content > p").eq(i).append("<p>"+main+"</p>");
        
        }
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"경제 읽어주는 남자의 15분 경제 특강"},
    headers:{Authorization: "KakaoAK eae498bf4618700e51c2119ea8c0f4c9"}
})
    .done(function( msg ) {
        var divs = document.getElementsByTagName('div');
        console.log( msg.documents[0].title );
        console.log( msg.documents[0].thumbnail );

        for(var i=0; i<divs.length; i++){
        
        $(".main_Slide > li:nth-child(3) > .main_Slideimgbox").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
        $(".main_Slide > li:nth-child(3) > .main_Slidecontent > p").eq(i).append(msg.documents[i].title);
        
        
        var str=msg.documents[i].contents;
        var main=str.substring(0,70);
        
        $(".main_Slide > li:nth-child(3) > .main_Slidecontent > .content > p").eq(i).append("<p>"+main+"</p>");
        
        }
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"이토록 클래식이 끌리는 순간"},
    headers:{Authorization: "KakaoAK eae498bf4618700e51c2119ea8c0f4c9"}
})
    .done(function( msg ) {
        var divs = document.getElementsByTagName('div');
        console.log( msg.documents[0].title );
        console.log( msg.documents[0].thumbnail );

        for(var i=0; i<divs.length; i++){
        
        $(".main_Slide > li:nth-child(4) > .main_Slideimgbox").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
        $(".main_Slide > li:nth-child(4) > .main_Slidecontent > p").eq(i).append(msg.documents[i].title);
        
        
        var str=msg.documents[i].contents;
        var main=str.substring(0,70);
        
        $(".main_Slide > li:nth-child(4) > .main_Slidecontent > .content > p").eq(i).append("<p>"+main+"</p>");
        
        }
});


});