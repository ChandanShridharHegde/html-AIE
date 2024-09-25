$("a").click(function(){
   $("a").css( "color","red");
});

$("img").on("click",function(){
    $("img").animate({opacity:0.5})
});
$("p").on("mouseover",function(){
    $("p").css("color","black");
})
