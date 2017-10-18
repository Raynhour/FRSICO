$('document').ready(function(){

$(".promo__video").click(function(){
	var videosrc = $(this).data("video");
	$(".promo__modal").css("display","flex");
	$(".promo__iframe").attr("src", videosrc);
});
$(".promo__modal, .promo__close").click(function(){
	$(".promo__modal").css("display","none");
	$(".promo__iframe").attr("src", "none");
});
});