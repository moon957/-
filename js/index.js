/**
 * Created by 张凯瑞 on 2019/10/19.
 */
$(function (){
    var date=new Date();
    $(".data-time").eq(0).html(date.toISOString().substring(0,date.toISOString().indexOf("T")))
    var str = "星期"+"日一二三四五六".charAt(new Date().getDay());
    $(".xingqi").html(str)
        $(".s-second-header>ul>li").each(function(){
           // console.log($(this))
            $(this).on("click",function(){
                $(this).addClass("boder-line").siblings().removeClass("boder-line");

            })
        })
        $(".z-s-block>li").each(function(){
            $(this).width($(window).innerWidth()/$(".z-s-block>li").length)
            $(this).height(window.innerHeight)
            //console.log($(window).innerWidth()/4)
        })


    $(".map-block").height(window.innerHeight);
    $(".silder-block").css({
        height:window.innerHeight+"px"
    })
    $(".imgblock").css({width:window.innerWidth*5})
    $(".imglist").css({width:window.innerWidth})

    var imglist=document.getElementsByClassName("imglist");
    var imgblock=document.getElementsByClassName("imgblock")[0];
    var diandian=document.getElementsByClassName("diandian");
    var block=document.getElementsByClassName("silder-block")[0];
    var count=0;
    var time=null;
    var oldtime=new Date().getTime()
    $(".diandian").eq(0).find("img").attr("src","img/icon/jianzhibai.png");

    function hh(){
        var newtime=new Date().getTime();
        if(newtime-oldtime>=3500){
                imgblock.className="imgblock trans";
                $(".diandian").eq(count).find("img").attr("src","img/icon/jianzhihong.png");
                count++;
                imgblock.style.marginLeft=-window.innerWidth*count+"px";
                $(".diandian").eq(count>imglist.length-2?0:count).find("img").attr("src","img/icon/jianzhibai.png");
                setTimeout(function(){
                    if(count>imglist.length-2){
                        count=0;
                        imgblock.className="imgblock";
                        imgblock.style.marginLeft="0px";
                    }
                },500);
            oldtime=newtime;

        }
        newtime=null;
        time=window.requestAnimationFrame(hh)
    }

    hh()

    block.onmouseenter=function(){
      window.cancelAnimationFrame(time)

    };
    block.onmouseleave=function(){
        hh();
    };
    for(var i=0;i<diandian.length;i++){
        diandian[i].index=i;
        diandian[i].onmouseenter=function(){

            $(".diandian").eq(count).find("img").attr("src","img/icon/jianzhihong.png");
            imgblock.style.marginLeft=-window.innerWidth*this.index +"px";

            $(this).find("img").attr("src","img/icon/jianzhibai.png");
            count=this.index;
        }
    }
    //document.getElementsByClassName("mingce-block")[0].style.height=window.innerHeight+"px";
    //var before=0;
    //var count=0;
    //var magin=null;
    //$(window).on("scroll",function(){
    //    //console.log($(this).scrollTop()-before<1)
    //    if($(this).scrollTop()-before>200){
    //       // console.log(1)
    //       before=$(this).scrollTop();
    //        //console.log(before)
    //        count++;
    //        magin=$(window).innerHeight()*count>$(".s-bigblock").height()-$(window).innerHeight()?($(".s-bigblock").height()-$(window).innerHeight()):$(window).innerHeight()*count
    //       //$(this).scrollTop(700)
    //        //console.log($(".s-bigblock").height()-$(window).innerHeight(),$(".s-bigblock").height())
    //       //$(".s-content-block").animate({
    //       //    marginTop:magin
    //       //},1000)
    //    }else if($(this).scrollTop()-before<200){
    //       // console.log(2)
    //        before=$(this).scrollTop();
    //        count--;
    //        //magin=$(window).innerHeight()*count>$(".s-bigblock").height()-$(window).innerHeight()?-($(".s-bigblock").height()-$(window).innerHeight()):-$(window).innerHeight()*count
    //        //$(".s-content-block").animate({
    //        //    marginTop:magin
    //        //},1000)
    //       // console.log($(".s-bigblock").height())
    //    }
    //});
    var json=[{
        title:"国家及代表性传承人",
        child:[{"name":"民间文学","number":123},{"name":"传统音乐","number":380},
            {"name":"传统舞蹈","number":298},{"name":"传统戏剧","number":784},
            {"name":"曲艺","number":207},{"name":"传统体育","number":88},
            {"name":"传统美术","number":378},{"name":"传统技艺","number":518},
            {"name":"传统医药","number":138},{"name":"民俗","number":60}]
    }, {
            title:"国家级代表性项目",
        child:[{"name":"民间文学","number":231},{"name":"传统音乐","number":401},
            {"name":"传统舞蹈","number":324},{"name":"传统戏剧","number":448},
            {"name":"曲艺","number":425},{"name":"传统体育","number":361},
            {"name":"传统美术","number":193},{"name":"传统技艺","number":507},
            {"name":"传统医药","number":137},{"name":"民俗","number":427}]
        }]
    $(".left_list").click(function(){
        $(this).addClass("jinse").siblings().removeClass("jinse")
        for(var i=0;i<json.length;i++){
            if(json[i].title==$(this).html()){
                for(var index in json[i].child){
                    $(".list-text>span:nth-child(1)").eq(index).html(json[i].child[index].number);
                    $(".list-text>span:nth-child(2)").eq(index).html(json[i].child[index].name)
                }
            }
        }
    })
    var cityjson=[{
        city:"全国",
        child:[{
            title:"国家及代表性传承人",
            child:[{"name":"民间文学","number":123},{"name":"传统音乐","number":380},
                {"name":"传统舞蹈","number":298},{"name":"传统戏剧","number":784},
                {"name":"曲艺","number":207},{"name":"传统体育","number":88},
                {"name":"传统美术","number":378},{"name":"传统技艺","number":518},
                {"name":"传统医药","number":138},{"name":"民俗","number":60}]
        }, {
            title:"国家级代表性项目",
            child:[{"name":"民间文学","number":231},{"name":"传统音乐","number":401},
                {"name":"传统舞蹈","number":324},{"name":"传统戏剧","number":448},
                {"name":"曲艺","number":425},{"name":"传统体育","number":361},
                {"name":"传统美术","number":193},{"name":"传统技艺","number":507},
                {"name":"传统医药","number":137},{"name":"民俗","number":427}]
        },{
           city:"北京",
            child:[{
                title:"国家及代表性传承人",
                child:[{"name":"民间文学","number":0},{"name":"传统音乐","number":1},
                    {"name":"传统舞蹈","number":8},{"name":"传统戏剧","number":4},
                    {"name":"曲艺","number":7},{"name":"传统体育","number":8},
                    {"name":"传统美术","number":8},{"name":"传统技艺","number":18},
                    {"name":"传统医药","number":8},{"name":"民俗","number":0}]
            }, {
                title:"国家级代表性项目",
                child:[{"name":"民间文学","number":1},{"name":"传统音乐","number":1},
                    {"name":"传统舞蹈","number":4},{"name":"传统戏剧","number":8},
                    {"name":"曲艺","number":5},{"name":"传统体育","number":36},
                    {"name":"传统美术","number":1},{"name":"传统技艺","number":7},
                    {"name":"传统医药","number":7},{"name":"民俗","number":4}]
            }]
        },{
            city:"山东",
            child:[{
                title:"国家及代表性传承人",
                child:[{"name":"民间文学","number":0},{"name":"传统音乐","number":1},
                    {"name":"传统舞蹈","number":8},{"name":"传统戏剧","number":4},
                    {"name":"曲艺","number":7},{"name":"传统体育","number":8},
                    {"name":"传统美术","number":8},{"name":"传统技艺","number":18},
                    {"name":"传统医药","number":8},{"name":"民俗","number":0}]
            }, {
                title:"国家级代表性项目",
                child:[{"name":"民间文学","number":1},{"name":"传统音乐","number":1},
                    {"name":"传统舞蹈","number":4},{"name":"传统戏剧","number":8},
                    {"name":"曲艺","number":5},{"name":"传统体育","number":36},
                    {"name":"传统美术","number":1},{"name":"传统技艺","number":7},
                    {"name":"传统医药","number":7},{"name":"民俗","number":4}]
            }]
        }]
    }]


});