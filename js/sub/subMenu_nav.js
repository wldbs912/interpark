$(function () {
	$("#subMenu_nav>ul>li").click(function () {
		var i = $(this).index();
		$("#subMenu_nav>ul>li").removeClass("on1");
		$("#subMenu_nav>ul>li").eq(i).addClass("on1");
	})
});