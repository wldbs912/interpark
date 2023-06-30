$(function(){
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"문학" ,size:50},
    headers:{Authorization: "KakaoAK eae498bf4618700e51c2119ea8c0f4c9"}
})
.done(function( msg ) {

    var list = document.getElementsByTagName('div');

    console.log( msg.documents[0].title );
    console.log( msg.documents[0].thumbnail );

    for(var i=0; i<list.length; i++){
        $("#tabContent .tabContent_box .literature li").eq(i).append("<a href='#'><img src='"+msg.documents[i].thumbnail+"'/></a>");
        $("#tabContent .tabContent_box .literature li").eq(i).append('<h4>'+msg.documents[i].title+'</h4>');
        $("#tabContent .tabContent_box .literature li").eq(i).append('<span>'+msg.documents[i].sale_price+'원'+'+750P'+'</span>');
    }

});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"인문/교양" ,size:50},
    headers:{Authorization: "KakaoAK eae498bf4618700e51c2119ea8c0f4c9"}
})
.done(function( msg ) {

    var list = document.getElementsByTagName('div');

    console.log( msg.documents[0].title );
    console.log( msg.documents[0].thumbnail );

    for(var i=0; i<list.length; i++){
        $("#tabContent2 .tabContent_box .human li").eq(i).append("<a href='#'><img src='"+msg.documents[i].thumbnail+"'/></a>");
        $("#tabContent2 .tabContent_box .human li").eq(i).append('<h4>'+msg.documents[i].title+'</h4>');
        $("#tabContent2 .tabContent_box .human li").eq(i).append('<span>'+msg.documents[i].sale_price+'원'+'+850P'+'</span>');
    }

});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"경제" ,size:50},
    headers:{Authorization: "KakaoAK eae498bf4618700e51c2119ea8c0f4c9"}
})
.done(function( msg ) {

    var list = document.getElementsByTagName('div');

    console.log( msg.documents[0].title );
    console.log( msg.documents[0].thumbnail );

    for(var i=0; i<list.length; i++){
        $("#tabContent3 .tabContent_box .economy li").eq(i).append("<a href='#'><img src='"+msg.documents[i].thumbnail+"'/></a>");
        $("#tabContent3 .tabContent_box .economy li").eq(i).append('<h4>'+msg.documents[i].title+'</h4>');
        $("#tabContent3 .tabContent_box .economy li").eq(i).append('<span>'+msg.documents[i].sale_price+'원'+'+1,000P'+'</span>');
    }

});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"유아" ,size:50},
    headers:{Authorization: "KakaoAK eae498bf4618700e51c2119ea8c0f4c9"}
})
.done(function( msg ) {

    var list = document.getElementsByTagName('div');

    console.log( msg.documents[0].title );
    console.log( msg.documents[0].thumbnail );

    for(var i=0; i<list.length; i++){
        $("#tabContent4 .tabContent_box .child li").eq(i).append("<a href='#'><img src='"+msg.documents[i].thumbnail+"'/></a>");
        $("#tabContent4 .tabContent_box .child li").eq(i).append('<h4>'+msg.documents[i].title+'</h4>');
        $("#tabContent4 .tabContent_box .child li").eq(i).append('<span>'+msg.documents[i].sale_price+'원'+'+750P'+'</span>');
    }

});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"학습" ,size:50},
    headers:{Authorization: "KakaoAK eae498bf4618700e51c2119ea8c0f4c9"}
})
.done(function( msg ) {

    var list = document.getElementsByTagName('div');

    console.log( msg.documents[0].title );
    console.log( msg.documents[0].thumbnail );

    for(var i=0; i<list.length; i++){
        $("#tabContent5 .tabContent_box .study li").eq(i).append("<a href='#'><img src='"+msg.documents[i].thumbnail+"'/></a>");
        $("#tabContent5 .tabContent_box .study li").eq(i).append('<h4>'+msg.documents[i].title+'</h4>');
        $("#tabContent5 .tabContent_box .study li").eq(i).append('<span>'+msg.documents[i].sale_price+'원'+'+130P'+'</span>');
    }
});
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"global" ,size:50},
        headers:{Authorization: "KakaoAK eae498bf4618700e51c2119ea8c0f4c9"}
    })
    .done(function( msg ) {
    
        var list = document.getElementsByTagName('div');
    
        console.log( msg.documents[0].title );
        console.log( msg.documents[0].thumbnail );
    
        for(var i=0; i<list.length; i++){
            $("#tabContent6 .tabContent_box .global li").eq(i).append("<a href='#'><img src='"+msg.documents[i].thumbnail+"'/></a>");
            $("#tabContent6 .tabContent_box .global li").eq(i).append('<h4>'+msg.documents[i].title+'</h4>');
            $("#tabContent6 .tabContent_box .global li").eq(i).append('<span>'+msg.documents[i].sale_price+'원'+'+540P'+'</span>');
        }

        
});

});