/**
 * Created by Administrator on 2016/8/29.
 */
$(document).ready(function(){
    //请6个 外加 其他品牌对象
    var $category = $('ul li:gt(5):not(:last) ');
    $category.hide();
    var $toggleBtn = $('div.showmore > a');

    //写法一:
    //$toggleBtn.click(function(){
    //    if($category.is(":visible")){
    //        $category.hide();
    //        $(this).find('span').text("显示全部品牌");
    //        $('ul li').removeClass("promoted");
    //    }else{
    //        $category.show();
    //        $(this).find('span').text("精简显示品牌");
    //        $('ul li').filter(":contains('佳能'),:contains('尼康'),:contains('奥林巴斯')").addClass("promoted");
    //    }
    //    return false;
    //});

    //写法二:(1.9版本已经淘汰以功能)
    //$toggleBtn.toggle(function(){
    //    $category.show();
    //    $(this).find('span').text("精简显示品牌");
    //    $('ul li').filter(":contains('佳能'),:contains('尼康'),:contains('奥林巴斯')").addClass("promoted");
    //},function(){
    //    $category.hide();
    //    $(this).find('span').text("显示全部品牌");
    //    $('ul li').removeClass("promoted");
    //})

    $toggleBtn.click(function() {
        $(this).find('span').toggleClass("colorYellow");
        return false;
    });


    //$("button").click(function(){
    //    $("li").toggleClass(function(n){
    //        return "listitem_" + n;
    //    });
    //});
})
