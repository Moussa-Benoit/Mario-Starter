$(".start").click(function(){
    $(".start").hide();
     $(".board").show();
});

$().mousedown(function(){
    $("mario").css("bottom","175px");
});

$().mouseup(function(){
    $("jump").css("bottom","60px");
    $(".coin").hide();
    $(".count").text(1);
});