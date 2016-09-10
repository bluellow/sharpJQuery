/**
 * Created by Administrator on 2016/9/1.
 */

//插件编写
$(document).ready(function() {
    $.fn.extend({
        "color": function (value) {
            $("#banner_bg").color("red");
        }
    });
});


var curIndex    = 0;        //var currentIndex = $(this).index();
var targetIndex = 0;
var t = null;
function autoClick(){
    targetIndex = curIndex + 1;
    if(targetIndex > $("#banner_list img").length -  1){targetIndex = 0;}
    $("#banner ul li").eq(targetIndex).trigger('click');
}
////插件应用
$(document).ready(function(){
    //初始化
    var $bannerImg  = $("#banner_list img");
    $("#banner ul li").click(function(){
        console.log(targetIndex);
        targetIndex = $(this).index();
        if(targetIndex == curIndex){return;}
        curIndex = targetIndex;
        var targetImg = $bannerImg.eq(targetIndex);
        $bannerImg.not(targetImg).hide();
        $bannerImg.eq(targetIndex).fadeIn(500);
        $("#banner_info").text($bannerImg.eq(targetIndex).attr("title"));
        $(this).parent().find("li").removeClass("on");
        $(this).parent().find("li").eq(targetIndex).addClass("on");
    });

    t = setInterval("autoClick()", 500);
    $(".gou").mouseenter(function(){
        clearInterval(t);
        t = null;
     }).mouseleave(function(){
        t = setInterval("autoClick()", 500);
    });
});