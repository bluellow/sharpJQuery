/**
 * Created by Administrator on 2016/9/2.
 */
(function($){

    $.fn.silder =function(option){
        option = $.extend({},$.fn.silder.option,option);
        return this.each(function(){
            var curIndex    = 0;        //var currentIndex = $(this).index();
            var targetIndex = 0;
            var $bannerImg  = $("#" + option.banner_listId).find("img");
            var $parentContainerId = $("#"+option.parentContainerId);
            $parentContainerId.data('targetIndex',0);
            $parentContainerId.data('curIndex',0);
            var t = null;
            $("#"+option.btnUlId).find("li").click(function() {
                targetIndex = $(this).index();
                $parentContainerId.data("targetIndex",targetIndex)
                if(targetIndex == curIndex){return;}
                curIndex = targetIndex;
                $parentContainerId.data('curIndex',curIndex)
                var targetImg = $bannerImg.eq(targetIndex);
                $bannerImg.not(targetImg).hide();
                $bannerImg.eq(targetIndex).fadeIn(500);
                $("#" + option.bannerInfoId).text($bannerImg.eq(targetIndex).attr("title"));
                $(this).parent().find("li").removeClass("on");
                $(this).parent().find("li").eq(targetIndex).addClass("on");
            });
            option.curIndex = curIndex;
            option.targetIndex = targetIndex;
            setInterval(option.m_interval, 500,$parentContainerId);

            $(".gou").mouseenter(function(){
                clearInterval(t);
                t = null;
            }).mouseleave(function(){
                t = setInterval("autoClick()", 500);
            });
        });
    };

    $.fn.silder.option = {
        parentContainerId : "gou",   //最外边的容器
        bannerInfoId : "banner_info",//文字id
        btnUlId : "list",            //下边按钮Ulid
        banner_listId :"banner_list", //包含图片集的div的id
        m_interval:function(ss){
            var targetIndex = ss.data("curIndex") + 1;
            if(targetIndex > $("#banner_list img").length -  1){targetIndex = 0;}
            ss.data("targetIndex",targetIndex);
            $("#banner ul li").eq(targetIndex).trigger('click');
        },
        targetIndex:0,
        curIndex:0,
    };
})(jQuery);

$(document).ready(function(){
    $('#gou').silder({
        parentContainerId:"gou",
        bannerInfoId : "banner_info",
        btnUlId : "list",
        banner_listId :"banner_list"
    });

});
