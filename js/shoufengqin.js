/**
 * Created by ÕÅ¿­Èð on 2019/10/21.
 */
$(function () {
    $(".z-s-block>li").on("mouseenter", function () {
        //li ¿í¶È±ä600
        $(this).stop().animate({
            width: $(window).innerWidth()-(3*260)
        }, 200).find("span").hide().parent().siblings().stop().animate({
            width: "260px"
        }, 200).find("span").show().animate({width: "260px",lineHeight: 400+"px"}, 100).parent().find("img").css({
            //width:"100%",
            //height:"100%"
        });
    });
});