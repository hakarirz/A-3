$(function(){
    let currentindex = 0;
    $(".slider").hide().first().show();

    setInterval(function(){
        let nextindex = (currentindex + 1)% 3;

        $(".slider").eq(currentindex).fadeOut(1200);
        $(".slider").eq(nextindex).fadeIn(1200);

        currentindex = nextindex;
    },3000);

    $(".nav > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(200);
    });
    $(".nav > ul > li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp(200);
    });

    const tabBtn = $(".info_menu > a");
    const tabCont = $(".info_content > div");
    tabCont.hide().eq(0).show();

    tabBtn.on("click",function(){
        const index = $(this).index();

        $(this).addClass("active").siblings().removeClass("active");
        tabCont.eq(index).show().siblings().hide();
    });

    $(".popup_btn").click(function(){
        $(".popup_view").show();
    });
    $(".popup_close").click(function(){
        $(".popup_view").hide();
    });
});