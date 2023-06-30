$(function(){
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"뽀로로" },
    headers:{Authorization: "KakaoAK eae498bf4618700e51c2119ea8c0f4c9"}
})
.done(function( msg ) {

    console.log( msg.documents[1].title );
    console.log( msg.documents[1].thumbnail );

    var list = document.getElementsByTagName('div');

    for(var i=0; i<list.length; i++){

    $(".saleImgbox").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
    $(".saleTextbox").eq(i).append("<h4>" + msg.documents[i].title + "</h4>" + "<p>정가 " + msg.documents[i].price + "원" + "</p>" + "<h5>"+msg.documents[i].sale_price + "원" + "</h5>");
    }

});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"요리" },
    headers:{Authorization: "KakaoAK eae498bf4618700e51c2119ea8c0f4c9"}
})
.done(function( msg ) {

    console.log( msg.documents[1].title );
    console.log( msg.documents[1].thumbnail );

    var list = document.getElementsByTagName('div');

    for(var i=0; i<list.length; i++){

    $(".saleImgbox2").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
    $(".saleTextbox2").eq(i).append("<h4>" + msg.documents[i].title + "</h4>" + "<p>정가 " + msg.documents[i].price + "원" + "</p>" + "<h5>"+msg.documents[i].sale_price + "원" + "</h5>");
    }

});

});